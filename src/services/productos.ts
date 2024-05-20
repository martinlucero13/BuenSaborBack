import { getDBConnection, DatabasesEnum } from "../database/connectionManager"

export default class ProductosService {
  private conectionLegacy
  constructor() {
    this.conectionLegacy = getDBConnection(DatabasesEnum.LEGACY)
  }

  async getProductos() {
    const query = 
    `SELECT a.*, b.denominacion AS nomrub 
    FROM ArticuloManufacturado a
    INNER JOIN Rubro b ON a.idRubro = b.idRubro
    WHERE b.habilitado = 1`

    const data = await this.conectionLegacy.query(query)
    //console.log(data)
    return data
  }

  async getProductosPorMarca(marca :string) {
    const query = 
    `SELECT a.*, b.denominacion AS nomrub 
    FROM ArticuloManufacturado a
    INNER JOIN Rubro b ON a.idRubro = b.idRubro
    WHERE b.habilitado = 1 and b.idRubro = ${marca}`

    const data = await this.conectionLegacy.query(query)
    return data
  }

  sumarMinutosAHora(horas: number,minutos: number,segundos: number,tiempoTotal: number): string {
    // Convertir todo a minutos
    let totalMinutos = horas * 60 + minutos + tiempoTotal;

    // Calcular las nuevas horas y minutos
    const nuevaHora = Math.floor(totalMinutos / 60) % 24;
    const nuevoMinuto = totalMinutos % 60;

    // Formatear la nueva hora
    const nuevaHoraStr = (nuevaHora < 10 ? '0' : '') + nuevaHora.toString();
    const nuevoMinutoStr = (nuevoMinuto < 10 ? '0' : '') + nuevoMinuto.toString();

    // Componer la nueva hora
    return `${nuevaHoraStr}:${nuevoMinutoStr}:${segundos}`;
}

