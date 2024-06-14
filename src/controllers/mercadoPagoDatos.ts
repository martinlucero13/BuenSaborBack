import { Param, Body, Get, Post, Put, Delete, JsonController, QueryParam } from "routing-controllers"
import MercadoPagoDatosService from '../services/mercadoPagoDatos';

@JsonController("/mercadoPagoDatos")
export class MercadoPagoDatosController {
  service: MercadoPagoDatosService
  constructor() {
    this.service = new MercadoPagoDatosService()
  }

  @Post("/createMercadoPagoDatos")
  async createCliente(
      @Body() formData: any
  ) {
    console.log('Received formData:', formData); // Add this line to debug incoming data

    return this.service.createMercadoPagoDatos(formData);
  }

}
