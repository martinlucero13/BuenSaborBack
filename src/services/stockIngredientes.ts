import { getDBConnection, DatabasesEnum } from "../database/connectionManager"

export default class StockIngredientesService {
  private conectionLegacy
  constructor() {
    this.conectionLegacy = getDBConnection(DatabasesEnum.LEGACY)
  }

  async getStockIngredientes() {
    const query = 
    `SELECT a.idArticuloInsumo, a.denominacion AS nomInsumo, a.precioCompra, a.precioVenta, a.stockActual, a.stockMinimo, a.unidadMedida, a.esInsumo,
    r.idRubro, r.rubro, r.subrubro, r.denominacion, r.habilitado
    FROM ArticuloInsumo a
    INNER JOIN rubro r ON a.idRubro = r.idRubro 
    WHERE a.esInsumo = 1 AND r.habilitado = 1`

    const data = await this.conectionLegacy.query(query)
    return data
  }

  async createStockIngredientes(formData: any) {
    let denomi = formData.denominacion.toUpperCase();
    const insertData = `INSERT INTO ArticuloInsumo
    (denominacion, precioCompra, stockActual, stockMinimo, unidadMedida, esInsumo, idRubro)
    VALUES('${denomi}', ${formData.precioCompra}, ${formData.stockActual}, ${formData.stockMinimo}, '${formData.unidadMedida}', ${formData.esInsumo}, ${formData.rubro})`
    const data = await this.conectionLegacy.query(insertData);

    return data
  }

  async editStockIngredientes(formData: any) {
    let nom = formData.nomInsumo.toUpperCase();

    const updateCli = `UPDATE ArticuloInsumo SET
    denominacion = '${nom}', precioCompra = ${formData.precioCompra}, stockActual = ${formData.stockActual}, 
    stockMinimo = ${formData.stockMinimo}, unidadMedida = '${formData.unidadMedida}', esInsumo = ${formData.esInsumo}, idRubro = ${formData.rubro}
    WHERE idArticuloInsumo = ${formData.idData}`
    const dataCli = await this.conectionLegacy.query(updateCli);
    return dataCli
  }

    async deleteStockIngredientes(idArticuloInsumo: number) {
    const queryDelete = `DELETE from ArticuloInsumo WHERE idArticuloInsumo = ${idArticuloInsumo}`
    const data = await this.conectionLegacy.query(queryDelete);
    return data
  }

  async editStockActualIngredientes(formData: any) {
    const query = `UPDATE ArticuloInsumo SET
    stockActual = ${formData.stockActual}
    WHERE idArticuloInsumo = ${formData.idData}`
    const dataCli = await this.conectionLegacy.query(query);
    return dataCli
  }
}