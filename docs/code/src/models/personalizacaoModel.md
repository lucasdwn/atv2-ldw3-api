---
title: personalizacaoModel
description: 'Modelo de dados para personalização, utilizando Mongoose para definição de esquema e métodos.'
---

# personalizacaoModel

O arquivo `personalizacaoModel.ts` define o modelo de dados para a entidade "Personalização" utilizando o Mongoose, uma biblioteca do Node.js que facilita a interação com o MongoDB.

## Estrutura do Schema

O `PersonalizacaoSchema` é um esquema que define a estrutura dos documentos da coleção "Personalizacao". Ele contém os seguintes campos:

- **icone**: `String` (obrigatório) - Representa o ícone associado à personalização.
- **cor**: `String` (obrigatório) - Representa a cor associada à personalização.
- **criadoEm**: `Date` (opcional) - Data de criação do documento, com valor padrão sendo a data atual.
- **atualizadoEm**: `Date` (opcional) - Data da última atualização do documento.

## Método toJSON

O esquema também define um método `toJSON`, que é utilizado para personalizar a representação do documento quando ele é convertido para JSON. Este método remove os campos `_id` e `__v`, e adiciona um campo `id` que contém o valor de `_id`.

## Exportação do Modelo

O modelo pode ser exportado (embora a linha de exportação esteja comentada no código):

```typescript
export const PersonalizacaoModel = mongoose.model<IPersonalizacaoModal>('Personalizacao', PersonalizacaoSchema, 'Personalizacao');
```

Isso permite que o modelo seja utilizado em outras partes da aplicação para realizar operações de CRUD (Create, Read, Update, Delete) na coleção "Personalizacao".