  async savePedido(dataPedido: any) {
    //Para guardar el pedido primero guardo en la tabla pedido y hago un bucle por cada articulo, 
    //los cuales voy guardando en el detalle los 
    //ESTADOS son 0 apenas ingresa en pendiente de confirmacion
    //1 En confirmado/cocina/preparacion
    //2 Finalizado
    //3 Cancelado
    //4 Entrgado
    //RETIRO 1 Retiro Por Sucursal
    //2 Llevar a Domicilio
    //console.log(dataPedido)

    const queryultNum = `SELECT MAX(numero) AS numero FROM Pedido`;
    let ultNumero = await this.conectionLegacy.query(queryultNum);
    let ultNum: number = ultNumero[0].numero;
    ultNum ++;

    let fecha_str = dataPedido.dataPedido[0].fecha;
    let dia = fecha_str.substr(0, 2);
    let mes = fecha_str.substr(2, 2);
    let ano = fecha_str.substr(4, 4);
    let fecha_formateada = ano + '-' + mes + '-' + dia;

    let tiempoTotal =0;
    for(let i=0; i<dataPedido.dataPedido.length; i++){
      tiempoTotal = tiempoTotal + dataPedido.dataPedido[i].tiempoEstimadoCocina
      //tiempoTotal = tiempoTotal + (dataPedido.dataPedido[i].tiempoEstimadoCocina * dataPedido.dataPedido[i].cantidad) 
      //Esta podria ser una opcion
      //mas para sacar el tiempo, pero se supone que cuenden prepara varias al mismo tiempo, pero tambien lo podemos tener en cuenta
      //Solo que el tiempo total final se puede ir muy alto si los tiempos son de muchos min y la cantidad es mucha
    }

    let hora_str = dataPedido.dataPedido[0].hora;
    let horas = parseInt(hora_str.substr(0, 2));
    let minutos = parseInt(hora_str.substr(2, 2));
    let segundos = parseInt(hora_str.substr(4, 2));
    let horaEstimadaFin = this.sumarMinutosAHora(horas,minutos,segundos,tiempoTotal);

    //console.log(fecha_formateada, ultNum, horaEstimadaFin);
    try{
      // Iniciar transacción
      await this.conectionLegacy.query('START TRANSACTION');

      const queryPedido =
      `INSERT INTO Pedido (fecha, numero, estado, horaEstimadaFin, tipoEnvio, total, idCliente)
      VALUES('${fecha_formateada}', ${ultNum}, 0, '${horaEstimadaFin}', ${dataPedido.dataPedido[0].retiro}, ${dataPedido.dataPedido[0].totalNETO}, ${dataPedido.dataPedido[0].legajo})`
      const data = await this.conectionLegacy.query(queryPedido)

      if (data.affectedRows > 0) {
        //console.log("Inserto la cabecera correctamente")
        const queryUltPed = `SELECT MAX(idPedido) AS id FROM Pedido`
        let ultPedido = await this.conectionLegacy.query(queryUltPed);
        let ultidPedido: number = ultPedido[0].id;
        let correctos: number = 0;

        for(let i=0; i<dataPedido.dataPedido.length; i++){

            const queryDetalle = `INSERT INTO DetallePedido (cantidad, subtotal, idPedido, idArticuloManufacturado)
            VALUES (${dataPedido.dataPedido[i].cantidad}, ${dataPedido.dataPedido[i].precio}, ${ultidPedido}, ${dataPedido.dataPedido[i].idArticuloManufacturado})`
            const dataDetalle = await this.conectionLegacy.query(queryDetalle);
            // Verificar si la inserción fue exitosa
            if (dataDetalle.affectedRows > 0) {
              correctos++;
          }
        }
        // Verificar si todas las inserciones en DetallePedido fueron exitosas
        if (correctos === dataPedido.dataPedido.length) {
          // Si todas las inserciones fueron exitosas, hacer commit
          let factura = await this.saveFactura(dataPedido)
          if(factura === 1){
            await this.conectionLegacy.query('COMMIT');
            return 1;
          }
          else{
            await this.conectionLegacy.query('ROLLBACK');
            return 0;
          }
        } else {
          // Si alguna inserción falló, hacer rollback
          await this.conectionLegacy.query('ROLLBACK');
          return 0;
        }
      } else {
        // Si la inserción en Pedido falló, hacer rollback
        await this.conectionLegacy.query('ROLLBACK');
        return 0;
      }
    }catch(error){
      console.error(error);
      return 0;
    }
  }
//La table detalle factura no fue necesario utilizarla porque todo queda guardado en la tabla detalle pedido 
  async saveFactura(dataPedido: any) {
    const queryultNum = `SELECT MAX(numero) AS numero FROM Factura`;
    let ultNumero = await this.conectionLegacy.query(queryultNum);
    let ultNum: number = ultNumero[0].numero;
    ultNum ++;

    const queryUltPed = `SELECT MAX(idPedido) AS idPedido FROM Pedido`;
    let ultPedido = await this.conectionLegacy.query(queryUltPed);
    let pagado:number;
    if(dataPedido.dataPedido[0].retiro == 2){
      pagado = 1;
    }else{
      pagado = 0;
    }
    
    try{
      
      await this.conectionLegacy.query('START TRANSACTION');
      //Tengo que programar la forma de pago para guradarla 1 Efectivo 2 MercadoPago
      //Programar como obtener el nro de tarjeta
      //Programar el total del costo??
       //agrege col pagado 0 No 1 SI
      const queryPedido =
      `INSERT INTO Factura (idFactura, numero, montoDescuento, formaPago, nroTarjeta, totalVenta, totalCosto, pagado)
      VALUES(${ultPedido[0].idPedido},${ultNum}, 0, 1, 0, ${dataPedido.dataPedido[0].totalNETO}, ${dataPedido.dataPedido[0].totalNETO}, ${pagado})`
      const data = await this.conectionLegacy.query(queryPedido)

      if (data.affectedRows > 0) {
        await this.conectionLegacy.query('COMMIT');
        return 1;
      } else {
        await this.conectionLegacy.query('ROLLBACK');
        return 0;
      }
    }catch(error){
      console.error(error);
      return 0;
    }
  }

