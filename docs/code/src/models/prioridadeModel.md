---
title: prioridadeModel
description: 'Modelo Mongoose para gerenciar prioridades no sistema.'
---

# prioridadeModel

O arquivo `prioridadeModel.ts` define um modelo Mongoose para a coleção de prioridades no banco de dados. Este modelo é utilizado para criar, ler, atualizar e excluir documentos relacionados a prioridades.

## Estrutura do Modelo

O modelo `Prioridade` é baseado no esquema `prioridadeSchema`, que contém os seguintes campos:

- **usuarioId**: `String` (obrigatório) - Identificador do usuário associado à prioridade.
- **nome**: `String` (obrigatório) - Nome da prioridade.
- **criadoEm**: `Date` (opcional) - Data de criação da prioridade. O valor padrão é a data atual.
- **atualizadoEm**: `Date` (opcional) - Data da última atualização da prioridade.
- **personalizacao**: `PersonalizacaoSchema` (opcional) - Esquema que define personalizações associadas à prioridade.

## Métodos

### toJSON

O método `toJSON` é sobrescrito para personalizar a representação do documento quando convertido para JSON. Ele remove os campos `_id` e `__v`, e adiciona um campo `id` que contém o valor de `_id`.

## Exportação

O modelo é exportado como uma instância do modelo Mongoose, permitindo que seja utilizado em outras partes da aplicação:

```typescript
export default model<IPrioridadeModal>('Prioridade', prioridadeSchema, 'Prioridades');
``` 

Este modelo é essencial para a manipulação de dados de prioridades, garantindo que as operações no banco de dados sejam realizadas de forma consistente e estruturada.