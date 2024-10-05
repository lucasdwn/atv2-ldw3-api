---
title: usuarioModel
description: 'Modelo de dados para o usuário, incluindo validações e métodos de transformação.'
---

# usuarioModel

O arquivo `usuarioModel.ts` define o modelo de dados para o usuário utilizando o Mongoose, uma biblioteca do Node.js para modelagem de dados MongoDB. Este modelo inclui validações para os campos e métodos para transformar a saída JSON.

## Estrutura do Modelo

### `usuarioSchema`

O `usuarioSchema` é um esquema que define a estrutura dos documentos de usuário na coleção "Usuarios". Os campos definidos são:

- **nome**: String, obrigatório.
- **profileImage**: String, opcional.
- **email**: String, obrigatório e único. Validação de formato de e-mail é aplicada.
- **senha**: String, obrigatório e não selecionável por padrão.
- **criadoEm**: Date, padrão é a data atual.
- **atualizadoEm**: Date, opcional.

#### Validação de E-mail

O campo `email` possui uma validação que utiliza uma expressão regular para garantir que o formato do e-mail seja válido. Caso contrário, uma mensagem de erro personalizada é retornada.

### Método `toJSON`

O método `toJSON` é sobrescrito para personalizar a saída JSON do documento. Ele remove os campos `_id` e `__v`, e adiciona um campo `id` que contém o valor de `_id`.

### `UsuarioPermitidoSchema`

O `UsuarioPermitidoSchema` define um esquema para usuários permitidos, com os seguintes campos:

- **usuarioId**: String, obrigatório.
- **email**: String, obrigatório.
- **podeEditar**: Boolean, obrigatório.
- **criadoEm**: Date, padrão é a data atual.
- **atualizadoEm**: Date, opcional.

#### Método `toJSON`

Assim como no `usuarioSchema`, o método `toJSON` é sobrescrito para o `UsuarioPermitidoSchema`, removendo os campos `_id` e `__v` e adicionando o campo `id`.

## Exportação

O modelo `Usuario` é exportado como uma instância do modelo Mongoose, permitindo a interação com a coleção "Usuarios" no banco de dados.