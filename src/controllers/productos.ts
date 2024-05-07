import { Param, Body, Get, Post, Put, Delete, JsonController, QueryParam } from "routing-controllers"
import ProductosService from "../services/productos"

@JsonController("/Productos")
export class ProductosController {
  service: ProductosService
  constructor() {
    this.service = new ProductosService()
  }

  @Get("/getProductos")
  async getProductos() {
    return this.service.getProductos()
  }

  @Get("/getProductosPorMarca")
  async getProductosPorMarca(
    @QueryParam("marca") marca :string
  ) {
    return this.service.getProductosPorMarca(marca)
  }
  
  @Post("/savePedido")
  async savePedido(@Body() dataPedido: any) {
      return this.service.savePedido(dataPedido);
  }

  @Get("/tomarPedido")
  async tomarPedido(@QueryParam("NROLEG", { required: true }) NROLEG: string) {
      return this.service.tomarPedido(NROLEG);
  }

  @Get("/cancelarPedido")
  async cancelarPedido(
      @QueryParam("NROLEG", { required: true }) NROLEG: string,
      @QueryParam("idPedido", { required: true }) idPedido: string,

  ) {
      return this.service.cancelarPedido(NROLEG, idPedido)
  }

  @Get("/tomarPedidoCajero")
  async tomarPedidoCajero(
    @QueryParam("dateDesde", { required: true }) dateDesde: string,
    @QueryParam("dateHasta", { required: true }) dateHasta: string,
  ) {
      return this.service.tomarPedidoCajero(dateDesde,dateHasta);
  }

  @Get("/pedidoPagado")
  async pedidoPagado(@QueryParam("idPedido", { required: true }) idPedido: string) {
      return this.service.pedidoPagado(idPedido)
  }

  @Get("/tomarPedidoDelivery")
  async tomarPedidoDelivery(
    @QueryParam("dateDesde", { required: true }) dateDesde: string,
    @QueryParam("dateHasta", { required: true }) dateHasta: string,
  ) {
      return this.service.tomarPedidoDelivery(dateDesde,dateHasta);
  }

  @Get("/pedidoEntregado")
  async pedidoEntregado(@QueryParam("idPedido", { required: true }) idPedido: string) {
      return this.service.pedidoEntregado(idPedido)
  }
}