  async tomarPedido(NROLEG: string) {
    //agrege col pagado 0 No 1 SI
    //Agregar en la consulta de pedido y de cajero
    const query = 
    `SELECT a.idPedido, b.numero AS nrofac, a.fecha, a.horaEstimadaFin, a.tipoEnvio, b.totalCosto,
    b.formaPago, a.estado, d.imagen, d.denominacion, c.cantidad, d.precioVenta 
    FROM Pedido a
    INNER JOIN Factura b ON a.idPedido = b.idFactura
    INNER JOIN DetallePedido c ON a.idPedido = c.idPedido
    INNER JOIN ArticuloManufacturado d ON c.idArticuloManufacturado = d.idArticuloManufacturado
    WHERE idCliente =  ${NROLEG}
    `
    const data = await this.conectionLegacy.query(query)
    //console.log(data)
    return data
  }

  async cancelarPedido(NROLEG: string, idPedido: string) {
    const query = `update Pedido
    set estado = 3
    where 
    idPedido=${idPedido} 
    and idCliente='${NROLEG}'`
    const data = await this.conectionLegacy.query(query);
    return data
  }

  async tomarPedidoCajero(dateDesde: string, dateHasta: string) {
    //agrege col pagado 0 No 1 SI
    //Agregar en la consulta de pedido y de cajero
    //console.log(dateDesde, dateHasta)
    const query = 
    `SELECT *, b.numero AS nrofac
    FROM Pedido a
    INNER JOIN Factura b ON a.idPedido = b.idFactura
    INNER JOIN DetallePedido c ON a.idPedido = c.idPedido
    INNER JOIN ArticuloManufacturado d ON c.idArticuloManufacturado = d.idArticuloManufacturado
    WHERE a.fecha >= '${dateDesde}' and a.fecha <= '${dateHasta}'`
    const data = await this.conectionLegacy.query(query)
    //console.log(data)
    return data
  }

  async pedidoPagado(idPedido: string) {
    const query = `update Factura
    set pagado = 1
    where 
    idFactura=${idPedido}`
    const data = await this.conectionLegacy.query(query);
    return data
  }

  async tomarPedidoDelivery(dateDesde: string, dateHasta: string) {
    const query = 
    `SELECT *, b.numero AS nrofac, f.numero as nrocalle
    FROM Pedido a
    INNER JOIN Factura b ON a.idPedido = b.idFactura
    INNER JOIN DetallePedido c ON a.idPedido = c.idPedido
    INNER JOIN ArticuloManufacturado d ON c.idArticuloManufacturado = d.idArticuloManufacturado
    INNER JOIN Cliente e ON a.idCliente = e.idCliente
    INNER JOIN Domicilio f ON a.idCliente = f.idDomicilio
    WHERE a.fecha >= '${dateDesde}' AND a.fecha <= '${dateHasta}'
    AND a.tipoEnvio = 2`
    const data = await this.conectionLegacy.query(query)
    //console.log(data)
    return data
  }

  async pedidoEntregado(idPedido: string) {
    const query = `update Pedido
    set estado = 4
    where 
    idPedido=${idPedido}`
    const data = await this.conectionLegacy.query(query);
    return data
  }

  async tomarPedidoCocina() {
    //agrege col pagado 0 No 1 SI
    //Agregar en la consulta de pedido y de cajero
    //console.log(dateDesde, dateHasta)
    //--INNER JOIN Factura b ON a.idPedido = b.idFactura
    //--INNER JOIN DetallePedido c ON a.idPedido = c.idPedido
    //--INNER JOIN ArticuloManufacturado d ON c.idArticuloManufacturado = d.idArticuloManufacturado

    const query = 
    `SELECT a.idPedido, a.fecha, a.horaEstimadaFin, a.estado
    FROM Pedido a
    WHERE a.estado < 2
    ORDER BY a.idPedido DESC`
    const data = await this.conectionLegacy.query(query)
    //console.log(data)
    return data
  }

  async tomarDetallePedidoCocina(idPedido: string) {
    const query = 
    `SELECT *
    FROM DetallePedido a
    INNER JOIN ArticuloManufacturado b on a.idArticuloManufacturado = b.idArticuloManufacturado
    WHERE idPedido = ${idPedido}`
    const data = await this.conectionLegacy.query(query)
    //console.log(data)
    return data
  }

