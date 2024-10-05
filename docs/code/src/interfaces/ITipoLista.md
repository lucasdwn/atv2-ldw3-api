---
title: ITipoLista
description: 'Interface que define a estrutura de um tipo de lista, incluindo informações sobre o usuário e personalização.'
---

# ITipoLista

A interface `ITipoLista` define a estrutura de um tipo de lista no sistema. Ela inclui informações sobre o usuário que criou a lista, o nome da lista, as datas de criação e atualização, e a personalização associada.

## Estrutura

```typescript
export interface ITipoLista {
    usuarioId: string;          // ID do usuário que criou a lista
    nome: string;               // Nome da lista
    criadoEm: Date;            // Data de criação da lista
    atualizadoEm?: Date;       // Data de última atualização da lista (opcional)
    personalizacao: IPersonalizacao; // Personalização associada à lista
}
```

## ITipoListaModal

Além da interface `ITipoLista`, também é definida a interface `ITipoListaModal`, que estende a interface `ITipoLista` e implementa a interface `Document` do Mongoose, permitindo que a estrutura seja utilizada como um modelo de dados no banco de dados.

```typescript
import { Document } from 'mongoose';

export interface ITipoListaModal extends Document, ITipoLista { }
```

## Dependências

- `IPersonalizacao`: Interface que define a estrutura de personalização associada ao tipo de lista.
- `Document`: Interface do Mongoose que permite a integração com o banco de dados.