import { Param, Body, Get, Post, Put, Delete, JsonController, QueryParam } from "routing-controllers"
import StockIngredientesService from "../services/stockIngredientes"

@JsonController("/StockIngredientes")
export class StockIngredientesController {
  service: StockIngredientesService
  constructor() {
    this.service = new StockIngredientesService()
  }

  @Get("/getStockIngredientes")
  async getStockIngredientes() {
    return this.service.getStockIngredientes()
  }

  @Post("/createStockIngredientes")
  async createStockIngredientes(
      @Body() formData: any
  ) {
      return this.service.createStockIngredientes(formData);
  }

  @Post("/editStockIngredientes")
  async editStockIngredientes(
      @Body() formData: any
  ) {
      return this.service.editStockIngredientes(formData);
  }

  @Put("/deleteStockIngredientes")
  async deleteEmpleados(
      @QueryParam("idArticuloInsumo") idArticuloInsumo: number
  ) {
      return this.service.deleteStockIngredientes(idArticuloInsumo);
  }

  @Post("/editStockActualIngredientes")
  async editStockActualIngredientes(
      @Body() formData: any
  ) {
      return this.service.editStockActualIngredientes(formData);
  }
}
