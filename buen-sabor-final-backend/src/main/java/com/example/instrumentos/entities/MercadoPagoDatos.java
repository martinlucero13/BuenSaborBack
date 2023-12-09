/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package entities;

import java.util.Date;


/**
 *
 * @author Usuario
 */

public class MercadoPagoDatos{

    private int idMercadoPagoDatos;

    private Date fechaCreacion;

    private Date fechaAprobacion;

    private String formaPago;

    private String metodoPago;

    private String nroTarjeta;

    private String estado;
    

    private Pedido pedido;

    public MercadoPagoDatos(int idMercadoPagoDatos, Date fechaCreacion, Date fechaAprobacion, String formaPago, String metodoPago, String nroTarjeta, String estado, Pedido pedido) {
        this.idMercadoPagoDatos = idMercadoPagoDatos;
        this.fechaCreacion = fechaCreacion;
        this.fechaAprobacion = fechaAprobacion;
        this.formaPago = formaPago;
        this.metodoPago = metodoPago;
        this.nroTarjeta = nroTarjeta;
        this.estado = estado;
        this.pedido = pedido;
    }

    public int getId() {
        return idMercadoPagoDatos;
    }

    public void setId(int idMercadoPagoDatos) {
        this.idMercadoPagoDatos = idMercadoPagoDatos;
    }

    public Date getFechaCreacion() {
        return fechaCreacion;
    }

    public void setFechaCreacion(Date fechaCreacion) {
        this.fechaCreacion = fechaCreacion;
    }

    public Date getFechaAprobacion() {
        return fechaAprobacion;
    }

    public void setFechaAprobacion(Date fechaAprobacion) {
        this.fechaAprobacion = fechaAprobacion;
    }

    public String getFormaPago() {
        return formaPago;
    }

    public void setFormaPago(String formaPago) {
        this.formaPago = formaPago;
    }

    public String getMetodoPago() {
        return metodoPago;
    }

    public void setMetodoPago(String metodoPago) {
        this.metodoPago = metodoPago;
    }

    public String getNroTarjeta() {
        return nroTarjeta;
    }

    public void setNroTarjeta(String nroTarjeta) {
        this.nroTarjeta = nroTarjeta;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public Pedido getPedido() {
        return pedido;
    }

    public void setPedido(Pedido pedido) {
        this.pedido = pedido;
    }
    
    
}
