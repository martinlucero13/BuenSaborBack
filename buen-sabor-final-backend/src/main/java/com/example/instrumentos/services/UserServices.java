package com.example.instrumentos.services;

import com.example.buensabor.entities.Instrumento;
import com.example.buensabor.entities.Usuario;
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


public class UserServices {
    String urlConexion = "jdbc:mysql://localhost:3306/db_buen_sabor";
    String usuario = "root";
    String clave = "mysql";
    
    public UserServices() {
    }
    
    public String prueba(){
        return "PRUEBA SPRING BOOT Vaaaaamooo Manao";
    }

    public String prueba2(){
        return "PRUEBA 2 SPRING BOOT";
    } 
    
    public List<Usuario> usuarios(){
        //System.out.println("Llega a usuarios");
        ResultSet rs = null;
        List<Usuario> usuarios = new ArrayList<Usuario>();
        
        try {
            Class.forName("com.mysql.jdbc.Driver");
            Connection conexion = DriverManager.getConnection(urlConexion, usuario, clave);

            Statement s = conexion.createStatement();

            rs = s.executeQuery("select * from Usuario");
            while (rs.next()) {
                Usuario usuario = new Usuario();
                usuario.setIdUsuario(Integer.parseInt(rs.getString("idUsuario")));
                usuario.setUsuario(rs.getString("usuario"));
                usuario.setClave(rs.getString("clave"));
                usuario.setRol(rs.getString("rol"));
                usuarios.add(usuario);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        
        //System.out.println(usuarios);
        return usuarios;
    }
    
    
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
    
    
    @GetMapping("api/buscar/{termino}")
    public List<Instrumento> getInstrumentoDataBaseXTermino(@PathVariable String termino) throws SQLException{
    
        ResultSet rs = null;
        List<Instrumento> instrumentos = new ArrayList<Instrumento>();
        Connection conexion = null;    
        try {
            Class.forName("com.mysql.jdbc.Driver");
            conexion = DriverManager.getConnection(urlConexion, usuario, clave);

            Statement s = conexion.createStatement();

            // Se realiza la consulta. Los resultados se guardan en el
            // ResultSet rs
            rs = s.executeQuery("SELECT * from instrumento WHERE nombre LIKE '%" + termino + "%'");
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
            return null;
        }finally{
            if(conexion != null)
                conexion.close();
        }
        return instrumentos;
    }
    
    
    @PostMapping("api/insert")
    public Instrumento insertarInstrumento(@RequestBody Instrumento instrumento) throws SQLException {
        Connection conexion = null;
        try {
            Class.forName("com.mysql.jdbc.Driver");
            conexion = DriverManager.getConnection(urlConexion, usuario, clave);
            conexion.setAutoCommit(false);
            PreparedStatement ps = conexion.prepareStatement("INSERT INTO instrumento (instrumento, marca, modelo, imagen, precio, costoEnvio, cantidadVendida, descripcion) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");

            // Se establecen los parámetros y se ejecuta la sentencia.
            ps.setString(1, instrumento.getInstrumento());
            ps.setString(2, instrumento.getMarca());
            ps.setString(3, instrumento.getModelo());
            ps.setString(4, instrumento.getImagen());
            ps.setDouble(5, instrumento.getPrecio());
            ps.setString(6, instrumento.getCostoEnvio());
            ps.setInt(7, instrumento.getCantidadVendida());
            ps.setString(8, instrumento.getDescripcion());
            
            int affectedRows = ps.executeUpdate();
            if (affectedRows == 0) {
                    throw new SQLException("No se pudo guardar");
            }
            
            //recupero el ultimo id
            ResultSet generatedKeys = ps.getGeneratedKeys();
            long idGenerado = 0;
            if (generatedKeys.next()) {
                idGenerado = generatedKeys.getLong(1);
            }
            /*
            for(PlatoIngrediente platoIng : plato.getIngredientesPlato()){
                ps = conexion.prepareStatement("INSERT INTO plato_ingrediente(idplato, idingrediente, cantidad) VALUES (?, ?, ?)");
                ps.setLong(1, idGenerado);
                ps.setLong(2, platoIng.getIngrediente().getId());
                ps.setDouble(3, platoIng.getCantidad());
               
                ps.executeUpdate();
            }
            */
             conexion.commit();
             
            return this.getInstrumentoDataBaseXId(idGenerado);
        } catch (ClassNotFoundException | SQLException ex) {
            if(null != conexion)
                conexion.rollback();
            return null;
        }finally{
            if(null != conexion)
                conexion.close();
        }
        

    }
    
    
    @PutMapping("api/update")
    public Instrumento actualizarInstrumento(@RequestBody Instrumento instrumento) throws SQLException {
        Connection conexion = null;
        try {
            Class.forName("com.mysql.jdbc.Driver");
            conexion = DriverManager.getConnection(urlConexion, usuario, clave);
            conexion.setAutoCommit(false);
            //busco los ingredientes que tiene el plato
            /*List<PlatoIngrediente> ingredientesPlato = getPlatoIngredientesXIdPlato(plato.getId());
            
            List<Long> idsDelete = new ArrayList<Long>();
            //comparo lo que tenia antes contra lo que tiene ahora
            for(PlatoIngrediente ingAntes : ingredientesPlato){
                boolean eliminar = true;
                for(PlatoIngrediente ingAhora : plato.getIngredientesPlato()){
                    if(ingAhora.getIdplatoingrediente() == 0){
                        eliminar = false;
                        break;
                    }
                    if(ingAhora.getIdplatoingrediente() == ingAntes.getIdplatoingrediente()){
                        eliminar = false;
                        break;
                    }
                }
                if(eliminar){
                    idsDelete.add(ingAntes.getIdplatoingrediente());
                }
            }
            
            for(Long idDelete : idsDelete){
                Statement st = conexion.createStatement();
                st.executeUpdate("DELETE FROM plato_ingrediente WHERE idplatoingrediente = " + idDelete);
            }
            
            for(PlatoIngrediente platoIng : plato.getIngredientesPlato()){
                if(platoIng.getIdplatoingrediente() > 0){
                    continue;
                }
                PreparedStatement ps = conexion.prepareStatement("INSERT INTO plato_ingrediente(idplato, idingrediente, cantidad) VALUES (?, ?, ?)");
                ps.setLong(1, plato.getId());
                ps.setLong(2, platoIng.getIngrediente().getId());
                ps.setDouble(3, platoIng.getCantidad());
               
                ps.executeUpdate();
            }*/
            
            PreparedStatement ps = conexion.prepareStatement("UPDATE instrumento SET instrumento = ?, marca = ?, modelo = ?, imagen = ?, precio = ?, costoEnvio = ?, cantidadVendida = ?, descripcion = ? WHERE id = ?");
            ps.setString(1, instrumento.getInstrumento());
            ps.setString(2, instrumento.getMarca());
            ps.setString(3, instrumento.getModelo());
            ps.setString(4, instrumento.getImagen());
            ps.setDouble(5, instrumento.getPrecio());
            ps.setString(6, instrumento.getCostoEnvio());
            ps.setInt(7, instrumento.getCantidadVendida());
            ps.setString(8, instrumento.getDescripcion());
            ps.setInt(9, instrumento.getId());
            ps.executeUpdate();
            
            conexion.commit();
                    
            return this.getInstrumentoDataBaseXId(instrumento.getId());

        } catch (Exception ex) {
            ex.printStackTrace();
            return null;
        }finally{
            if(conexion != null)
                conexion.close();
        }
    }
    
     
    @GetMapping("api/eliminar/{id}")
    public String eliminarInstrumento(@PathVariable String id) throws SQLException{
        Connection conexion = null;
        try {
            Class.forName("com.mysql.jdbc.Driver");
            conexion = DriverManager.getConnection(urlConexion, usuario, clave);
            
            conexion.setAutoCommit(false);
            
            Statement st = conexion.createStatement();
           /* st.executeUpdate("DELETE FROM plato_ingrediente WHERE idplato = " + id);*/
            
            st = conexion.createStatement();
            String sql = "DELETE FROM instrumento WHERE id = " + id;
            int delete = st.executeUpdate(sql);

            conexion.commit();
            
            if (delete != 0) {
                System.out.println("Instrumento Borrado");
                return "OK";
            } else {
                System.out.println("Instrumento no Borrado");
                return "Error";
            }
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }finally{
            if(conexion != null)
                conexion.close();
        }
    }
}
