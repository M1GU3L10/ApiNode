import { Router } from "express";
import {methods as shoppingController} from "../controllers/shopping.controller"
import { validateshopping, validateId } from "../validations/shopping.validation";


const router=Router();

router.get("/", shoppingController.getshoppings);
router.get("/:id", validateId,shoppingController.getshopping);
router.post("/", validateshopping,shoppingController.addshopping);
router.put("/:id", validateId, validateshopping,shoppingController.updateshopping);
router.delete("/:id", validateId,shoppingController.deleteshopping);



export default router;