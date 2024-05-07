import { getDBConnection, DatabasesEnum } from "../database/connectionManager"

export default class RubroProductosService {
  private conectionLegacy
  constructor() {
    this.conectionLegacy = getDBConnection(DatabasesEnum.LEGACY)
  }

  async getRubroProductos() {
    const query = 
    `SELECT * FROM rubro WHERE rubro = 2 AND subrubro != 0`
    const data = await this.conectionLegacy.query(query)
    return data
  }

  async createRubroProductos(formData: any) {
    const queryUlti = `SELECT MAX(subrubro) AS ultimoid FROM rubro WHERE rubro = 2`
    const data = await this.conectionLegacy.query(queryUlti);
    let ultimo = 0;
    ultimo = data[0].ultimoid;
    ultimo++
    let denominacion = formData.denominacion.toUpperCase();

    const queryInsert = `INSERT INTO rubro (rubro, subrubro, denominacion, habilitado) 
    VALUE (2, ${ultimo}, '${denominacion}', ${formData.habilitado})`
    const dataInsert = await this.conectionLegacy.query(queryInsert);

    return dataInsert
  }

  async editRubroProductos(formData: any) {
    let denominacion = formData.denominacion.toUpperCase();
    const updateUsu = `UPDATE rubro SET 
    denominacion = '${denominacion}', habilitado = ${formData.habilitado} WHERE idRubro = ${formData.idData}`
    const dataUsu = await this.conectionLegacy.query(updateUsu);
    return dataUsu
  }

  async deleteRubroProductos(idRubro: number) {
    const queryDelete = `DELETE from rubro WHERE idRubro = ${idRubro}`
    const data = await this.conectionLegacy.query(queryDelete);
    return data
  }

  async getRubroProductosMenu() {
    const query = 
    `SELECT 
    denominacion AS imagen,
    idRubro AS id,
    denominacion AS nombre
    FROM rubro 
    WHERE rubro = 2 AND subrubro != 0 AND habilitado = 1`
    const data = await this.conectionLegacy.query(query)
    return data
  }
}