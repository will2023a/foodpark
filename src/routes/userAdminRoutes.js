import express from "express";
import {
  createUserAdmin,
  getAllUserAdmins,
  deleteUserAdmin,
} from "/controllers/userAdminController.js";

const router = express.Router();

router.post("/", createUserAdmin); // Criar UserAdmin
router.get("/", getAllUserAdmins); // Listar UserAdmins
router.delete("/:id", deleteUserAdmin); // Deletar UserAdmin

export default router;
