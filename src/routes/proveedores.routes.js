import { Router } from "express";
import { methods as proveedorController } from "../controllers/proveedores.controller";

const router = Router();

router.get("/", proveedorController.getProveedores);
router.get("/:id", proveedorController.getProveedor);
router.post("/", proveedorController.addProveedor);
router.put("/:id", proveedorController.updateProveedor);
router.delete("/:id", proveedorController.deleteProveedor);

export default router;
