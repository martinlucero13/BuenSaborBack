import { getDBConnection, DatabasesEnum } from "../database/connectionManager"

export default class EstadisticasService {
  private conectionLegacy
  constructor() {
    this.conectionLegacy = getDBConnection(DatabasesEnum.LEGACY)
  }

  async getEstadisticasClientes(dateDesde: string, dateHasta: string) {
    const query = 
    `SELECT a.nombre, a.apellido, COUNT(a.idCliente) AS cantPedidos, SUM(b.total) AS sumTotal
    FROM Cliente a
    INNER JOIN Pedido b ON a.idCliente = b.idCliente
    WHERE b.fecha >= '${dateDesde}' AND b.fecha <= '${dateHasta}' 
    AND (b.estado = 2 OR b.estado = 4)
    GROUP BY a.idCliente
    ORDER BY sumTotal DESC`

    const data = await this.conectionLegacy.query(query)
    //console.log(data)
    return data
  }

  async getEstadisticasProductos(dateDesde: string, dateHasta: string) {
    const query = 
    `SELECT SUM(b.cantidad) AS cantArt, c.denominacion AS nomPro,
    d.idRubro, d.denominacion AS nomRub
    FROM Pedido a
    INNER JOIN DetallePedido b ON a.idPedido = b.idPedido
    INNER JOIN ArticuloManufacturado c ON b.idArticuloManufacturado = c.idArticuloManufacturado
    INNER JOIN Rubro d ON c.idRubro = d.idRubro
    WHERE a.fecha >= '${dateDesde}' AND a.fecha <= '${dateHasta}'
    AND (a.estado = 2 OR a.estado = 4)
    GROUP BY c.idArticuloManufacturado`

    const data = await this.conectionLegacy.query(query)
    return data
  }

  async getEstadisticasContable(dateDesde: string, dateHasta: string) {
    const query = 
    `SELECT COUNT(a.idPedido) AS cantidadPedidos, SUM(a.total) AS totalVentas
    FROM Pedido a
    WHERE a.fecha >= '${dateDesde}' AND a.fecha <= '${dateHasta}'
    AND (a.estado = 2 OR a.estado = 4)`

    const data = await this.conectionLegacy.query(query)
    return data
  }
}