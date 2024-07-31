import { Router } from "express";
import { methods as suppliersController } from "../controllers/Suppliers.controller";
import { validateSupplier, validateSupplierId } from "../validations/suppliers.validation";

const router = Router();

router.get("/", suppliersController.getSuppliers);
router.get("/:id", validateSupplierId, suppliersController.getSupplier);
router.post("/", validateSupplier, suppliersController.addSupplier);
router.put("/:id", validateSupplierId, validateSupplier, suppliersController.updateSupplier);
router.delete("/:id", validateSupplierId, suppliersController.deleteSupplier);

export default router;
