
package com.example.buensabor.entities;

public class DetalleFactura {
    private int idDetalleFactura;
    private int cantidad;
    private double subtotal;
    private Factura factura;
    private ArticuloInsumo articuloInsumo;
    private ArticuloManufacturado articuloManufacturado;

    public DetalleFactura() {
    }

    public DetalleFactura(int idDetalleFactura, int cantidad, double subtotal, Factura factura, ArticuloInsumo articuloInsumo, ArticuloManufacturado articuloManufacturado) {
        this.idDetalleFactura = idDetalleFactura;
        this.cantidad = cantidad;
        this.subtotal = subtotal;
        this.factura = factura;
        this.articuloInsumo = articuloInsumo;
        this.articuloManufacturado = articuloManufacturado;
    }

    public int getIdDetalleFactura() {
        return idDetalleFactura;
    }

    public void setIdDetalleFactura(int idDetalleFactura) {
        this.idDetalleFactura = idDetalleFactura;
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

    public Factura getFactura() {
        return factura;
    }

    public void setFactura(Factura factura) {
        this.factura = factura;
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
