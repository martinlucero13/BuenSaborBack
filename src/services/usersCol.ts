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

  async validaUsuario(usuario: string) {
    const query = `SELECT COUNT(idUsuario) AS cantUsu
      FROM usuario
      WHERE usuario = '${usuario}'`

    const data = await this.conectionLegacy.query(query)
    return data
  }

  async createUsuario(formData: any) {

    const queryUlti = `SELECT MAX(idUsuario) AS ultimoid FROM usuario`
    //clientes'1'
    const data = await this.conectionLegacy.query(queryUlti);
    let ultimo = 0;
    ultimo = data[0].ultimoid;
    ultimo++

    let nom = formData.nombre.toUpperCase();
    let ape = formData.apellido.toUpperCase();

    //Hacer insert en usuario Cliente Domicilio
    const insertUsu = `INSERT INTO usuario (idUsuario, usuario, clave, rol, marca1) 
    VALUES(${ultimo}, '${formData.usuario}', '${formData.clave}', '1', '1')`
    const dataUsu = await this.conectionLegacy.query(insertUsu);

    const insertCli = `INSERT INTO cliente (idCliente, nombre, apellido, telefono, email) 
    VALUES(${ultimo}, '${nom}', '${ape}', ${formData.telefono}, '${formData.mail}')`
    const dataCli = await this.conectionLegacy.query(insertCli);

    const insertDom = `INSERT INTO Domicilio(idDomicilio, calle, numero, localidad)
    VALUES(${ultimo}, '${formData.calle}', '${formData.numero}', '${formData.localidad}')`
    const dataDom = await this.conectionLegacy.query(insertDom);

    return insertUsu
  }

  async dataUser(usuario: string) {
    const query = `SELECT a.usuario, b.email, b.telefono
      FROM Usuario a 
      INNER JOIN Cliente b ON a.idUsuario = b.idCliente
      WHERE a.usuario = '${usuario}'`

    const data = await this.conectionLegacy.query(query)
    return data
  }

  generarCadenaAleatoria(longitud: number): string {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let resultado = '';
    for (let i = 0; i < longitud; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        resultado += caracteres[indiceAleatorio];
    }
    return resultado;
  }

  async resetClave(usuario: string, telefono:number) {
    const cadenaAleatoria = this.generarCadenaAleatoria(8);
    const query = `update Usuario 
        set clave = '${cadenaAleatoria}'
        where usuario = '${usuario}'`

    const data = await this.conectionLegacy.query(query)

    return cadenaAleatoria
  }
}