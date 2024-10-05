---
title: IPrioridade
description: 'Interface que define a estrutura de uma prioridade no sistema, incluindo informações sobre o usuário e personalização.'
---

# IPrioridade

A interface `IPrioridade` define a estrutura de um objeto de prioridade no sistema. Ela é utilizada para representar as prioridades associadas a um usuário, incluindo informações sobre a personalização e as datas de criação e atualização.

## Estrutura da Interface

```typescript
export interface IPrioridade {
    usuarioId: string;          // ID do usuário associado à prioridade
    nome: string;               // Nome da prioridade
    criadoEm: Date;            // Data de criação da prioridade
    atualizadoEm?: Date;       // Data de atualização da prioridade (opcional)
    personalizacao: IPersonalizacao; // Objeto de personalização associado à prioridade
}
```

## Extensão da Interface

A interface `IPrioridadeModal` estende a interface `IPrioridade` e a interface `Document` do Mongoose, permitindo que objetos de prioridade sejam utilizados como documentos no banco de dados.

```typescript
import { Document } from 'mongoose';

export interface IPrioridadeModal extends Document, IPrioridade { }
```

## Dependências

- `IPersonalizacao`: Esta interface deve ser importada de `./IPersonalizacao` e representa a estrutura de personalização associada à prioridade.

## Considerações

- O campo `atualizadoEm` é opcional, permitindo que a prioridade seja criada sem uma data de atualização inicial.
- A interface é projetada para ser utilizada em conjunto com o Mongoose, facilitando a manipulação de dados no banco de dados.