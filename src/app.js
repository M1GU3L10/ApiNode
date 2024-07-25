import express from "express";
import morgan from "morgan";

import languageRoutes from "./routes/languaje.routes";
import usuarioRoutes from "./routes/usuario.routes";
import citaRoutes from "./routes/cita.routes";
import rolRoutes from "./routes/rol.routes";


const app=express();

//Settings
app.set("port", 4000);

//Middlewares
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/languages",languageRoutes);
app.use("/api/usuarios",usuarioRoutes);
app.use("/api/citas",citaRoutes);
app.use("/api/roles",rolRoutes);

export default app;