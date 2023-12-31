/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.buensabor.entities;

import java.util.List;


/**
 *
 * @author Lopez
 */

public class ArticuloInsumo { 

    private int idArticuloInsumo;
    

    private String denominacion;

    private double precioCompra;

    private double precioVenta;

    private double stockActual;
    

    private double stockMinimo;
    
    private String unidadMedida;

    private boolean esInsumo;
    private List<DetallePedido> detallesPedido;
    private List<DetalleFactura> detallesFactura;
    private List<ArticuloManufacturadoDetalle> articulosManufacturadosDetalle;
    private Rubro rubro;

    public ArticuloInsumo() {
    }

    public ArticuloInsumo(int idArticuloInsumo, String denominacion, double precioCompra, double precioVenta, double stockActual, double stockMinimo, String unidadMedida, boolean esInsumo, List<DetallePedido> detallesPedido, List<DetalleFactura> detallesFactura, List<ArticuloManufacturadoDetalle> articulosManufacturadosDetalle, Rubro rubro) {
        this.idArticuloInsumo = idArticuloInsumo;
        this.denominacion = denominacion;
        this.precioCompra = precioCompra;
        this.precioVenta = precioVenta;
        this.stockActual = stockActual;
        this.stockMinimo = stockMinimo;
        this.unidadMedida = unidadMedida;
        this.esInsumo = esInsumo;
        this.detallesPedido = detallesPedido;
        this.detallesFactura = detallesFactura;
        this.articulosManufacturadosDetalle = articulosManufacturadosDetalle;
        this.rubro = rubro;
    }

    public int getIdArticuloInsumo() {
        return idArticuloInsumo;
    }

    public void setIdArticuloInsumo(int idArticuloInsumo) {
        this.idArticuloInsumo = idArticuloInsumo;
    }

    public String getDenominacion() {
        return denominacion;
    }

    public void setDenominacion(String denominacion) {
        this.denominacion = denominacion;
    }

    public double getPrecioCompra() {
        return precioCompra;
    }

    public void setPrecioCompra(double precioCompra) {
        this.precioCompra = precioCompra;
    }

    public double getPrecioVenta() {
        return precioVenta;
    }

    public void setPrecioVenta(double precioVenta) {
        this.precioVenta = precioVenta;
    }

    public double getStockActual() {
        return stockActual;
    }

    public void setStockActual(double stockActual) {
        this.stockActual = stockActual;
    }

    public double getStockMinimo() {
        return stockMinimo;
    }

    public void setStockMinimo(double stockMinimo) {
        this.stockMinimo = stockMinimo;
    }

    public String getUnidadMedida() {
        return unidadMedida;
    }

    public void setUnidadMedida(String unidadMedida) {
        this.unidadMedida = unidadMedida;
    }

    public boolean isEsInsumo() {
        return esInsumo;
    }

    public void setEsInsumo(boolean esInsumo) {
        this.esInsumo = esInsumo;
    }

    public List<DetallePedido> getDetallesPedido() {
        return detallesPedido;
    }

    public void setDetallesPedido(List<DetallePedido> detallesPedido) {
        this.detallesPedido = detallesPedido;
    }

    public List<DetalleFactura> getDetallesFactura() {
        return detallesFactura;
    }

    public void setDetallesFactura(List<DetalleFactura> detallesFactura) {
        this.detallesFactura = detallesFactura;
    }

    public List<ArticuloManufacturadoDetalle> getArticulosManufacturadosDetalle() {
        return articulosManufacturadosDetalle;
    }

    public void setArticulosManufacturadosDetalle(List<ArticuloManufacturadoDetalle> articulosManufacturadosDetalle) {
        this.articulosManufacturadosDetalle = articulosManufacturadosDetalle;
    }

    public Rubro getRubro() {
        return rubro;
    }

    public void setRubro(Rubro rubro) {
        this.rubro = rubro;
    }
    
    
    
    
}
