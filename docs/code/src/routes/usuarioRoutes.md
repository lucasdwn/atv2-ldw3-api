---
title: usuarioRoutes
description: 'Rotas para gerenciamento de usuários, incluindo criação, atualização, deleção e listagem.'
---

# usuarioRoutes

Este módulo define as rotas relacionadas ao gerenciamento de usuários na aplicação. Utiliza o framework Express para a criação de rotas e inclui middleware para autenticação e upload de arquivos.

## Rotas

### POST `/`
- **Descrição**: Cria um novo usuário.
- **Controlador**: `usuarioController.createUsuario`

### PUT `/update`
- **Descrição**: Atualiza as informações de um usuário existente.
- **Middleware**: `authMiddleware` (verifica se o usuário está autenticado)
- **Middleware**: `preserveBody('image')` (preserva o corpo da requisição para upload de imagem)
- **Controlador**: `usuarioController.updateUsuario`

### DELETE `/delete`
- **Descrição**: Deleta um usuário existente.
- **Middleware**: `authMiddleware`
- **Controlador**: `usuarioController.deleteUsuario`

### GET `/list`
- **Descrição**: Lista todos os usuários.
- **Middleware**: `authMiddleware`
- **Controlador**: `usuarioController.listUsuarios`

### GET `/currentUser`
- **Descrição**: Obtém as informações do usuário atualmente autenticado.
- **Middleware**: `authMiddleware`
- **Controlador**: `usuarioController.getUsuarioAtual`

### GET `/profile/:userId`
- **Descrição**: Obtém o perfil de um usuário específico pelo ID.
- **Middleware**: `authMiddleware`
- **Controlador**: `usuarioController.getUsuarioById`

## Exportação

As rotas são exportadas como um módulo padrão para serem utilizadas na configuração do servidor Express.