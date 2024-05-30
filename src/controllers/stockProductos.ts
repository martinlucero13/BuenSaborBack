import { Param, Body, Get, Post, Put, Delete, JsonController, QueryParam } from "routing-controllers"
import StockProductosService from "../services/stockProductos"

@JsonController("/StockProductos")
export class StockProductosController {
  service: StockProductosService
  constructor() {
    this.service = new StockProductosService()
  }

  @Get("/getStockProductos")
  async getStockProductos() {
    return this.service.getStockProductos()
  }

  @Post("/createStockProductos")
  async createStockProductos(
      @Body() formData: any
  ) {
      return this.service.createStockProductos(formData);
  }

  @Post("/editStockProductos")
  async editStockProductos(
      @Body() formData: any
  ) {
      return this.service.editStockProductos(formData);
  }

  @Put("/deleteStockProductos")
  async deleteEmpleados(
      @QueryParam("idArticuloManufacturado") idArticuloManufacturado: number
  ) {
      return this.service.deleteStockProductos(idArticuloManufacturado);
  }

  @Get("/getIngredientesProductos")
  async getIngredientesProductos(
    @QueryParam("idArticuloManufacturado") idArticuloManufacturado: string
  ) {
    return this.service.getIngredientesProductos(idArticuloManufacturado)
  }

  @Get("/getIngredientes")
  async getIngredientes(@QueryParam("rubro") rubro: string) {
    return this.service.getIngredientes(rubro)
  }

  @Get("/getRubrosIngredientes")
  async getRubrosIngredientes() {
    return this.service.getRubrosIngredientes()
  }

  @Post("/createIngredientesProductos")
  async createIngredientesProductos(
      @Body() formData: any
  ) {
      return this.service.createIngredientesProductos(formData);
  }

  @Put("/deleteIngredienteProductos")
  async deleteIngredienteProductos(
      @QueryParam("idCantIngredint") idCantIngredint: number
  ) {
      return this.service.deleteIngredienteProductos(idCantIngredint);
  }

  @Post("/saveImg")
  async saveImg(@Body() userData: any) {
    return this.service.saveImg(userData)
  }
}
