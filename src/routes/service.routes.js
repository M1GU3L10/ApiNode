import { Router } from "express";
import {methods as serviceController} from "../controllers/service.controller"

const router=Router();

router.get("/", serviceController.getServices);
router.get("/:id", serviceController.getService);
router.post("/", serviceController.addService);
router.put("/:id", serviceController.updateService);
router.delete("/:id", serviceController.deleteService);


export default router;