import { getDBConnection, DatabasesEnum } from "../database/connectionManager"

export default class ConfiguracionService {
  private conectionLegacy
  constructor() {
    this.conectionLegacy = getDBConnection(DatabasesEnum.LEGACY)
  }

  async getTokenMercadoPago() {
    const query = 
    `SELECT 
    tokenMercadoPago
    FROM configuracion WHERE idConfiguracion = '1'`;
    const data = await this.conectionLegacy.query(query)
    return data
  }

}