import { Param, Body, Get, Post, Put, Delete, JsonController, QueryParam } from "routing-controllers"
import EmpleadosService from "../services/empleados"

@JsonController("/empleados")
export class EmpleadosController {
  service: EmpleadosService
  constructor() {
    this.service = new EmpleadosService()
  }

  @Get("/getEmpleados")
  async getEmpleados() {
    return this.service.getEmpleados()
  }

  @Post("/createEmpleados")
  async createEmpleados(
      @Body() formData: any
  ) {
      return this.service.createEmpleados(formData);
  }

  @Post("/editEmpleados")
  async editEmpleados(
      @Body() formData: any
  ) {
      return this.service.editEmpleados(formData);
  }

  @Put("/deleteEmpleados")
  async deleteEmpleados(
      @QueryParam("idUsuario") idUsuario: number
  ) {
      return this.service.deleteEmpleados(idUsuario);
  }
}
