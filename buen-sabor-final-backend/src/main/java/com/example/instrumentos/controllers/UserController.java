/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.instrumentos.controllers;

import com.example.buensabor.entities.Instrumento;
import com.example.buensabor.entities.Usuario;
import com.example.instrumentos.services.UserServices;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
@RequestMapping("/users")
public class UserController {
    
    UserServices userServices = new UserServices();
    //El value es el valor que yo voy a tener que poner en el browser, estas dos primeras anotaciones hacen lo mismo
    @RequestMapping(value = "/prueba")
    public String prueba(){
        return userServices.prueba();
    } 
    //lo que se informa es de tipo get y trae la ruta
    @GetMapping("prueba2")
    public String prueba2(){
        return userServices.prueba2();
    } 
    
    @GetMapping("usuarios")
    public List<Usuario> usuarios(){
        return userServices.usuarios();
    }
}
