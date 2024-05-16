import { Param, Body, Get, Post, Put, Delete, JsonController, QueryParam } from "routing-controllers"
import EstadisticasService from "../services/estadisticas"

@JsonController("/estadisticas")
export class EstadisticasController {
  service: EstadisticasService
  constructor() {
    this.service = new EstadisticasService()
  }

  @Get("/getEstadisticasClientes")
  async getEstadisticasClientes(    
    @QueryParam("dateDesde", { required: true }) dateDesde: string,
    @QueryParam("dateHasta", { required: true }) dateHasta: string
  ) {
    return this.service.getEstadisticasClientes(dateDesde, dateHasta)
  }

  @Get("/getEstadisticasProductos")
  async getEstadisticasProductos(    
    @QueryParam("dateDesde", { required: true }) dateDesde: string,
    @QueryParam("dateHasta", { required: true }) dateHasta: string
  ) {
    return this.service.getEstadisticasProductos(dateDesde, dateHasta)
  }

  @Get("/getEstadisticasContable")
  async getEstadisticasContable(    
    @QueryParam("dateDesde", { required: true }) dateDesde: string,
    @QueryParam("dateHasta", { required: true }) dateHasta: string
  ) {
    return this.service.getEstadisticasContable(dateDesde, dateHasta)
  }
}
