---
title: tipoListaModel
description: 'Modelo Mongoose para o tipo de lista, incluindo esquema e métodos de manipulação.'
---

# tipoListaModel

O arquivo `tipoListaModel.ts` define o modelo Mongoose para o tipo de lista, que é utilizado para armazenar informações sobre listas em um banco de dados MongoDB. Este modelo inclui um esquema que define a estrutura dos dados e métodos para manipulação dos mesmos.

## Estrutura do Esquema

O esquema `tipoListaSchema` é definido com os seguintes campos:

- **usuarioId**: `String` (obrigatório) - Identificador do usuário que possui a lista.
- **nome**: `String` (obrigatório) - Nome da lista.
- **criadoEm**: `Date` (opcional) - Data de criação da lista, com valor padrão sendo a data atual.
- **atualizadoEm**: `Date` (opcional) - Data da última atualização da lista.
- **personalizacao**: `PersonalizacaoSchema` (opcional) - Esquema que contém informações de personalização da lista.

## Métodos

O modelo inclui um método `toJSON` que é utilizado para formatar a saída do objeto quando ele é convertido para JSON. Este método remove os campos `_id` e `__v`, e adiciona um campo `id` que contém o valor de `_id`.

## Exportação

O modelo é exportado como `TipoLista`, que pode ser utilizado em outras partes da aplicação para interagir com a coleção `TiposLista` no banco de dados.

```typescript
export default model<ITipoListaModal>('TipoLista', tipoListaSchema, 'TiposLista');
```