---
title: ILista
description: 'Interface que define a estrutura de uma lista no sistema, incluindo informações sobre usuários permitidos e personalização.'
---

# ILista

A interface `ILista` define a estrutura de uma lista no sistema, incluindo informações sobre o usuário que a criou, o nome da lista, o tipo de lista, os usuários permitidos, e as datas de criação e atualização.

## Estrutura da Interface

```typescript
export interface ILista {
    usuarioId: string;                // ID do usuário que criou a lista
    nome: string;                      // Nome da lista
    tipoListaId: string;              // ID do tipo de lista
    usuariosPermitidos: IUsuarioPermitido[]; // Lista de usuários permitidos
    criadoEm: Date;                   // Data de criação da lista
    atualizadoEm?: Date;              // Data de atualização da lista (opcional)
    personalizacao: IPersonalizacao;  // Personalização associada à lista
}
```

## Extensão da Interface

A interface `IListaModal` estende a interface `ILista` e a interface `Document` do Mongoose, permitindo que a lista seja utilizada como um modelo de documento no banco de dados.

```typescript
import { Document } from 'mongoose';

export interface IListaModal extends Document, ILista { }
```

## Dependências

- `IPersonalizacao`: Interface que define a estrutura de personalização da lista.
- `IUsuarioPermitido`: Interface que define a estrutura de um usuário permitido na lista.