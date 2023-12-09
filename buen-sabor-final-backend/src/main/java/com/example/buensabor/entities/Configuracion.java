/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.buensabor.entities;



/**
 *
 * @author Usuario
 */

public class Configuracion{


    private int idConfiguracion;
    

    private int cantidadCocineros;
    

    private String emailEmpresa;
    

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