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
}
