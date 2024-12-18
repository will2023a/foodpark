import express from "express";
import {
  createCliente,
  getAllClientes,
  getClienteById,
  updateCliente,
  deleteCliente,
} from "../controllers/clienteController.js";

const router = express.Router();

router.post("/", createCliente); // Criar cliente
router.get("/", getAllClientes); // Listar todos os clientes
router.get("/:id", getClienteById); // Buscar cliente por ID
router.put("/:id", updateCliente); // Atualizar cliente
router.delete("/:id", deleteCliente); // Deletar cliente

export default router;
