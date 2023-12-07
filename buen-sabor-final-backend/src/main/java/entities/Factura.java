/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package entities;

import java.sql.Date;
import java.util.List;

public class Factura {
    int idFactura;
    Date fecha;
    int numero;
    double montoDescuento;
    String formaPago;
    String nroTarjeta;
    double totalVenta;
    double totalCosto;
    Pedido pedido;
    List<DetalleFactura>detallesFactura;

    public Factura() {
    }
    
    
    
}
