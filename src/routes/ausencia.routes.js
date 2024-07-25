import { Router } from "express";
import {methods as ausenciaController} from "../controllers/ausencia.controller"

const router=Router();

router.get("/", ausenciaController.getAusencias);
router.get("/:id", ausenciaController.getAusencia);
router.post("/", ausenciaController.addAusencia);
router.put("/:id", ausenciaController.updateAusencia);
router.delete("/:id", ausenciaController.deleteAusencia);


export default router;