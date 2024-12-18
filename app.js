import express from "express";
import clienteRoutes from "./routes/clienteRoutes.js";

const app = express();
app.use(express.json());

// Rotas
app.use("/clientes", clienteRoutes);

export default app;
