import { Router } from "express";
import {methods as buysController} from "../controllers/buys.controller"
import { validateBuy, validateId } from "../validations/buys.validation";


const router=Router();

router.get("/", buysController.getbuys);
router.get("/:id", validateId,buysController.getbuy);
router.post("/", validateBuy,buysController.addbuys);
router.put("/:id", validateId, validateBuy,buysController.updatebuys);
router.delete("/:id", validateId,buysController.deletebuys);



export default router;