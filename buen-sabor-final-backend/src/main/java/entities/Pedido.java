
package entities;

import java.sql.Date;
import java.util.List;


public class Pedido {
    int idPedido;
    Date fecha;
    int numero;
    //DateTime
    Date horaEstimadaFin;
    int tipoEnvio;
    double total;
    Factura factura;
    List<DetallePedido>detallesFactura;
    Cliente cliente;

    public Pedido() {
    }
    
    
}
