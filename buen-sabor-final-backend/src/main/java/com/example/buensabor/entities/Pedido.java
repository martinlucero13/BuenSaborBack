
package com.example.buensabor.entities;

import java.util.Date;
import java.util.List;




public class Pedido{

    private int idPedido;
    

    private Date fecha;

    private int numero;

    private int horaEstimadaFin;

    private int tipoEnvio;
    
    private double total;
    
    private Factura factura;
    private List<DetallePedido>detallesFactura;
    private Cliente cliente;
    

    private MercadoPagoDatos mercadoPagoDatos;

    public Pedido() {
    }

    public Pedido(int idPedido, Date fecha, int numero, int horaEstimadaFin, int tipoEnvio, double total, Factura factura, List<DetallePedido> detallesFactura, Cliente cliente, MercadoPagoDatos mercadoPagoDatos) {
        this.idPedido = idPedido;
        this.fecha = fecha;
        this.numero = numero;
        this.horaEstimadaFin = horaEstimadaFin;
        this.tipoEnvio = tipoEnvio;
        this.total = total;
        this.factura = factura;
        this.detallesFactura = detallesFactura;
        this.cliente = cliente;
        this.mercadoPagoDatos = mercadoPagoDatos;
    }

    public int getIdPedido() {
        return idPedido;
    }

    public void setIdPedido(int idPedido) {
        this.idPedido = idPedido;
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

    public int getHoraEstimadaFin() {
        return horaEstimadaFin;
    }

    public void setHoraEstimadaFin(int horaEstimadaFin) {
        this.horaEstimadaFin = horaEstimadaFin;
    }

    public int getTipoEnvio() {
        return tipoEnvio;
    }

    public void setTipoEnvio(int tipoEnvio) {
        this.tipoEnvio = tipoEnvio;
    }

    public double getTotal() {
        return total;
    }

    public void setTotal(double total) {
        this.total = total;
    }

    public Factura getFactura() {
        return factura;
    }

    public void setFactura(Factura factura) {
        this.factura = factura;
    }

    public List<DetallePedido> getDetallesFactura() {
        return detallesFactura;
    }

    public void setDetallesFactura(List<DetallePedido> detallesFactura) {
        this.detallesFactura = detallesFactura;
    }

    public Cliente getCliente() {
        return cliente;
    }

    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }

    public MercadoPagoDatos getMercadoPagoDatos() {
        return mercadoPagoDatos;
    }

    public void setMercadoPagoDatos(MercadoPagoDatos mercadoPagoDatos) {
        this.mercadoPagoDatos = mercadoPagoDatos;
    }
    
    
    
    
}
