
package entities;

import java.util.List;

public class ArticuloManufacturado {
    int idArticuloManufacturado;
    int tiempoEstimadoCocina;
    String denominacion;
    double precioVenta;
    String imagen;
    List<DetallePedido> detallesPedido;
    List<DetalleFactura> detallesFactura;
    List<ArticuloManufacturadoDetalle> articulosManufacturadosDetalle;
    Rubro rubro;

    public ArticuloManufacturado() {
    }
    
    
}
