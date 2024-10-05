---
title: authController
description: 'Controlador de autenticação que gerencia login e refresh de tokens.'
---

# AuthController

O `AuthController` é responsável por gerenciar a autenticação de usuários, incluindo o login e a atualização de tokens JWT. Ele utiliza a biblioteca `jsonwebtoken` para gerar e verificar tokens.

## Funções

### `generateToken(userId: Types.ObjectId, email: string)`

Gera um token JWT para um usuário.

- **Parâmetros:**
  - `userId`: ID do usuário (tipo `ObjectId`).
  - `email`: Email do usuário (tipo `string`).

- **Retorno:** Um token JWT como `string`.

### `generateRefreshToken(userId: Types.ObjectId, email: string)`

Gera um token de refresh JWT para um usuário.

- **Parâmetros:**
  - `userId`: ID do usuário (tipo `ObjectId`).
  - `email`: Email do usuário (tipo `string`).

- **Retorno:** Um token de refresh JWT como `string`.

### `login(req: Request, res: Response): Promise<Response>`

Realiza o login do usuário.

- **Parâmetros:**
  - `req`: Objeto de requisição do Express.
  - `res`: Objeto de resposta do Express.

- **Retorno:** Retorna uma resposta JSON com os detalhes do usuário e os tokens gerados ou um erro.

- **Erros Comuns:**
  - 400: E-mail ou senha não fornecidos.
  - 401: Usuário não encontrado ou credenciais inválidas.
  - 500: Erro interno ao realizar login.

### `refresh(req: Request, res: Response): Promise<Response>`

Atualiza o token JWT utilizando um refresh token.

- **Parâmetros:**
  - `req`: Objeto de requisição do Express.
  - `res`: Objeto de resposta do Express.

- **Retorno:** Retorna um novo token e refresh token ou um erro.

- **Erros Comuns:**
  - 401: Refresh token não fornecido.
  - 403: Refresh token inválido ou expirado.

## Variáveis de Ambiente

- `JWT_SECRET`: Chave secreta para assinatura do token JWT.
- `JWT_SECRET_REFRESH`: Chave secreta para assinatura do refresh token.
- `JWT_EXPIRES_IN`: Tempo de expiração do token JWT (padrão: 5 horas).
- `REFRESH_EXPIRES_IN`: Tempo de expiração do refresh token (padrão: 1 dia).