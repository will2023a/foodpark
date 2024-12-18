# FOODPARK - HAPPYSYSTEM

Documentação da API - FoodPark
Base URL
A base URL da API será:
https://<seu_dominio>/api

1. Clientes
1.1 Criar Cliente
Endpoint:
POST /clientes
Descrição: Cria um novo cliente.

Corpo da requisição (JSON):
{
  "cpf": "12345678901",
  "nome": "João Silva",
  "dataNascimento": "1990-01-01T00:00:00Z"
}
Resposta:
{
  "id": 1,
  "cpf": "12345678901",
  "nome": "João Silva",
  "dataNascimento": "1990-01-01T00:00:00Z",
  "grupo": "BRONZE",
  "criadoEm": "2024-12-18T00:00:00Z"
}

1.2 Listar Clientes
Endpoint:
GET /clientes
Descrição: Lista todos os clientes cadastrados.

Resposta:
  {
    "id": 1,
    "cpf": "12345678901",
    "nome": "João Silva",
    "dataNascimento": "1990-01-01T00:00:00Z",
    "grupo": "BRONZE",
    "criadoEm": "2024-12-18T00:00:00Z"
  }
  
2. Restaurantes
2.1 Criar Restaurante
Endpoint:
POST /restaurantes
Descrição: Cria um novo restaurante.

Corpo da requisição (JSON):
{
  "nomeRestaurante": "Restaurante X",
  "cnpj": "12345678000199",
  "promocao": true
}

Resposta:
{
  "id": 1,
  "nomeRestaurante": "Restaurante X",
  "cnpj": "12345678000199",
  "promocao": true,
  "criadoEm": "2024-12-18T00:00:00Z"
}

2.2 Listar Restaurantes
Endpoint:
GET /restaurantes
Descrição: Lista todos os restaurantes cadastrados.

Resposta:
  {
    "id": 1,
    "nomeRestaurante": "Restaurante X",
    "cnpj": "12345678000199",
    "promocao": true,
    "criadoEm": "2024-12-18T00:00:00Z"
  }
  
3. UserAdmin (Administradores)
3.1 Criar Administrador
Endpoint:
POST /admin
Descrição: Cria um administrador para um restaurante. Pode ser um SUPER_ADMIN ou um ADMIN_RESTAURANTE.

Corpo da requisição (JSON):
{
  "email": "admin@restaurante.com",
  "senha": "senhaSegura",
  "role": "ADMIN_RESTAURANTE",
  "restauranteId": 1
}
Resposta:
{
  "id": 1,
  "email": "admin@restaurante.com",
  "role": "ADMIN_RESTAURANTE",
  "restauranteId": 1,
  "criadoEm": "2024-12-18T00:00:00Z"
}
3.2 Listar Administradores
Endpoint:
GET /admin
Descrição: Lista todos os administradores registrados.

Resposta:
  {
    "id": 1,
    "email": "admin@restaurante.com",
    "role": "ADMIN_RESTAURANTE",
    "restauranteId": 1,
    "criadoEm": "2024-12-18T00:00:00Z"
  }

4. Pedidos
4.1 Criar Pedido
Endpoint:
POST /pedidos
Descrição: Cria um novo pedido.

Corpo da requisição (JSON):
{
  "clienteId": 1,
  "restauranteId": 1
}
Resposta:
{
  "id": 1,
  "clienteId": 1,
  "restauranteId": 1,
  "status": "PENDENTE",
  "criadoEm": "2024-12-18T00:00:00Z"
}
4.2 Listar Pedidos
Endpoint:
GET /pedidos
Descrição: Lista todos os pedidos feitos pelos clientes.

Resposta:
  {
    "id": 1,
    "clienteId": 1,
    "restauranteId": 1,
    "status": "PENDENTE",
    "criadoEm": "2024-12-18T00:00:00Z"
  }

5. Cardápios
5.1 Criar Cardápio
Endpoint:
POST /cardapios
Descrição: Cria um novo item no cardápio de um restaurante.

Corpo da requisição (JSON):
{
  "restauranteId": 1,
  "nomeProduto": "Hambúrguer",
  "preco": 25.50,
  "disponivel": true
}
Resposta:
{
  "id": 1,
  "restauranteId": 1,
  "nomeProduto": "Hambúrguer",
  "preco": 25.50,
  "disponivel": true
}
5.2 Listar Cardápios
Endpoint:
GET /cardapios
Descrição: Lista todos os itens do cardápio de todos os restaurantes.

Resposta:
  {
    "id": 1,
    "restauranteId": 1,
    "nomeProduto": "Hambúrguer",
    "preco": 25.50,
    "disponivel": true
  }

6. Autenticação e Autorização
6.1 Login de Administrador
Endpoint:
POST /login
Descrição: Realiza o login de um administrador (seja SUPER_ADMIN ou ADMIN_RESTAURANTE).

Corpo da requisição (JSON):
{
  "email": "admin@restaurante.com",
  "senha": "senhaSegura"
}
Resposta (exemplo):
{
  "token": "jwt_token_aqui"
}
6.2 Login de Cliente
Endpoint:
POST /cliente/login
Descrição: Realiza o login de um cliente.

Corpo da requisição (JSON):
{
  "cpf": "12345678901",
  "senha": "senhaCliente"
}
Resposta (exemplo):
{
  "token": "jwt_token_cliente_aqui"
}
7. Configurações de Role e Grupo
7.1 Alterar Grupo do Cliente
Endpoint:
PUT /clientes/{clienteId}/grupo
Descrição: Altera o grupo do cliente (BRONZE, PRATA, OURO).

Corpo da requisição (JSON)
{
  "grupo": "OURO"
}
Resposta:
{
  "id": 1,
  "cpf": "12345678901",
  "nome": "João Silva",
  "dataNascimento": "1990-01-01T00:00:00Z",
  "grupo": "OURO",
  "criadoEm": "2024-12-18T00:00:00Z"
}

