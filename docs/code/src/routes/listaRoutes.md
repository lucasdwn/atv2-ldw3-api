---
title: listaRoutes
description: 'Definição das rotas para gerenciamento de listas no sistema.'
---

# listaRoutes

Este arquivo contém a definição das rotas relacionadas ao gerenciamento de listas no sistema. Utiliza o framework Express para criar as rotas e vincular as requisições aos métodos correspondentes do `listaController`.

## Rotas Definidas

- **POST /**: Cria uma nova lista.
  - Método: `listaController.createLista`

- **PUT /update/:listaId**: Atualiza uma lista existente com base no ID fornecido.
  - Método: `listaController.updateLista`

- **DELETE /delete/:listaId**: Remove uma lista existente com base no ID fornecido.
  - Método: `listaController.deleteLista`

- **GET /get/:listaId**: Recupera uma lista específica com base no ID fornecido.
  - Método: `listaController.buscarLista`

- **GET /getListsUser**: Recupera todas as listas pertencentes ao usuário autenticado.
  - Método: `listaController.buscarListasUser`

- **GET /getListsSharedWithMe**: Recupera todas as listas que foram compartilhadas com o usuário autenticado.
  - Método: `listaController.buscarListasCompartilhadasComUser`

## Importações

O arquivo importa o `Router` do Express e o `listaController` que contém a lógica de negócios para manipulação das listas. 

```javascript
import { Router } from 'express';
import listaController from '../controllers/listaController';
```

## Exportação

As rotas são exportadas como um módulo padrão para serem utilizadas em outras partes da aplicação.

```javascript
export default routes;
```