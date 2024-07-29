import { Router } from "express";
import { methods as pedidoController } from "../controllers/pedido.controller";

const router = Router();

router.get("/", pedidoController.getPedidos);
router.get("/:id", pedidoController.getPedido);
router.post("/", pedidoController.addPedido);
router.put("/:id", pedidoController.updatePedido);
router.delete("/:id", pedidoController.deletePedido);

export default router;
