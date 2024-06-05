import { Param, Body, Get, Post, Put, Delete, JsonController, QueryParam } from "routing-controllers"
import UsersColService from "../services/usersCol"

@JsonController("/usersCol")
export class UsersColController {
  service: UsersColService
  constructor() {
    this.service = new UsersColService()
  }
  @Get("/portal/:userID")
  async getUserPortal(@Param("userID") userID: string) {
    return this.service.getUserPortal(userID)
  }

  @Post("/changePassword")
  async postChangePassword(@Body() datos: any) {
    return this.service.postChangePassword(datos)
  }

  @Put("/resetPassword")
  async resetPassword(
    @QueryParam("legajo") legajo: string,
    @QueryParam("dni") dni: string
  ) {
    return this.service.resetPassword(legajo, dni)
  }

  @Get("/validaUsuario")
  async validaUsuario(@QueryParam("usuario") usuario: string) {
    return this.service.validaUsuario(usuario)
  }

  @Post("/createUsuario")
  async createUsuario(
      @Body() formData: any
  ) {
      return this.service.createUsuario(formData);
  }

  @Post("/createUsuarioGoogle")
  async createUsuarioGoogle(
      @QueryParam("email") email: string,
      @QueryParam("name") name: string,
      @QueryParam("picture") picture: string,
  ) {
      return this.service.createUsuarioGoogle(email, name, picture);
  }

  @Get("/takePassword")
  async takePassword(@QueryParam("email") email: string) {
    return this.service.takePassword(email)
  }

  @Get("/dataUser")
  async dataUser(@QueryParam("usuario") usuario: string) {
    return this.service.dataUser(usuario)
  }

  @Get("/resetClave")
  async resetClave(
    @QueryParam("usuario") usuario: string,
    @QueryParam("telefono") telefono: number
  ) {
    return this.service.resetClave(usuario, telefono)
  }
}
