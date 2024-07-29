import { Router } from "express";
import {methods as absenceController} from "../controllers/absence.controller"

const router=Router();

router.get("/", absenceController.getAbsences);
router.get("/:id", absenceController.getAbsence);
router.post("/", absenceController.addAbsences);
router.put("/:id", absenceController.updateAbsences);
router.delete("/:id", absenceController.deleteAbsences);


export default router;