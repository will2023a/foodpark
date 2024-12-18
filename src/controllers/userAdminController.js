import prisma from "../prisma/client.js";

export const createUserAdmin = async (req, res) => {
  try {
    const { email, senha, role, restauranteId } = req.body;
    const userAdmin = await prisma.userAdmin.create({
      data: { email, senha, role, restauranteId },
    });
    res.status(201).json(userAdmin);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getAllUserAdmins = async (req, res) => {
  try {
    const userAdmins = await prisma.userAdmin.findMany();
    res.status(200).json(userAdmins);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteUserAdmin = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.userAdmin.delete({ where: { id: Number(id) } });
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
