import { Router } from "express";
import {methods as categoriaController} from "../controllers/category.controller"

const router=Router();

router.get("/", categoriaController.getCategories);
router.get("/:id", categoriaController.getCategory);
router.post("/", categoriaController.addCategory);
router.put("/:id", categoriaController.updateCategory);
router.delete("/:id", categoriaController.deleteCategory);


export default router;