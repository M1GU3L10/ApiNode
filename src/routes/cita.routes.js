import { Router } from "express";
import {methods as citaController} from "./../controllers/cita.controller"

const router=Router();

router.get("/", citaController.getCitas);
router.get("/:id", citaController.getCita);
router.post("/", citaController.addCita);
router.put("/:id", citaController.updateCita);
router.delete("/:id", citaController.deleteCita);

export default router;