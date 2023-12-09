
package com.example.buensabor.entities;

import java.util.List;

public class ArticuloManufacturado {
    private int idArticuloManufacturado;
    private int tiempoEstimadoCocina;
    private String denominacion;
    private double precioVenta;
    private String imagen;
    private List<DetallePedido> detallesPedido;
    private List<DetalleFactura> detallesFactura;
    private List<ArticuloManufacturadoDetalle> articulosManufacturadosDetalle;
    private Rubro rubro;

    public ArticuloManufacturado() {
    }

    public ArticuloManufacturado(int idArticuloManufacturado, int tiempoEstimadoCocina, String denominacion, double precioVenta, String imagen, List<DetallePedido> detallesPedido, List<DetalleFactura> detallesFactura, List<ArticuloManufacturadoDetalle> articulosManufacturadosDetalle, Rubro rubro) {
        this.idArticuloManufacturado = idArticuloManufacturado;
        this.tiempoEstimadoCocina = tiempoEstimadoCocina;
        this.denominacion = denominacion;
        this.precioVenta = precioVenta;
        this.imagen = imagen;
        this.detallesPedido = detallesPedido;
        this.detallesFactura = detallesFactura;
        this.articulosManufacturadosDetalle = articulosManufacturadosDetalle;
        this.rubro = rubro;
    }

    public int getIdArticuloManufacturado() {
        return idArticuloManufacturado;
    }

    public void setIdArticuloManufacturado(int idArticuloManufacturado) {
        this.idArticuloManufacturado = idArticuloManufacturado;
    }

    public int getTiempoEstimadoCocina() {
        return tiempoEstimadoCocina;
    }

    public void setTiempoEstimadoCocina(int tiempoEstimadoCocina) {
        this.tiempoEstimadoCocina = tiempoEstimadoCocina;
    }

    public String getDenominacion() {
        return denominacion;
    }

    public void setDenominacion(String denominacion) {
        this.denominacion = denominacion;
    }

    public double getPrecioVenta() {
        return precioVenta;
    }

    public void setPrecioVenta(double precioVenta) {
        this.precioVenta = precioVenta;
    }

    public String getImagen() {
        return imagen;
    }

    public void setImagen(String imagen) {
        this.imagen = imagen;
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
