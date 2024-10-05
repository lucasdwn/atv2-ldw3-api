---
title: tipoListaRoutes
description: 'Rotas para gerenciamento de tipos de lista no sistema.'
---

# tipoListaRoutes

O arquivo `tipoListaRoutes.ts` define as rotas relacionadas ao gerenciamento de tipos de lista na aplicação. Utiliza o framework Express para criar um conjunto de endpoints que interagem com o `tipoListaController`.

## Rotas Definidas

- `POST /`: Cria um novo tipo de lista.
- `GET /list`: Retorna uma lista de tipos de lista.
- `GET /listAll`: Retorna todos os tipos de lista disponíveis.
- `GET /findOne/:tipoListaId`: Retorna um tipo de lista específico com base no ID fornecido.
- `PUT /update/:tipoListaId`: Atualiza um tipo de lista existente com base no ID fornecido.
- `DELETE /delete/:tipoListaId`: Remove um tipo de lista com base no ID fornecido.

## Importações

O arquivo importa o `Router` do Express e o `tipoListaController`, que contém a lógica de controle para cada uma das rotas definidas.

```javascript
import { Router } from 'express';
import tipoListaController from '../controllers/tipoListaController';
```

## Exportação

As rotas são exportadas como um módulo padrão para serem utilizadas em outras partes da aplicação.

```javascript
export default routes;
```