/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package entities;


public class DetallePedido {
    private int idDetallePedido;
    private int cantidad;
    private double subtotal;
    private ArticuloInsumo articuloInsumo;
    private ArticuloManufacturado articuloManufacturado;

    public DetallePedido() {
    }

    public DetallePedido(int idDetallePedido, int cantidad, double subtotal, ArticuloInsumo articuloInsumo, ArticuloManufacturado articuloManufacturado) {
        this.idDetallePedido = idDetallePedido;
        this.cantidad = cantidad;
        this.subtotal = subtotal;
        this.articuloInsumo = articuloInsumo;
        this.articuloManufacturado = articuloManufacturado;
    }

    public int getIdDetallePedido() {
        return idDetallePedido;
    }

    public void setIdDetallePedido(int idDetallePedido) {
        this.idDetallePedido = idDetallePedido;
    }

    public int getCantidad() {
        return cantidad;
    }

    public void setCantidad(int cantidad) {
        this.cantidad = cantidad;
    }

    public double getSubtotal() {
        return subtotal;
    }

    public void setSubtotal(double subtotal) {
        this.subtotal = subtotal;
    }

    public ArticuloInsumo getArticuloInsumo() {
        return articuloInsumo;
    }

    public void setArticuloInsumo(ArticuloInsumo articuloInsumo) {
        this.articuloInsumo = articuloInsumo;
    }

    public ArticuloManufacturado getArticuloManufacturado() {
        return articuloManufacturado;
    }

    public void setArticuloManufacturado(ArticuloManufacturado articuloManufacturado) {
        this.articuloManufacturado = articuloManufacturado;
    }
    
    
    
    
}
