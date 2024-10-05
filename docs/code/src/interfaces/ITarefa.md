---
title: ITarefa
description: 'Interface que define a estrutura de uma tarefa e suas subtarefas no sistema.'
---

# ITarefa

A interface `ITarefa` define a estrutura de uma tarefa dentro do sistema, incluindo suas propriedades e relacionamentos com subtarefas e anexos.

## Propriedades

- **listaId**: `string`  
  Identificador da lista à qual a tarefa pertence.

- **titulo**: `string`  
  Título da tarefa.

- **descricao**: `string`  
  Descrição detalhada da tarefa.

- **ordenacao**: `number`  
  Valor que determina a ordem da tarefa dentro da lista.

- **prioridadeId**: `string`  
  Identificador da prioridade associada à tarefa.

- **status**: `StatusEnum`  
  Status atual da tarefa, representado por um enum.

- **subTarefas**: `ISubTarefa[]`  
  Lista de subtarefas associadas à tarefa.

- **anexos**: `IAnexo[]`  
  Lista de anexos relacionados à tarefa.

- **dataDeVencimento**: `Date`  
  Data em que a tarefa deve ser concluída.

- **realizadoEm**: `Date`  
  Data em que a tarefa foi concluída.

- **criadoEm**: `Date`  
  Data em que a tarefa foi criada.

- **atualizadoEm**: `Date` (opcional)  
  Data da última atualização da tarefa.

## Subtarefa

A interface `ISubTarefa` define a estrutura de uma subtarefa, que é uma parte de uma tarefa maior.

### Propriedades

- **titulo**: `string`  
  Título da subtarefa.

- **descricao**: `string`  
  Descrição detalhada da subtarefa.

- **ordenacao**: `number`  
  Valor que determina a ordem da subtarefa.

- **criadoEm**: `Date`  
  Data em que a subtarefa foi criada.

- **isFinalizada**: `boolean`  
  Indica se a subtarefa foi concluída.

## Modelos

As interfaces `ITarefaModal` e `ISubTarefaModal` estendem a interface `Document` do Mongoose, permitindo que as tarefas e subtarefas sejam utilizadas como modelos no banco de dados.

- **ITarefaModal**: Extensão de `Document` e `ITarefa`.
- **ISubTarefaModal**: Extensão de `Document` e `ISubTarefa`.