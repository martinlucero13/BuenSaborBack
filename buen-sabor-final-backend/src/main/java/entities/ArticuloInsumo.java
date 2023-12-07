/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package entities;

import java.util.List;

/**
 *
 * @author Lopez
 */
public class ArticuloInsumo {
    int idArticuloInsumo;
    String denominacion;
    double precioCompra;
    double precioVenta;
    double stockActual;
    double stockMinimo;
    String unidadMedida;
    boolean esInsumo;
    List<DetallePedido> detallesPedido;
    List<DetalleFactura> detallesFactura;
    List<ArticuloManufacturadoDetalle> articulosManufacturadosDetalle;
    Rubro rubro;

    public ArticuloInsumo() {
    }
    
    
}
