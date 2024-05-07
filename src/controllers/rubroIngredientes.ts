import { Param, Body, Get, Post, Put, Delete, JsonController, QueryParam } from "routing-controllers"
import RubroIngredientesService from "../services/rubroIngredientes"

@JsonController("/rubroIngredientes")
export class RubroIngredientesController {
  service: RubroIngredientesService
  constructor() {
    this.service = new RubroIngredientesService()
  }

  @Get("/getRubroIngredientes")
  async getRubroIngredientes() {
    return this.service.getRubroIngredientes()
  }

  @Post("/createRubroIngredientes")
  async createRubroIngredientes(
      @Body() formData: any
  ) {
      return this.service.createRubroIngredientes(formData);
  }

  @Post("/editRubroIngredientes")
  async editRubroIngredientes(
      @Body() formData: any
  ) {
      return this.service.editRubroIngredientes(formData);
  }

  @Put("/deleteRubroIngredientes")
  async deleteRubroIngredientes(
      @QueryParam("idRubro") idRubro: number
  ) {
      return this.service.deleteRubroIngredientes(idRubro);
  }
}
