---
title: tarefasEnum
description: 'Enumera os status e prioridades das tarefas no sistema.'
---

# tarefasEnum

Este arquivo contém duas enumerações que definem os status e as prioridades das tarefas no sistema.

## StatusEnum

A enumeração `StatusEnum` define os possíveis estados de uma tarefa. Os valores disponíveis são:

- `Pendente`: Indica que a tarefa ainda não foi iniciada.
- `Concluida`: Indica que a tarefa foi finalizada.
- `Atrasada`: Indica que a tarefa não foi concluída dentro do prazo estipulado.

### Exemplo de uso

```typescript
const status: StatusEnum = StatusEnum.Pendente;
```

## PrioridadeEnum

A enumeração `PrioridadeEnum` define os níveis de prioridade que podem ser atribuídos a uma tarefa. Os valores disponíveis são:

- `Alta`: Indica que a tarefa deve ser tratada com urgência.
- `Media`: Indica que a tarefa tem uma prioridade moderada.
- `Baixa`: Indica que a tarefa pode ser tratada em um momento posterior.

### Exemplo de uso

```typescript
const prioridade: PrioridadeEnum = PrioridadeEnum.Alta;
```