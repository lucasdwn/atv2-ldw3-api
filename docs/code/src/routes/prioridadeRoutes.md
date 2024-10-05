---
title: prioridadeRoutes
description: 'Rotas para gerenciamento de prioridades no sistema.'
---

# prioridadeRoutes

Este módulo define as rotas para o gerenciamento de prioridades no sistema, utilizando o framework Express. As rotas permitem a criação, listagem, atualização e exclusão de prioridades.

## Rotas Definidas

- `POST /`: Cria uma nova prioridade.
- `GET /list`: Lista todas as prioridades.
- `GET /listAll`: Lista todas as prioridades, incluindo as inativas.
- `GET /findOne/:prioridadeId`: Busca uma prioridade específica pelo seu ID.
- `PUT /update/:prioridadeId`: Atualiza uma prioridade existente pelo seu ID.
- `DELETE /delete/:prioridadeId`: Remove uma prioridade pelo seu ID.

## Controller Utilizado

As rotas utilizam o `prioridadeController`, que contém a lógica de negócios para cada operação. As funções correspondentes são:

- `createPrioridade`: Lida com a criação de uma nova prioridade.
- `listPrioridades`: Retorna a lista de prioridades.
- `listAllPrioridades`: Retorna todas as prioridades, incluindo as inativas.
- `findOnePrioridade`: Retorna uma prioridade específica.
- `updatePrioridade`: Atualiza uma prioridade existente.
- `deletePrioridade`: Remove uma prioridade.

## Exemplo de Uso

Para criar uma nova prioridade, você pode enviar uma requisição POST para a rota `/` com os dados da prioridade no corpo da requisição. Para listar todas as prioridades, uma requisição GET para `/list` deve ser realizada.

## Considerações

Certifique-se de que o `prioridadeController` esteja corretamente implementado e que as validações necessárias sejam realizadas para garantir a integridade dos dados.