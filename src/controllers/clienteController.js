import prisma from "../prisma/client.js";

export const createCliente = async (req, res) => {
  try {
    const { cpf, nome, dataNascimento, grupo } = req.body;
    const cliente = await prisma.cliente.create({
      data: {
        cpf,
        nome,
        dataNascimento: new Date(dataNascimento),
        grupo,
      },
    });
    res.status(201).json(cliente);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getAllClientes = async (req, res) => {
  try {
    const clientes = await prisma.cliente.findMany();
    res.status(200).json(clientes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getClienteById = async (req, res) => {
  try {
    const { id } = req.params;
    const cliente = await prisma.cliente.findUnique({ where: { id: Number(id) } });
    if (!cliente) return res.status(404).json({ error: "Cliente não encontrado" });
    res.status(200).json(cliente);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const updateCliente = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, dataNascimento, grupo } = req.body;
    const cliente = await prisma.cliente.update({
      where: { id: Number(id) },
      data: { nome, dataNascimento: new Date(dataNascimento), grupo },
    });
    res.status(200).json(cliente);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteCliente = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.cliente.delete({ where: { id: Number(id) } });
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
