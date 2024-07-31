import { Router } from "express";
import { methods as programming_EmployeeController } from "../controllers/programming_Employee.controller";
import { validateProgramming_employee, validateId } from "../validations/programming_employee.validation";

const router = Router();

router.get("/", programming_EmployeeController.getProgramming_Employee);
router.get("/:Id_programacion", validateId, programming_EmployeeController.getProgramming_Employee);
router.post("/", validateProgramming_employee, programming_EmployeeController.addProgramming_Employee);
router.put("/:Id_programacion", validateId, validateProgramming_employee, programming_EmployeeController.updateProgramming_Employee);
router.delete("/:Id_programacion", validateId, programming_EmployeeController.deleteProgramming_Employee); // Usa el mismo nombre del parámetro

export default router;
