/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package entities;

/**
 *
 * @author Usuario
 */
public class Domicilio {
    private String calle;
    private int numero;
    private String localidad;
    private Cliente cliente;
    private Pedido pedido;

    public Domicilio(String calle, int numero, String localidad, Cliente cliente, Pedido pedido) {
        this.calle = calle;
        this.numero = numero;
        this.localidad = localidad;
        this.cliente = cliente;
        this.pedido = pedido;
    }

    public Domicilio() {
    }

    public String getCalle() {
        return calle;
    }

    public void setCalle(String calle) {
        this.calle = calle;
    }

    public int getNumero() {
        return numero;
    }

    public void setNumero(int numero) {
        this.numero = numero;
    }

    public String getLocalidad() {
        return localidad;
    }

    public void setLocalidad(String localidad) {
        this.localidad = localidad;
    }

    public Cliente getCliente() {
        return cliente;
    }

    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }

    public Pedido getPedido() {
        return pedido;
    }

    public void setPedido(Pedido pedido) {
        this.pedido = pedido;
    }
    
    
}
