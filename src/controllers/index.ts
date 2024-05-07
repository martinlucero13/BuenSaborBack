import { login } from "./login";
import { UsersColController } from "./usersCol";
import { ClientesController } from "./clientes";
import { EmpleadosController } from "./empleados";
import { RubroIngredientesController } from "./rubroIngredientes";
import { RubroProductosController } from "./rubroProductos";
import { StockIngredientesController } from "./stockIngredientes";
import { StockProductosController } from "./stockProductos";
import { ProductosController } from "./productos";

export const controllers = [
  UsersColController,
  login,
  ClientesController,
  EmpleadosController,
  RubroIngredientesController,
  RubroProductosController,
  StockIngredientesController,
  StockProductosController,
  ProductosController
];
