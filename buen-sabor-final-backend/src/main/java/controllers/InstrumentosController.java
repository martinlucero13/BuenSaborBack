/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package controllers;

import entities.Instrumento;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Usuario
 */
//clase que recive las peticiones del cliente y va a responder 
//Es para que no tenga conflico con el origin 
@CrossOrigin(origins = "*", allowedHeaders = "*")
//Le dice a la api que esta clase va a recivir peticiones
@RestController
public class InstrumentosController {
    //El value es el valor que yo voy a tener que poner en el browser, estas dos primeras anotaciones hacen lo mismo
    @RequestMapping(value = "prueba")
    public String prueba(){
        return "PRUEBA SPRING BOOT";
    } 
    //lo que se informa es de tipo get y trae la ruta
    @GetMapping("prueba2")
    public String prueba2(){
        return "PRUEBA 2 SPRING BOOT";
    } 
    
    String urlConexion = "jdbc:mysql://localhost:3306/InstrumentosDB";
    String usuario = "root";
    String clave = "mysql";
    
    
    @GetMapping("api/instrumentos")
    public List<Instrumento> getPlatosDataBaseJSON(){
        System.out.println("getPlatosDataBaseJSON");
        return getInstrumentosDataBase();
    }
    
    @RequestMapping(value = "api/getInstrumentosDataBase")
    public List<Instrumento> getInstrumentosDataBase(){
    
        ResultSet rs = null;
        List<Instrumento> instrumentos = new ArrayList<Instrumento>();
        
        try {
            Class.forName("com.mysql.jdbc.Driver");
            Connection conexion = DriverManager.getConnection(urlConexion, usuario, clave);

            Statement s = conexion.createStatement();

            // Se realiza la consulta. Los resultados se guardan en el
            // ResultSet rs
            rs = s.executeQuery("select * from instrumento");
            while (rs.next()) {
                Instrumento instrumento = new Instrumento();
                instrumento.setId(Integer.parseInt(rs.getString("id")));
                instrumento.setInstrumento(rs.getString("instrumento"));
                instrumento.setMarca(rs.getString("marca"));
                instrumento.setModelo(rs.getString("modelo"));
                instrumento.setImagen(rs.getString("imagen"));
                instrumento.setPrecio(Double.parseDouble(rs.getString("precio")));
                instrumento.setCostoEnvio(rs.getString("costoEnvio"));
                instrumento.setCantidadVendida(Integer.parseInt(rs.getString("cantidadVendida")));
                instrumento.setDescripcion(rs.getString("descripcion"));
                instrumentos.add(instrumento);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return instrumentos;

    
    }
    
    
    @GetMapping("api/instrumentoxid/{id}")
    public Instrumento getInstrumentoDataBaseXIdJSON(@PathVariable String id){
        return getInstrumentoDataBaseXId(Long.parseLong(id));
    }
    
    
    public Instrumento getInstrumentoDataBaseXId(long idInstrumento){

        ResultSet rs = null;
        Instrumento instrumento = new Instrumento();

        try {
            Class.forName("com.mysql.jdbc.Driver");
            Connection conexion = DriverManager.getConnection(urlConexion, usuario, clave);

            Statement s = conexion.createStatement();

            // Se realiza la consulta. Los resultados se guardan en el
            // ResultSet rs
            rs = s.executeQuery("SELECT * from instrumento WHERE id = " + idInstrumento);
            while (rs.next()) {
                instrumento.setId(Integer.parseInt(rs.getString("id")));
                instrumento.setInstrumento(rs.getString("instrumento"));
                instrumento.setMarca(rs.getString("marca"));
                instrumento.setModelo(rs.getString("modelo"));
                instrumento.setImagen(rs.getString("imagen"));
                instrumento.setPrecio(Double.parseDouble(rs.getString("precio")));
                instrumento.setCostoEnvio(rs.getString("costoEnvio"));
                instrumento.setCantidadVendida(Integer.parseInt(rs.getString("cantidadVendida")));
                instrumento.setDescripcion(rs.getString("descripcion"));
            }


        } catch (Exception e) {
            e.printStackTrace();
        }
        return instrumento;
    }
}
