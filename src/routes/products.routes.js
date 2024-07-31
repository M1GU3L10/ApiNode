import { Router } from "express";
import { methods as productsController } from "../controllers/products.controller";
import { validateProduct, validateProductId } from "../validations/products.validation";

const router = Router();

router.get("/", productsController.getProducts);
router.get("/:id", validateProductId, productsController.getProduct);
router.post("/", validateProduct, productsController.addProduct);
router.put("/:id", validateProductId, validateProduct, productsController.updateProduct);
router.delete("/:id", validateProductId, productsController.deleteProduct);

export default router;
