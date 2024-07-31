import { Router } from "express";
import {methods as programming_EmployeeController} from "../controllers/programming_Employee.controller"

const router=Router();

router.get("/", programming_EmployeeController.getProgramming_Employee);
router.get("/:id", programming_EmployeeController.getProgramming_Employe);
router.post("/", programming_EmployeeController.addProgramming_Employee);
router.put("/:id", programming_EmployeeController.updateProgramming_Employee);
router.delete("/:id", programming_EmployeeController.deleteProgramming_Employee);


export default router;