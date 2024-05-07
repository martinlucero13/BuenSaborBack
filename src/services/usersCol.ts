import { getDBConnection, DatabasesEnum } from "../database/connectionManager"

export default class UsersColService {
  private conectionLegacy
  constructor() {
    this.conectionLegacy = getDBConnection(DatabasesEnum.LEGACY)
  }

  async getUserPortal(username: string) {
    /*a.USUSUARIO,
        a.USNOMUSU,
        a.USNROLEG,
        a.USMARCA1,
        a.USMARCA2,
        a.USCONTRA,
        a.USAN8,*/

    //Los Roles son 
    //0:Todos los roles
    //1:Cliente
    //2:Cajero
    //3:Delivery
    //4:Cocinero
    //5:Administrador
    const query = `
    SELECT 
    idUsuario as USNROLEG,
    usuario as USUSU,
    clave as USCONTRA,
    rol as USROL,
    nombre as USNOMUSU,
    apellido as USAPEUSU,
    marca1 as USMARCA1,
    bloqueado as USMARCA2
    FROM usuario
    INNER JOIN Cliente ON idUsuario = idCliente 
    WHERE usuario = '${username}'`

    const user = await this.conectionLegacy.query(query)
    return [user[0]]
  }

  async postChangePassword(datos: any) {
    const { contraseña, legajo } = datos
    const query = `update usuario 
        set clave = '${contraseña}', marca1 = 1
        where idUsuario = '${legajo}'`

    const data = await this.conectionLegacy.query(query)
    return data
  }

  async resetPassword(legajo: string, dni: string) {
    const query = `update usuario 
        set clave = '${dni}'
        where idUsuario = ${legajo}, usmarca1 = null`

    const data = await this.conectionLegacy.query(query)
    return data
  }
}