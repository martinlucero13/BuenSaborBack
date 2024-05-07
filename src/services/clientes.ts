import { getDBConnection, DatabasesEnum } from "../database/connectionManager"

export default class ClientesService {
  private conectionLegacy
  constructor() {
    this.conectionLegacy = getDBConnection(DatabasesEnum.LEGACY)
  }

  async getClientes() {
    const query = 
    `SELECT 
    *
    FROM usuario
    INNER JOIN Cliente ON idUsuario = idCliente 
    INNER JOIN Domicilio ON idUsuario = idDomicilio
    WHERE rol = '1'`//Esto para buscar clientes'1'

    const data = await this.conectionLegacy.query(query)
    return data
  }

  async createCliente(formData: any) {
    const queryUlti = `SELECT MAX(idUsuario) AS ultimoid FROM usuario`
    //clientes'1'
    const data = await this.conectionLegacy.query(queryUlti);
    let ultimo = 0;
    ultimo = data[0].ultimoid;
    ultimo++

    let nom = formData.nombre.toUpperCase();
    let ape = formData.apellido.toUpperCase();

    //Hacer insert en usuario Cliente Domicilio
    const insertUsu = `INSERT INTO usuario (idUsuario, usuario, clave, rol) 
    VALUES(${ultimo}, '${formData.usuario}', '${formData.clave}', '1')`
    const dataUsu = await this.conectionLegacy.query(insertUsu);

    const insertCli = `INSERT INTO cliente (idCliente, nombre, apellido, telefono, email) 
    VALUES(${ultimo}, '${nom}', '${ape}', ${formData.telefono}, '${formData.email}')`
    const dataCli = await this.conectionLegacy.query(insertCli);

    const insertDom = `INSERT INTO Domicilio(idDomicilio, calle, numero, localidad)
    VALUES(${ultimo}, '${formData.calle}', '${formData.numero}', '${formData.localidad}')`
    const dataDom = await this.conectionLegacy.query(insertDom);

    return insertUsu
  }

  async editCliente(formData: any) {
    let nom = formData.nombre.toUpperCase();
    let ape = formData.apellido.toUpperCase();

    const updateUsu = `UPDATE usuario SET 
    usuario = '${formData.usuario}', clave = '${formData.clave}' WHERE idUsuario = ${formData.idData}`
    const dataUsu = await this.conectionLegacy.query(updateUsu);

    const updateCli = `UPDATE cliente SET
    nombre = '${nom}', apellido = '${ape}', telefono = ${formData.telefono}, email = '${formData.email}'  WHERE idCliente = ${formData.idData}`
    const dataCli = await this.conectionLegacy.query(updateCli);

    const updateDom = `UPDATE Domicilio SET 
    calle = '${formData.calle}', numero = '${formData.numero}', localidad = '${formData.localidad}' WHERE idDomicilio = ${formData.idData}`
    const dataDom = await this.conectionLegacy.query(updateDom);

    return dataUsu
  }

    async deleteCliente(idUsuario: number) {
    const deleteUsu = `DELETE from usuario WHERE idUsuario = ${idUsuario}`
    const dataUsu = await this.conectionLegacy.query(deleteUsu);

    const deleteCli = `DELETE from cliente WHERE idCliente = ${idUsuario}`
    const dataCli = await this.conectionLegacy.query(deleteCli);

    const deleteDom = `DELETE from Domicilio WHERE idDomicilio = ${idUsuario}`
    const dataDom = await this.conectionLegacy.query(deleteDom);

    return dataUsu
  }

  async getPerfil(idUsuario: number) {
    const query = 
    `SELECT 
    *
    FROM usuario
    INNER JOIN Cliente ON idUsuario = idCliente 
    INNER JOIN Domicilio ON idUsuario = idDomicilio
    WHERE idUsuario = ${idUsuario}`

    const data = await this.conectionLegacy.query(query)
    return data
  }
}