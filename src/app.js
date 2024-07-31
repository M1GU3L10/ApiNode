import express from "express";
import morgan from "morgan";

import usuarioRoutes from "./routes/usuario.routes";
import citaRoutes from "./routes/cita.routes";
import rolRoutes from "./routes/rol.routes";
import programming_EmployeeRoutes from "./routes/programming_Employee.routes";
import absenceRoutes from "./routes/absence.routes";
import compraRoutes from "./routes/buys.routes";
import CategoryRoutes from "./routes/category.routes";
import shoppingRoutes from "./routes/shopping.routes";
import serviceRoutes from "./routes/service.routes";






const app=express();

//Settings
app.set("port", 4000);

//Middlewares
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/usuarios",usuarioRoutes);
app.use("/api/citas",citaRoutes);
app.use("/api/roles",rolRoutes);
app.use("/api/programEmpleado",programming_EmployeeRoutes);
app.use("/api/ausencias",absenceRoutes);
app.use("/api/compras",compraRoutes);
app.use("/api/category",CategoryRoutes);
app.use("/api/compras",shoppingRoutes);
app.use("/api/service",serviceRoutes);


export default app;