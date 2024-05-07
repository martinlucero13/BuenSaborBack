import { Param, Body, Get, Post, Put, Delete, JsonController, QueryParam } from "routing-controllers"
import RubroProductosService from "../services/rubroProductos"

@JsonController("/rubroProductos")
export class RubroProductosController {
  service: RubroProductosService
  constructor() {
    this.service = new RubroProductosService()
  }

  @Get("/getRubroProductos")
  async getRubroProductos() {
    return this.service.getRubroProductos()
  }

  @Post("/createRubroProductos")
  async createRubroProductos(
      @Body() formData: any
  ) {
      return this.service.createRubroProductos(formData);
  }

  @Post("/editRubroProductos")
  async editRubroProductos(
      @Body() formData: any
  ) {
      return this.service.editRubroProductos(formData);
  }

  @Put("/deleteRubroProductos")
  async deleteRubroProductos(
      @QueryParam("idRubro") idRubro: number
  ) {
      return this.service.deleteRubroProductos(idRubro);
  }

  @Get("/getRubroProductosMenu")
  async getRubroProductosMenu() {
    return this.service.getRubroProductosMenu()
  }
}
