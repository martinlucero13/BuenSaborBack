/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package entities;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 *
 * @author Usuario
 */
@Entity
@Table(name = "configuracion")
public class Configuracion implements Serializable{
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idConfiguracion;
    
    @Column(name = "cantidadCocineros")
    private int cantidadCocineros;
    
    @Column(name = "emailEmpresa")
    private String emailEmpresa;
    
    @Column(name = "tokenMercadoPago")
    private String tokenMercadoPago;

    public Configuracion(int idConfiguracion, int cantidadCocineros, String emailEmpresa, String tokenMercadoPago) {
        this.idConfiguracion = idConfiguracion;
        this.cantidadCocineros = cantidadCocineros;
        this.emailEmpresa = emailEmpresa;
        this.tokenMercadoPago = tokenMercadoPago;
    }

    public Configuracion() {
    }

    public int getId() {
        return idConfiguracion;
    }

    public void setId(int idConfiguracion) {
        this.idConfiguracion = idConfiguracion;
    }

    public int getCantidadCocineros() {
        return cantidadCocineros;
    }

    public void setCantidadCocineros(int cantidadCocineros) {
        this.cantidadCocineros = cantidadCocineros;
    }

    public String getEmailEmpresa() {
        return emailEmpresa;
    }

    public void setEmailEmpresa(String emailEmpresa) {
        this.emailEmpresa = emailEmpresa;
    }

    public String getTokenMercadoPago() {
        return tokenMercadoPago;
    }

    public void setTokenMercadoPago(String tokenMercadoPago) {
        this.tokenMercadoPago = tokenMercadoPago;
    }
    
    
}