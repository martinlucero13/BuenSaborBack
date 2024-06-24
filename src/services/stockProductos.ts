import { getDBConnection, DatabasesEnum } from "../database/connectionManager"
import fs from 'fs';
import path from 'path';

export default class StockProductosService {
  private conectionLegacy
  constructor() {
    this.conectionLegacy = getDBConnection(DatabasesEnum.LEGACY)
  }

  async getStockProductos() {
    const query = 
    `SELECT a.*, b.denominacion AS nomrub 
    FROM ArticuloManufacturado a
    INNER JOIN Rubro b ON a.idRubro = b.idRubro
    WHERE b.habilitado = 1
    ORDER BY b.denominacion,  a.denominacion`

    const data = await this.conectionLegacy.query(query)
    
    return data
  }

  async createStockProductos(formData: any) {
    let denomi = formData.denominacion.toUpperCase();
    let denomimg = formData.denominacion.replace(/\s+/g, '')
    const insertData = 
    `INSERT INTO ArticuloManufacturado(tiempoEstimadoCocina, denominacion, precioVenta, imagen, descripcion, idRubro, receta)
    VALUES(${formData.tiempoEstimadoCocina}, '${denomi}', ${formData.precioVenta}, '${denomimg}', '${formData.descripcion}',${formData.rubro}, '${formData.receta}')`
    const data = await this.conectionLegacy.query(insertData);

    return data
  }

  async editStockProductos(formData: any) {
    let denomi = formData.denominacion.toUpperCase();
    let denomimg = formData.denominacion.replace(/\s+/g, '')

    const updateCli = `UPDATE ArticuloManufacturado SET
    denominacion = '${denomi}', precioVenta = ${formData.precioVenta}, descripcion = '${formData.descripcion}', 
    idRubro = ${formData.rubro}, receta = '${formData.receta}', tiempoEstimadoCocina = ${formData.tiempoEstimadoCocina}
    WHERE idArticuloManufacturado = ${formData.idData}`
    const dataCli = await this.conectionLegacy.query(updateCli);

  }

  async deleteStockProductos(idArticuloManufacturado: number) {
    const queryDelete = `DELETE from ArticuloManufacturado WHERE idArticuloManufacturado = ${idArticuloManufacturado}`
    const data = await this.conectionLegacy.query(queryDelete);
    return data
  }

  async getIngredientesProductos(idArticuloManufacturado: string) {
    const query = 
    `SELECT C.idCantIngredint, C.cantidad, A.unidadMedida, A.denominacion, R.denominacion AS RubroIngre 
    FROM CantidadIngredientes C
    INNER JOIN ArticuloInsumo A ON C.idArticuloInsumo = A.idArticuloInsumo
    INNER JOIN rubro R ON A.idRubro = R.idRubro
    WHERE idArticuloManufac = ${idArticuloManufacturado}
    ORDER BY a.denominacion`

    const data = await this.conectionLegacy.query(query)
    return data
  }

  async getIngredientes(rubro: string) {
    const query = 
    `SELECT a.idArticuloInsumo, a.denominacion, a.unidadMedida
    FROM ArticuloInsumo a
    INNER JOIN rubro r ON a.idRubro = r.idRubro 
    WHERE a.esInsumo = 1 
    AND r.idRubro = ${rubro}
    ORDER BY a.denominacion`

    const data = await this.conectionLegacy.query(query)
    return data
  }

  async getRubrosIngredientes() {
    const query = 
    `SELECT * FROM rubro WHERE rubro = 1 AND subrubro != 0 ORDER BY denominacion`
    const data = await this.conectionLegacy.query(query) 
    return data
  }

  async createIngredientesProductos(formData: any) {
    const insertData = 
    `INSERT INTO CantidadIngredientes(cantidad, idArticuloInsumo, idArticuloManufac)
    VALUES (${formData.cantidad}, ${formData.subrubro}, ${formData.idArticuloManufacturado})`
    const data = await this.conectionLegacy.query(insertData);

    return data
  }

  async deleteIngredienteProductos(idCantIngredint: number) {
    const queryDelete = `DELETE from CantidadIngredientes WHERE idCantIngredint = ${idCantIngredint}`
    const data = await this.conectionLegacy.query(queryDelete);
    return data
  }

  async saveImg(userData: any) {
    const directory = 'C:/Users/lucerom/Documents/ProyectoFinal/GitHub/BuenSaborFront/public'
    const fileName = userData.imagen + '.jpg';
    // Asegúrate de que el directorio existe, si no, créalo.
    if (!fs.existsSync(directory)){
      fs.mkdirSync(directory, { recursive: true });
    }
    
    // Decodifica la imagen Base64.
    const base64Image = userData.dataImage.split(';base64,').pop();

    // Especifica la ruta completa del archivo.
    const filePath = path.join(directory, fileName);

    // Escribe el archivo.
    fs.writeFile(filePath, base64Image, {encoding: 'base64'}, (err) => {
        if (err) {
            console.error('Error al guardar la imagen:', err);
        } else {
            console.log('Imagen guardada correctamente en:', filePath);
        }
    });
  }
}