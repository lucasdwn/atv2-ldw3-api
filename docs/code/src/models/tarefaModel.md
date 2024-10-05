---
title: tarefaModel
description: 'Modelo de dados para tarefas, incluindo sub-tarefas e anexos, utilizando Mongoose.'
---

# tarefaModel

O arquivo `tarefaModel.ts` define o modelo de dados para tarefas em um sistema, utilizando a biblioteca Mongoose para interagir com um banco de dados MongoDB. Este modelo inclui a definição de sub-tarefas e anexos, além de métodos para manipulação de dados.

## Estruturas de Dados

### SubTarefaSchema

O `SubTarefaSchema` é um esquema que representa uma sub-tarefa dentro de uma tarefa. Ele contém os seguintes campos:

- **titulo**: `String` (obrigatório) - O título da sub-tarefa.
- **descricao**: `String` (opcional) - Uma descrição da sub-tarefa.
- **ordenacao**: `Number` (opcional) - A ordenação da sub-tarefa.
- **criadoEm**: `Date` (padrão: data atual) - A data em que a sub-tarefa foi criada.
- **isFinalizada**: `Boolean` (padrão: `false`) - Indica se a sub-tarefa foi finalizada.

O método `toJSON` é sobrescrito para remover os campos `_id` e `__v`, e adicionar um campo `id` que representa o identificador da sub-tarefa.

### TarefaSchema

O `TarefaSchema` é um esquema que representa uma tarefa. Ele contém os seguintes campos:

- **listaId**: `String` (obrigatório) - O identificador da lista à qual a tarefa pertence.
- **titulo**: `String` (obrigatório) - O título da tarefa.
- **descricao**: `String` (opcional) - Uma descrição da tarefa.
- **ordenacao**: `Number` (opcional) - A ordenação da tarefa.
- **prioridadeId**: `String` (obrigatório) - O identificador da prioridade da tarefa.
- **status**: `String` (obrigatório) - O status da tarefa, que deve ser um dos valores definidos no `StatusEnum`.
- **subTarefas**: `Array` de `SubTarefaSchema` - Uma lista de sub-tarefas associadas à tarefa.
- **anexos**: `Array` de `anexoSchema` - Uma lista de anexos associados à tarefa.
- **dataDeVencimento**: `Date` (obrigatório) - A data de vencimento da tarefa.
- **realizadoEm**: `Date` (opcional) - A data em que a tarefa foi concluída.
- **criadoEm**: `Date` (padrão: data atual) - A data em que a tarefa foi criada.
- **atualizadoEm**: `Date` (opcional) - A data em que a tarefa foi atualizada.

Assim como no `SubTarefaSchema`, o método `toJSON` é sobrescrito para formatar a saída JSON da tarefa.

## Exportação

O modelo `Tarefa` é exportado como um modelo Mongoose, permitindo que ele seja utilizado em outras partes da aplicação para criar, ler, atualizar e deletar tarefas no banco de dados.