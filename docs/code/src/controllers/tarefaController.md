---
title: tarefaController
description: 'Controlador responsável pela manipulação das tarefas, incluindo criação, atualização, busca e deleção.'
---

# tarefaController

O `tarefaController` é responsável por gerenciar as operações relacionadas às tarefas em um sistema de gerenciamento de tarefas. Ele fornece métodos para criar, atualizar, buscar e deletar tarefas, além de gerenciar permissões de usuários em relação às listas de tarefas.

## Métodos

### createTarefa

Cria uma nova tarefa.

**Parâmetros:**
- `req`: Objeto de requisição que contém os dados da tarefa a ser criada.
- `res`: Objeto de resposta para enviar a resposta ao cliente.

**Retorno:**
- Retorna um status 201 e a tarefa criada em caso de sucesso.
- Retorna um status de erro apropriado em caso de falha.

### updateTarefa

Atualiza uma tarefa existente.

**Parâmetros:**
- `req`: Objeto de requisição que contém os dados da tarefa a ser atualizada.
- `res`: Objeto de resposta para enviar a resposta ao cliente.

**Retorno:**
- Retorna um status 201 e a tarefa atualizada em caso de sucesso.
- Retorna um status de erro apropriado em caso de falha.

### buscarTarefas

Busca todas as tarefas de uma lista específica.

**Parâmetros:**
- `req`: Objeto de requisição que contém os parâmetros de busca.
- `res`: Objeto de resposta para enviar a resposta ao cliente.

**Retorno:**
- Retorna um status 200 e a lista de tarefas em caso de sucesso.
- Retorna um status de erro apropriado em caso de falha.

### buscarTarefa

Busca uma tarefa específica.

**Parâmetros:**
- `req`: Objeto de requisição que contém o ID da tarefa a ser buscada.
- `res`: Objeto de resposta para enviar a resposta ao cliente.

**Retorno:**
- Retorna um status 200 e a tarefa encontrada em caso de sucesso.
- Retorna um status de erro apropriado em caso de falha.

### deleteTarefa

Deleta uma tarefa específica.

**Parâmetros:**
- `req`: Objeto de requisição que contém o ID da tarefa a ser deletada.
- `res`: Objeto de resposta para enviar a resposta ao cliente.

**Retorno:**
- Retorna um status 200 em caso de sucesso.
- Retorna um status de erro apropriado em caso de falha.

### atualizarOrdenacao

Atualiza a ordenação das tarefas.

**Parâmetros:**
- `req`: Objeto de requisição que contém as novas ordens das tarefas.
- `res`: Objeto de resposta para enviar a resposta ao cliente.

**Retorno:**
- Retorna um status 200 em caso de sucesso.
- Retorna um status de erro apropriado em caso de falha.

### atualizarRealizadoEm

Atualiza a data de conclusão de uma tarefa.

**Parâmetros:**
- `req`: Objeto de requisição que contém a data de conclusão a ser atualizada.
- `res`: Objeto de resposta para enviar a resposta ao cliente.

**Retorno:**
- Retorna um status 200 em caso de sucesso.
- Retorna um status de erro apropriado em caso de falha.

## Considerações

- Todos os métodos implementam tratamento de erros e verificações de permissão para garantir que apenas usuários autorizados possam realizar operações em tarefas e listas.
- O controlador utiliza modelos do Mongoose para interagir com o banco de dados MongoDB.