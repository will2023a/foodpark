import express from "express";
import {
  createRestaurante,
  getAllRestaurantes,
  getRestauranteById,
  updateRestaurante,
  deleteRestaurante,
} from "../controllers/restauranteController.js";

const router = express.Router();

router.post("/", createRestaurante); // Criar restaurante
router.get("/", getAllRestaurantes); // Listar restaurantes
router.get("/:id", getRestauranteById); // Buscar restaurante por ID
router.put("/:id", updateRestaurante); // Atualizar restaurante
router.delete("/:id", deleteRestaurante); // Deletar restaurante

export default router;
