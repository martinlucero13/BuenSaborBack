/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package entities;

/**
 *
 * @author Lopez
 */
public class Rubro {
    private int idRubro;
    private int rubro;
    private int subRubro;
    private String denominacion;

    public Rubro() {
    }

    public Rubro(int idRubro, int rubro, int subRubro, String denominacion) {
        this.idRubro = idRubro;
        this.rubro = rubro;
        this.subRubro = subRubro;
        this.denominacion = denominacion;
    }

    public int getIdRubro() {
        return idRubro;
    }

    public void setIdRubro(int idRubro) {
        this.idRubro = idRubro;
    }

    public int getRubro() {
        return rubro;
    }

    public void setRubro(int rubro) {
        this.rubro = rubro;
    }

    public int getSubRubro() {
        return subRubro;
    }

    public void setSubRubro(int subRubro) {
        this.subRubro = subRubro;
    }

    public String getDenominacion() {
        return denominacion;
    }

    public void setDenominacion(String denominacion) {
        this.denominacion = denominacion;
    }
    
    
    
    
}
