/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package entities;

import java.sql.Date;
import java.util.List;

public class Factura {
    private int idFactura;
    private Date fecha;
    private int numero;
    private double montoDescuento;
    private String formaPago;
    private String nroTarjeta;
    private double totalVenta;
    private double totalCosto;
    private Pedido pedido;
    private List<DetalleFactura>detallesFactura;

    public Factura() {
    }

    public Factura(int idFactura, Date fecha, int numero, double montoDescuento, String formaPago, String nroTarjeta, double totalVenta, double totalCosto, Pedido pedido, List<DetalleFactura> detallesFactura) {
        this.idFactura = idFactura;
        this.fecha = fecha;
        this.numero = numero;
        this.montoDescuento = montoDescuento;
        this.formaPago = formaPago;
        this.nroTarjeta = nroTarjeta;
        this.totalVenta = totalVenta;
        this.totalCosto = totalCosto;
        this.pedido = pedido;
        this.detallesFactura = detallesFactura;
    }

    public int getIdFactura() {
        return idFactura;
    }

    public void setIdFactura(int idFactura) {
        this.idFactura = idFactura;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public int getNumero() {
        return numero;
    }

    public void setNumero(int numero) {
        this.numero = numero;
    }

    public double getMontoDescuento() {
        return montoDescuento;
    }

    public void setMontoDescuento(double montoDescuento) {
        this.montoDescuento = montoDescuento;
    }

    public String getFormaPago() {
        return formaPago;
    }

    public void setFormaPago(String formaPago) {
        this.formaPago = formaPago;
    }

    public String getNroTarjeta() {
        return nroTarjeta;
    }

    public void setNroTarjeta(String nroTarjeta) {
        this.nroTarjeta = nroTarjeta;
    }

    public double getTotalVenta() {
        return totalVenta;
    }

    public void setTotalVenta(double totalVenta) {
        this.totalVenta = totalVenta;
    }

    public double getTotalCosto() {
        return totalCosto;
    }

    public void setTotalCosto(double totalCosto) {
        this.totalCosto = totalCosto;
    }

    public Pedido getPedido() {
        return pedido;
    }

    public void setPedido(Pedido pedido) {
        this.pedido = pedido;
    }

    public List<DetalleFactura> getDetallesFactura() {
        return detallesFactura;
    }

    public void setDetallesFactura(List<DetalleFactura> detallesFactura) {
        this.detallesFactura = detallesFactura;
    }
    
    
    
    
    
}
