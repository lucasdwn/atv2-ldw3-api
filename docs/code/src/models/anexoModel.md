---
title: anexoModel
description: 'Modelo Mongoose para gerenciar anexos no sistema.'
---

# anexoModel

O arquivo `anexoModel.ts` define o modelo Mongoose para a coleção de anexos no banco de dados. Este modelo é utilizado para estruturar e validar os dados dos anexos que serão armazenados.

## Estrutura do Modelo

O modelo `anexoSchema` é definido com os seguintes campos:

- **usuarioId**: `String` (obrigatório) - Identificador do usuário que está associando o anexo.
- **tarefaId**: `String` (opcional) - Identificador da tarefa à qual o anexo está vinculado.
- **originalFilename**: `String` (obrigatório) - Nome original do arquivo anexado.
- **url**: `String` (obrigatório) - URL onde o anexo está armazenado.
- **criadoEm**: `Date` (padrão: data atual) - Data em que o anexo foi criado.

## Métodos

### toJSON

O método `toJSON` é sobrescrito para personalizar a representação do objeto ao ser convertido em JSON. Ele remove os campos `_id` e `__v`, e adiciona um campo `id` que contém o valor de `_id`.

## Exportação

O modelo é exportado como `Anexo`, utilizando o esquema definido, e está associado à coleção `Anexos` no banco de dados.