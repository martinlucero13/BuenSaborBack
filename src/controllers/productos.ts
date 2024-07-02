import { Param, Body, Get, Post, Put, Delete, JsonController, QueryParam } from "routing-controllers"
import ProductosService from "../services/productos"

@JsonController("/Productos")
export class ProductosController {
  service: ProductosService
  constructor() {
    this.service = new ProductosService()
  }

  @Get("/getUltimoProducto")
  async getUltimoProducto() {
    return this.service.getUltimoProducto()
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
    @QueryParam("dateDesde") dateDesde: string,
    @QueryParam("dateHasta") dateHasta: string,
  ) {
      return this.service.tomarPedidoDelivery(dateDesde,dateHasta);
  }

  @Get("/pedidoEntregado")
  async pedidoEntregado(@QueryParam("idPedido", { required: true }) idPedido: string) {
      return this.service.pedidoEntregado(idPedido)
  }

  @Get("/tomarPedidoCocina")
  async tomarPedidoCocina() {
      return this.service.tomarPedidoCocina();
  }

  @Get("/tomarDetallePedidoCocina")
  async tomarDetallePedidoCocina(
    @QueryParam("idPedido", { required: true }) idPedido: string
  ) {
      return this.service.tomarDetallePedidoCocina(idPedido);
  }

  @Get("/tomarIngredientesPedido")
  async tomarIngredientesPedido(
    @QueryParam("idArticuloManufacturado", { required: true }) idArticuloManufacturado: string
  ) {
      return this.service.tomarIngredientesPedido(idArticuloManufacturado);
  }

  @Post("/agregarTiempo")
  async agregarTiempo(
    @QueryParam("idPedido", { required: true }) idPedido: string,
    @QueryParam("horaEstimadaFin", { required: true }) horaEstimadaFin: string
  ) {
      return this.service.agregarTiempo(idPedido, horaEstimadaFin);
  }

  @Post("/cambiarEstado")
  async cambiarEstado(
    @QueryParam("idPedido") idPedido: string,
    @QueryParam("estado") estado: number
  ) {
      return this.service.cambiarEstado(idPedido, estado);
  }

  @Get("/tomarPedidoAdmin")
  async tomarPedidoAdmin(
    @QueryParam("dateDesde", { required: true }) dateDesde: string,
    @QueryParam("dateHasta", { required: true }) dateHasta: string
  ) {
      return this.service.tomarPedidoAdmin(dateDesde, dateHasta);
  }
}
