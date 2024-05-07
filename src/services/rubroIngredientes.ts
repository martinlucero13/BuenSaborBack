import { getDBConnection, DatabasesEnum } from "../database/connectionManager"

export default class RubroIngredientesService {
  private conectionLegacy
  constructor() {
    this.conectionLegacy = getDBConnection(DatabasesEnum.LEGACY)
  }

  async getRubroIngredientes() {
    const query = 
    `SELECT * FROM rubro WHERE rubro = 1 AND subrubro != 0`
    const data = await this.conectionLegacy.query(query)
    return data
  }

  async createRubroIngredientes(formData: any) {
    //Obtener el ultimo subrubro creado, 
    //para guardar con el rubro = 1 subrub = al ultimo +1, denominacion y la marca de habili 1 habilit o 0 des
    const queryUlti = `SELECT MAX(subrubro) AS ultimoid FROM rubro WHERE rubro = 1`
    const data = await this.conectionLegacy.query(queryUlti);
    let ultimo = 0;
    ultimo = data[0].ultimoid;
    ultimo++
    let denominacion = formData.denominacion.toUpperCase();

    const queryInsert = `INSERT INTO rubro (rubro, subrubro, denominacion, habilitado) 
    VALUE (1, ${ultimo}, '${denominacion}', ${formData.habilitado})`
    const dataInsert = await this.conectionLegacy.query(queryInsert);

    return dataInsert
  }

  async editRubroIngredientes(formData: any) {
    let denominacion = formData.denominacion.toUpperCase();
    const updateUsu = `UPDATE rubro SET 
    denominacion = '${denominacion}', habilitado = ${formData.habilitado} WHERE idRubro = ${formData.idData}`
    const dataUsu = await this.conectionLegacy.query(updateUsu);
    return dataUsu
  }

    async deleteRubroIngredientes(idRubro: number) {
    const queryDelete = `DELETE from rubro WHERE idRubro = ${idRubro}`
    const data = await this.conectionLegacy.query(queryDelete);
    return data
  }
}