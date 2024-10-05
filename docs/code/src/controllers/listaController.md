---
title: listaController
description: 'Controlador responsável pela manipulação das listas, incluindo criação, atualização, busca e deleção.'
---

# listaController

O `listaController` é responsável por gerenciar as operações relacionadas às listas no sistema. Ele permite a criação, atualização, busca e deleção de listas, além de gerenciar permissões de usuários para acessar e editar essas listas.

## Métodos

### createLista

Cria uma nova lista.

**Parâmetros:**
- `req.body`: 
  - `userId`: ID do usuário que está criando a lista.
  - `nome`: Nome da lista.
  - `personalizacao`: Personalização da lista (opcional).
  - `usuariosPermitidos`: Lista de usuários permitidos (opcional).
  - `tipoListaId`: ID do tipo de lista.

**Resposta:**
- `201 Created`: Retorna a lista criada.
- `400 Bad Request`: Erros de validação, como nome ou tipo de lista ausentes.
- `404 Not Found`: Usuário não encontrado.
- `500 Internal Server Error`: Erro ao criar a lista.

### buscarListasUser

Busca as listas pertencentes a um usuário específico.

**Parâmetros:**
- `req.body`: 
  - `userId`: ID do usuário.
- `req.query`: 
  - `page`: Número da página (padrão: 1).
  - `limit`: Limite de listas por página (padrão: 10).
  - `search`: Termo de busca pelo nome da lista (opcional).
  - `tipoListaId`: ID do tipo de lista (opcional).

**Resposta:**
- `200 OK`: Retorna as listas do usuário.
- `404 Not Found`: Usuário não encontrado.
- `500 Internal Server Error`: Erro ao buscar listas.

### buscarListasCompartilhadasComUser

Busca as listas que foram compartilhadas com um usuário específico.

**Parâmetros:**
- `req.body`: 
  - `userId`: ID do usuário.
- `req.query`: 
  - `page`: Número da página (padrão: 1).
  - `limit`: Limite de listas por página (padrão: 10).

**Resposta:**
- `200 OK`: Retorna as listas compartilhadas.
- `404 Not Found`: Usuário não encontrado.
- `500 Internal Server Error`: Erro ao buscar listas compartilhadas.

### updateLista

Atualiza uma lista existente.

**Parâmetros:**
- `req.params`: 
  - `listaId`: ID da lista a ser atualizada.
- `req.body`: 
  - `userId`: ID do usuário que está atualizando a lista.
  - `nome`: Novo nome da lista (opcional).
  - `personalizacao`: Nova personalização da lista (opcional).
  - `usuariosPermitidos`: Novos usuários permitidos (opcional).
  - `tipoListaId`: Novo ID do tipo de lista (opcional).

**Resposta:**
- `201 Created`: Retorna a lista atualizada.
- `404 Not Found`: Lista ou usuário não encontrado, ou usuário sem permissão para editar.
- `400 Bad Request`: Erros de validação.
- `500 Internal Server Error`: Erro ao atualizar a lista.

### deleteLista

Remove uma lista existente.

**Parâmetros:**
- `req.params`: 
  - `listaId`: ID da lista a ser removida.
- `req.body`: 
  - `userId`: ID do usuário que está removendo a lista.

**Resposta:**
- `200 OK`: Retorna mensagem de sucesso.
- `404 Not Found`: Lista ou usuário não encontrado, ou usuário sem permissão para deletar.
- `500 Internal Server Error`: Erro ao remover a lista.

### buscarLista

Busca uma lista específica.

**Parâmetros:**
- `req.body`: 
  - `userId`: ID do usuário.
- `req.params`: 
  - `listaId`: ID da lista a ser buscada.

**Resposta:**
- `200 OK`: Retorna a lista encontrada.
- `404 Not Found`: Lista ou usuário não encontrado, ou usuário sem permissão para visualizar a lista.
- `500 Internal Server Error`: Erro ao buscar a lista.