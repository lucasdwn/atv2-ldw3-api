
---
title: tipoListaController
description: 'Controlador para gerenciar tipos de lista, incluindo criação, atualização, listagem e exclusão.'
---

# tipoListaController

O `tipoListaController` é responsável por gerenciar as operações relacionadas aos tipos de lista em uma aplicação Express. Ele fornece métodos para criar, listar, atualizar e deletar tipos de lista, garantindo que as operações sejam realizadas de forma segura e eficiente.

## Métodos

### createLista

Cria um novo tipo de lista.

**Parâmetros:**
- `req.body`: 
  - `userId`: ID do usuário que está criando o tipo de lista.
  - `nome`: Nome do tipo de lista (obrigatório).
  - `personalizacao`: Personalização do tipo de lista (opcional).

**Resposta:**
- `201 Created`: Retorna o tipo de lista criado.
- `400 Bad Request`: Se o nome não for fornecido.
- `404 Not Found`: Se o usuário não for encontrado.
- `500 Internal Server Error`: Se ocorrer um erro durante a criação.

### listAllTiposLista

Lista todos os tipos de lista de um usuário.

**Parâmetros:**
- `req.body`: 
  - `userId`: ID do usuário.
- `req.query`: 
  - `page`: Número da página (padrão é 1).
  - `limit`: Limite de resultados por página (padrão é 10).
  - `search`: Termo de busca para filtrar tipos de lista.

**Resposta:**
- `200 OK`: Retorna uma lista de tipos de lista.
- `404 Not Found`: Se o usuário não for encontrado.
- `500 Internal Server Error`: Se ocorrer um erro durante a listagem.

### listTipoListas

Lista tipos de lista com base em critérios de busca e limite.

**Parâmetros:**
- `req.body`: 
  - `userId`: ID do usuário.
- `req.query`: 
  - `search`: Termo de busca (opcional).
  - `limit`: Limite de resultados (padrão é 10).
  - `listaId`: ID da lista para filtrar tipos de lista.

**Resposta:**
- `200 OK`: Retorna uma lista de tipos de lista.
- `404 Not Found`: Se o usuário não for encontrado.
- `500 Internal Server Error`: Se ocorrer um erro durante a listagem.

### updateTipoLista

Atualiza um tipo de lista existente.

**Parâmetros:**
- `req.params`: 
  - `tipoListaId`: ID do tipo de lista a ser atualizado.
- `req.body`: 
  - `userId`: ID do usuário.
  - `nome`: Novo nome do tipo de lista (opcional).
  - `personalizacao`: Nova personalização do tipo de lista (opcional).

**Resposta:**
- `201 Created`: Retorna o tipo de lista atualizado.
- `404 Not Found`: Se o tipo de lista ou usuário não for encontrado, ou se o tipo de lista não pertencer ao usuário.
- `500 Internal Server Error`: Se ocorrer um erro durante a atualização.

### deleteTipoLista

Deleta um tipo de lista existente.

**Parâmetros:**
- `req.params`: 
  - `tipoListaId`: ID do tipo de lista a ser deletado.
- `req.body`: 
  - `userId`: ID do usuário.

**Resposta:**
- `200 OK`: Retorna uma mensagem de sucesso.
- `404 Not Found`: Se o tipo de lista ou usuário não for encontrado, ou se o tipo de lista não pertencer ao usuário, ou se houver listas associadas ao tipo de lista.
- `500 Internal Server Error`: Se ocorrer um erro durante a exclusão.

### findOneTipoLista

Busca um tipo de lista específico.

**Parâmetros:**
- `req.params`: 
  - `tipoListaId`: ID do tipo de lista a ser buscado.
- `req.body`: 
  - `userId`: ID do usuário.

**Resposta:**
- `200 OK`: Retorna o tipo de lista encontrado.
- `404 Not Found`: Se o tipo de lista ou usuário não for encontrado.
- `500 Internal Server Error`: Se ocorrer um erro durante a busca.
