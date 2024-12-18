// import jwt from "jsonwebtoken";

// export const authenticate = (req, res, next) => {
//   const token = req.headers["authorization"];
  
//   if (!token) {
//     return res.status(401).json({ error: "Token não fornecido" });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded; // Adiciona o usuário decodificado à requisição
//     next(); // Passa o controle para o próximo middleware ou rota
//   } catch (error) {
//     res.status(403).json({ error: "Token inválido" });
//   }
// };

// export const authorize = (roles) => (req, res, next) => {
//   if (!roles.includes(req.user.role)) {
//     return res.status(403).json({ error: "Acesso negado" });
//   }
//   next();
// };
