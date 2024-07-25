import { Router } from "express";
import {methods as compraController} from "../controllers/compra.controller"

const router=Router();

router.get("/", compraController.getCompras);
router.get("/:id", compraController.getCompra);
router.post("/", compraController.addCompra);
router.put("/:id", compraController.updateCompra);
router.delete("/:id", compraController.deleteCompra);


export default router;