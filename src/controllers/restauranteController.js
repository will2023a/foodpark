import prisma from "../prismaClient.js"; // Importa o cliente Prisma

/**
 * @desc Retorna todos os restaurantes
 * @route GET /api/restaurantes
 * @access Qualquer usuário autenticado
 */
export const getAllRestaurantes = async (req, res) => {
  try {
    const restaurantes = await prisma.restaurante.findMany({
      include: {
        admins: true, // Inclui os admins associados, se necessário
        cardapio: true, // Inclui os itens do cardápio, se necessário
      },
    });
    res.status(200).json(restaurantes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar restaurantes" });
  }
};

/**
 * @desc Retorna um restaurante pelo ID
 * @route GET /api/restaurantes/:id
 * @access Qualquer usuário autenticado
 */
export const getRestauranteById = async (req, res) => {
  const { id } = req.params;

  try {
    const restaurante = await prisma.restaurante.findUnique({
      where: { id: parseInt(id) },
      include: {
        admins: true,
        cardapio: true,
      },
    });

    if (!restaurante) {
      return res.status(404).json({ error: "Restaurante não encontrado" });
    }

    res.status(200).json(restaurante);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar restaurante" });
  }
};

/**
 * @desc Cria um novo restaurante
 * @route POST /api/restaurantes
 * @access Apenas SUPER_ADMIN
 */
export const createRestaurante = async (req, res) => {
  const { nomeRestaurante, cnpj, promocao } = req.body;

  try {
    const novoRestaurante = await prisma.restaurante.create({
      data: {
        nomeRestaurante,
        cnpj,
        promocao: promocao || false,
      },
    });

    res.status(201).json(novoRestaurante);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao criar restaurante" });
  }
};

/**
 * @desc Atualiza um restaurante
 * @route PUT /api/restaurantes/:id
 * @access SUPER_ADMIN ou ADMIN_RESTAURANTE (do próprio restaurante)
 */
export const updateRestaurante = async (req, res) => {
  const { id } = req.params;
  const { nomeRestaurante, cnpj, promocao } = req.body;

  try {
    // Verifica se o restaurante pertence ao ADMIN_RESTAURANTE
    if (req.user.role === "ADMIN_RESTAURANTE" && req.user.restauranteId !== parseInt(id)) {
      return res.status(403).json({ error: "Acesso negado" });
    }

    const restauranteAtualizado = await prisma.restaurante.update({
      where: { id: parseInt(id) },
      data: {
        nomeRestaurante,
        cnpj,
        promocao,
      },
    });

    res.status(200).json(restauranteAtualizado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao atualizar restaurante" });
  }
};

/**
 * @desc Deleta um restaurante
 * @route DELETE /api/restaurantes/:id
 * @access Apenas SUPER_ADMIN
 */
export const deleteRestaurante = async (req, res) => {
  const { id } = req.params;

  try {
    if (req.user.role !== "SUPER_ADMIN") {
      return res.status(403).json({ error: "Acesso negado" });
    }

    await prisma.restaurante.delete({
      where: { id: parseInt(id) },
    });

    res.status(200).json({ message: "Restaurante deletado com sucesso" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao deletar restaurante" });
  }
};
