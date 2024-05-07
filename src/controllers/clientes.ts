import { Param, Body, Get, Post, Put, Delete, JsonController, QueryParam } from "routing-controllers"
import ClientesService from "../services/clientes"

@JsonController("/clientes")
export class ClientesController {
  service: ClientesService
  constructor() {
    this.service = new ClientesService()
  }

  @Get("/getClientes")
  async getClientes() {
    return this.service.getClientes()
  }

  @Post("/createCliente")
  async createCliente(
      @Body() formData: any
  ) {
      return this.service.createCliente(formData);
  }

  @Post("/editCliente")
  async editCliente(
      @Body() formData: any
  ) {
      return this.service.editCliente(formData);
  }

  @Put("/deleteCliente")
  async deleteCliente(
      @QueryParam("idUsuario") idUsuario: number
  ) {
      return this.service.deleteCliente(idUsuario);
  }

  @Get("/getPerfil")
  async getPerfil(
    @QueryParam("idUsuario") idUsuario: number
  ) {
    return this.service.getPerfil(idUsuario)
  }
}
