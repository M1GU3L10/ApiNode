import { Router } from "express";
import {methods as absenceController} from "../controllers/absence.controller"
import { validateAbsence, validateId } from "../validations/absence.validations";


const router=Router();

router.get("/", absenceController.getAbsences);
router.get("/:id", validateId,absenceController.getAbsence);
router.post("/", validateAbsence,absenceController.addAbsences);
router.put("/:id", validateId,validateAbsence,absenceController.updateAbsences);
router.delete("/:id", validateId,absenceController.deleteAbsences);

export default router;