---
title: tarefaRoutes
description: 'Rotas para gerenciamento de tarefas no sistema.'
---

# tarefaRoutes

Este arquivo define as rotas para o gerenciamento de tarefas na aplicação. Utiliza o framework Express para criar um conjunto de endpoints que permitem a criação, leitura, atualização e exclusão de tarefas.

## Rotas

### POST `/`
Cria uma nova tarefa.

- **Controller**: `tarefaController.createTarefa`

### GET `/getTarefas`
Busca todas as tarefas.

- **Controller**: `tarefaController.buscarTarefas`

### GET `/getTarefa/:tarefaId`
Busca uma tarefa específica pelo ID.

- **Parâmetros**:
  - `tarefaId`: ID da tarefa a ser buscada.
- **Controller**: `tarefaController.buscarTarefa`

### PUT `/update/:tarefaId`
Atualiza uma tarefa existente pelo ID.

- **Parâmetros**:
  - `tarefaId`: ID da tarefa a ser atualizada.
- **Controller**: `tarefaController.updateTarefa`

### PUT `/updateOrdenacao/`
Atualiza a ordenação das tarefas.

- **Controller**: `tarefaController.atualizarOrdenacao`

### PUT `/updateRealizadoEm/`
Atualiza a data de conclusão de uma tarefa.

- **Controller**: `tarefaController.atualizarRealizadoEm`

### DELETE `/delete/:tarefaId`
Remove uma tarefa pelo ID.

- **Parâmetros**:
  - `tarefaId`: ID da tarefa a ser deletada.
- **Controller**: `tarefaController.deleteTarefa`

## Dependências
- `express`: Framework utilizado para a criação das rotas.
- `tarefaController`: Controlador que contém a lógica de negócios para as operações de tarefas.