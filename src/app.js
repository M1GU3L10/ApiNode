import express from "express";
import morgan from "morgan";


import usuarioRoutes from "./routes/usuario.routes";
import citaRoutes from "./routes/cita.routes";
import rolRoutes from "./routes/rol.routes";
import programEmpleadoRoutes from "./routes/programming_Employee.routes";
import ausenciaRoutes from "./routes/absence.routes";
import compraRoutes from "./routes/buys.routes";
import servicioRoutes from "./routes/servicio.routes";
import categoriaRoutes from "./routes/categoria.routes";
import ventaRoutes from "./routes/venta.routes";
import productosRoutes from "./routes/productos.routes";
import pedidosRoutes from "./routes/pedidos.routes";
import proveedoresRoutes from "./routes/proveedores.routes";







const app=express();

//Settings
app.set("port", 4000);

//Middlewares
app.use(morgan("dev"));
app.use(express.json());


app.use("/api/usuarios",usuarioRoutes);
app.use("/api/citas",citaRoutes);
app.use("/api/roles",rolRoutes);
app.use("/api/programEmpleados",programEmpleadoRoutes);
app.use("/api/ausencias",ausenciaRoutes);
app.use("/api/compras",compraRoutes);
app.use("/api/servicios",servicioRoutes);
app.use("/api/categorias",categoriaRoutes);
app.use("/api/ventas",ventaRoutes);
app.use("/api/productos",productosRoutes);
app.use("/api/pedidos",pedidosRoutes);
app.use("/api/proveedores",proveedoresRoutes);




export default app;