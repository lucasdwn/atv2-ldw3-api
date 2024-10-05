---
title: prioridadeController
description: 'Controlador para gerenciar as prioridades no sistema, incluindo criação, listagem, atualização e exclusão.'
---

# prioridadeController

O `prioridadeController` é responsável por gerenciar as operações relacionadas às prioridades no sistema. Ele fornece métodos para criar, listar, atualizar e deletar prioridades, garantindo que as operações sejam realizadas de forma segura e eficiente.

## Métodos

### createPrioridade

Cria uma nova prioridade.

**Parâmetros:**
- `req.body`: 
  - `userId`: ID do usuário que está criando a prioridade.
  - `nome`: Nome da prioridade (obrigatório).
  - `personalizacao`: Personalização da prioridade (opcional).

**Respostas:**
- `201 Created`: Retorna a prioridade criada.
- `400 Bad Request`: Retorna erro se o nome não for fornecido.
- `404 Not Found`: Retorna erro se o usuário não for encontrado.
- `500 Internal Server Error`: Retorna erro em caso de falha no servidor.

### listAllPrioridades

Lista todas as prioridades de um usuário.

**Parâmetros:**
- `req.body`: 
  - `userId`: ID do usuário.
- `req.query`: 
  - `page`: Número da página (opcional, padrão é 1).
  - `limit`: Limite de resultados por página (opcional, padrão é 10).
  - `search`: Termo de busca (opcional).

**Respostas:**
- `200 OK`: Retorna a lista de prioridades.
- `404 Not Found`: Retorna erro se o usuário não for encontrado.
- `500 Internal Server Error`: Retorna erro em caso de falha no servidor.

### listPrioridades

Lista prioridades com base em filtros específicos.

**Parâmetros:**
- `req.body`: 
  - `userId`: ID do usuário.
- `req.query`: 
  - `search`: Termo de busca (opcional).
  - `limit`: Limite de resultados (opcional, padrão é 10).
  - `tarefaId`: ID da tarefa associada (opcional).

**Respostas:**
- `200 OK`: Retorna a lista de prioridades filtradas.
- `404 Not Found`: Retorna erro se o usuário não for encontrado.
- `500 Internal Server Error`: Retorna erro em caso de falha no servidor.

### updatePrioridade

Atualiza uma prioridade existente.

**Parâmetros:**
- `req.params`: 
  - `prioridadeId`: ID da prioridade a ser atualizada.
- `req.body`: 
  - `userId`: ID do usuário.
  - `nome`: Novo nome da prioridade (opcional).
  - `personalizacao`: Nova personalização da prioridade (opcional).

**Respostas:**
- `201 Created`: Retorna a prioridade atualizada.
- `404 Not Found`: Retorna erro se a prioridade ou o usuário não forem encontrados, ou se a prioridade não pertence ao usuário.
- `500 Internal Server Error`: Retorna erro em caso de falha no servidor.

### deletePrioridade

Deleta uma prioridade existente.

**Parâmetros:**
- `req.params`: 
  - `prioridadeId`: ID da prioridade a ser deletada.
- `req.body`: 
  - `userId`: ID do usuário.

**Respostas:**
- `200 OK`: Retorna mensagem de sucesso.
- `404 Not Found`: Retorna erro se a prioridade ou o usuário não forem encontrados, ou se a prioridade não pertence ao usuário, ou se houver tarefas associadas à prioridade.
- `500 Internal Server Error`: Retorna erro em caso de falha no servidor.

### findOnePrioridade

Busca uma prioridade específica.

**Parâmetros:**
- `req.params`: 
  - `prioridadeId`: ID da prioridade a ser buscada.
- `req.body`: 
  - `userId`: ID do usuário.

**Respostas:**
- `200 OK`: Retorna a prioridade encontrada.
- `404 Not Found`: Retorna erro se a prioridade ou o usuário não forem encontrados.
- `500 Internal Server Error`: Retorna erro em caso de falha no servidor.