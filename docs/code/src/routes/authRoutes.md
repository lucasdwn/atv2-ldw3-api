---
title: authRoutes
description: 'Definição das rotas de autenticação para o serviço.'
---

# authRoutes

O arquivo `authRoutes.ts` contém a definição das rotas relacionadas à autenticação no aplicativo. Utiliza o framework Express para gerenciar as requisições HTTP.

## Estrutura das Rotas

As seguintes rotas estão definidas:

- **POST /login**: 
  - **Descrição**: Rota para realizar o login do usuário.
  - **Controlador**: `authController.login`

- **GET /validate-token**: 
  - **Descrição**: Rota para validar o token de autenticação.
  - **Middleware**: `authMiddleware` é aplicado para verificar a autenticidade do token.
  - **Resposta**: Retorna um status 200 se o token for válido.

- **POST /refresh-token**: 
  - **Descrição**: Rota para atualizar o token de autenticação.
  - **Controlador**: `authController.refresh`

## Importações

O arquivo importa os seguintes módulos:

- `Router` do Express para criar as rotas.
- `authController` que contém a lógica de autenticação.
- `authMiddleware` que é responsável pela verificação do token.

## Exportação

As rotas são exportadas como um módulo padrão para serem utilizadas em outras partes da aplicação.