  async tomarIngredientesPedido(idArticuloManufacturado: string) {
    const query = 
    `SELECT a.cantidad, b.denominacion, b.unidadMedida
    FROM CantidadIngredientes a
    INNER JOIN ArticuloInsumo b ON a.idArticuloInsumo = b.idArticuloInsumo
    WHERE a.idArticuloManufac = ${idArticuloManufacturado}`
    const data = await this.conectionLegacy.query(query)
    //console.log(data)
    return data
  }

  async agregarTiempo(idPedido: string, horaEstimadaFin: string) {
    let hora_str = horaEstimadaFin;
    let horas = parseInt(hora_str.substr(0, 2));
    let minutos = parseInt(hora_str.substr(3, 2));
    let segundos = parseInt(hora_str.substr(6, 2));
    //console.log(horas,minutos,segundos)
    horaEstimadaFin = this.sumarMinutosAHora(horas,minutos,segundos,10);
    //console.log(idPedido, horaEstimadaFin)
    const query = 
    `UPDATE Pedido SET horaEstimadaFin = '${horaEstimadaFin}' WHERE idPedido = ${idPedido}`
    const data = await this.conectionLegacy.query(query)
    return data
  }

  async cambiarEstado(idPedido: string, estado: number) {
    //Quiero hacer un condicional en el que si el estado despues de ser sumado es 1 se haga el update 
    //Pero si el estado es 2 es decir que va a ser finalizado se reste el stock de ingredientes 
    let est = estado + 1;

    if(est == 2){
      this.restaStokIngrediente(idPedido);
    }
    const query = 
    `UPDATE Pedido SET estado = ${est} WHERE idPedido = ${idPedido}`
    const data = await this.conectionLegacy.query(query)
    return data
  }

  async restaStokIngrediente(idPedido: string) {
    const query = 
    `SELECT b.cantidad AS cantArti, d.cantidad AS cantIngre, d.idArticuloInsumo, (b.cantidad * d.cantidad) AS totResta
    FROM Pedido a
    INNER JOIN DetallePedido b ON a.idPedido = b.idPedido
    INNER JOIN ArticuloManufacturado c ON b.idArticuloManufacturado = c.idArticuloManufacturado
    INNER JOIN CantidadIngredientes d ON c.idArticuloManufacturado = d.idArticuloManufac
    WHERE a.idPedido = ${idPedido}`
    const data = await this.conectionLegacy.query(query);

    for(let i=0; i<data.length; i++){
      const queryStock = `SELECT stockActual FROM ArticuloInsumo WHERE idArticuloInsumo = ${data[i].idArticuloInsumo}`
      const dataStock = await this.conectionLegacy.query(queryStock);
      let stockActual = dataStock[0].stockActual;
      let totalARestar = data[i].totResta;
      let nuevoStock = stockActual - totalARestar;

      const queryNuevoStock = `UPDATE ArticuloInsumo SET stockActual = ${nuevoStock} WHERE idArticuloInsumo = ${data[i].idArticuloInsumo}`
      const dataNuevoStock = await this.conectionLegacy.query(queryNuevoStock);
    }   
  }

  async tomarPedidoAdmin(dateDesde: string, dateHasta: string) {
    const query = 
    `SELECT a.idPedido, b.numero AS nrofac, a.fecha, a.horaEstimadaFin, a.tipoEnvio, b.totalCosto,
    b.formaPago, a.estado, d.imagen, d.denominacion, c.cantidad, d.precioVenta 
    FROM Pedido a
    INNER JOIN Factura b ON a.idPedido = b.idFactura
    INNER JOIN DetallePedido c ON a.idPedido = c.idPedido
    INNER JOIN ArticuloManufacturado d ON c.idArticuloManufacturado = d.idArticuloManufacturado
    WHERE a.fecha >= '${dateDesde}' AND a.fecha <= '${dateHasta}'
    AND (a.estado = 2 OR a.estado = 4)`

    const data = await this.conectionLegacy.query(query)
    //console.log(data)
    return data
  }
}