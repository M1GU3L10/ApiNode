import { Router } from "express";
import {methods as buysController} from "../controllers/buys.controller"

const router=Router();

router.get("/", buysController.getbuys);
router.get("/:id", buysController.getbuy);
router.post("/", buysController.addbuys);
router.put("/:id", buysController.updatebuys);
router.delete("/:id", buysController.deletebuys);


export default router;