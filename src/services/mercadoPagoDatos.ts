import { getDBConnection, DatabasesEnum } from "../database/connectionManager"

export default class MercadoPagoDatosService {
  private conectionLegacy
  constructor() {
    this.conectionLegacy = getDBConnection(DatabasesEnum.LEGACY)
  }


  async createMercadoPagoDatos(formData: any) {

    const queryInsert = `INSERT INTO mercadopagodatos (identificadorPago, fechaCreacion, fechaAprobacion, formaPago, metodoPago, nroTarjeta, estado ,idPedido) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
    
    console.log(formData);
  const dataInsert = await this.conectionLegacy.query(queryInsert, [
    formData.identificadorPago,
    formData.fechaCreacion,
    formData.fechaAprobacion,
    formData.formaPago,
    formData.metodoPago,
    formData.nroTarjeta,
    formData.estado,
    formData.idPedido // Ensure this is not null
  ]);
    return dataInsert
  }}