import { Router } from "express";
import { methods as ordersController } from "../controllers/orders.controller";
import { validateOrder, validateOrderId } from "../validations/orders.validation";

const router = Router();

router.get("/", ordersController.getOrders);
router.get("/:id", validateOrderId, ordersController.getOrder);
router.post("/", validateOrder, ordersController.addOrder);
router.put("/:id", validateOrderId, validateOrder, ordersController.updateOrder);
router.delete("/:id", validateOrderId, ordersController.deleteOrder);

export default router;
