import { Param, Body, Get, Post, Put, JsonController, QueryParam } from "routing-controllers"
import ConfiguracionService from '../services/configuracion';

@JsonController("/configuracion")
export class ConfiguracionController {

  service: ConfiguracionService
  constructor() {
    this.service = new ConfiguracionService()
  }

  @Get("/getTokenMercadoPago")
  async getTokenMercadoPago() {
    return this.service.getTokenMercadoPago()
  }
}
