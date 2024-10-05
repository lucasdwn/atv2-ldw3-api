
---
title: usuarioController
description: 'Controlador responsável pela gestão de usuários, incluindo criação, atualização, deleção e listagem.'
---

# UsuarioController

O `UsuarioController` é responsável por gerenciar as operações relacionadas aos usuários no sistema. Ele fornece métodos para criar, atualizar, deletar e listar usuários, além de buscar informações específicas de um usuário.

## Métodos

### createUsuario

Cria um novo usuário.

#### Parâmetros

- `req`: Objeto de requisição que contém os dados do usuário a ser criado.
- `res`: Objeto de resposta que será enviado ao cliente.

#### Respostas

- **201**: Usuário criado com sucesso.
- **400**: Erro de validação (nome, email ou senha ausentes ou inválidos).
- **500**: Erro interno do servidor.

### updateUsuario

Atualiza as informações de um usuário existente.

#### Parâmetros

- `req`: Objeto de requisição que contém os dados do usuário a ser atualizado.
- `res`: Objeto de resposta que será enviado ao cliente.

#### Respostas

- **200**: Usuário atualizado com sucesso.
- **404**: Usuário não encontrado.
- **400**: Erro de validação (email já em uso ou senha inválida).
- **500**: Erro interno do servidor.

### deleteUsuario

Deleta um usuário existente.

#### Parâmetros

- `req`: Objeto de requisição que contém o ID do usuário a ser deletado.
- `res`: Objeto de resposta que será enviado ao cliente.

#### Respostas

- **200**: Usuário removido com sucesso.
- **404**: Usuário não encontrado.
- **500**: Erro interno do servidor.

### listUsuarios

Lista todos os usuários cadastrados.

#### Parâmetros

- `req`: Objeto de requisição.
- `res`: Objeto de resposta que será enviado ao cliente.

#### Respostas

- **200**: Lista de usuários.
- **500**: Erro interno do servidor.

### getUsuarioById

Busca um usuário pelo seu ID.

#### Parâmetros

- `req`: Objeto de requisição que contém o ID do usuário.
- `res`: Objeto de resposta que será enviado ao cliente.

#### Respostas

- **200**: Usuário encontrado.
- **404**: Usuário não encontrado.
- **500**: Erro interno do servidor.

### getUsuarioAtual

Busca as informações do usuário atual.

#### Parâmetros

- `req`: Objeto de requisição que contém o ID do usuário.
- `res`: Objeto de resposta que será enviado ao cliente.

#### Respostas

- **200**: Informações do usuário atual.
- **404**: Usuário não encontrado.
- **500**: Erro interno do servidor.
