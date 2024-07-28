import { Router } from "express";
import {methods as categoriaController} from "../controllers/categoria.controller"

const router=Router();

router.get("/", categoriaController.getCategorias);
router.get("/:id", categoriaController.getCategoria);
router.post("/", categoriaController.addCategoria);
router.put("/:id", categoriaController.updateCategoria);
router.delete("/:id", categoriaController.deleteCategoria);


export default router;