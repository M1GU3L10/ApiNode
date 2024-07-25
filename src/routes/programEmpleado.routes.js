import { Router } from "express";
import {methods as programEmpleadoController} from "../controllers/programEmpleado.controller"

const router=Router();

router.get("/", programEmpleadoController.getprogramacion_empleados);
router.get("/:id", programEmpleadoController.getProgram_empleado);
router.post("/", programEmpleadoController.addProgram_empleado);
router.put("/:id", programEmpleadoController.updateProgram_empleado);
router.delete("/:id", programEmpleadoController.deleteProgram_empleado);


export default router;