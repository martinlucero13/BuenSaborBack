/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package entities;

/**
 *
 * @author Lopez
 */
public class ArticuloManufacturadoDetalle {
    private int idArticuloManufacturadoDetalle;
    private double cantidad;
    private String unidadMedida;
    private ArticuloInsumo articuloInsumo;
    private ArticuloManufacturado articuloManufacturado;

    public ArticuloManufacturadoDetalle() {
    }

    public ArticuloManufacturadoDetalle(int idArticuloManufacturadoDetalle, double cantidad, String unidadMedida, ArticuloInsumo articuloInsumo, ArticuloManufacturado articuloManufacturado) {
        this.idArticuloManufacturadoDetalle = idArticuloManufacturadoDetalle;
        this.cantidad = cantidad;
        this.unidadMedida = unidadMedida;
        this.articuloInsumo = articuloInsumo;
        this.articuloManufacturado = articuloManufacturado;
    }

    public int getIdArticuloManufacturadoDetalle() {
        return idArticuloManufacturadoDetalle;
    }

    public void setIdArticuloManufacturadoDetalle(int idArticuloManufacturadoDetalle) {
        this.idArticuloManufacturadoDetalle = idArticuloManufacturadoDetalle;
    }

    public double getCantidad() {
        return cantidad;
    }

    public void setCantidad(double cantidad) {
        this.cantidad = cantidad;
    }

    public String getUnidadMedida() {
        return unidadMedida;
    }

    public void setUnidadMedida(String unidadMedida) {
        this.unidadMedida = unidadMedida;
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
