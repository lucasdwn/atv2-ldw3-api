---
title: IUsuario
description: 'Interface que define a estrutura de um usuário no sistema.'
---

# IUsuario

A interface `IUsuario` define a estrutura de um usuário no sistema, incluindo informações básicas e metadados sobre a criação e atualização do registro.

## Estrutura da Interface

```typescript
export interface IUsuario {
    nome: string;
    email: string;
    senha: string;
    profileImage?: string;
    criadoEm: Date;
    atualizadoEm?: Date;
}
```

### Propriedades

- **nome**: `string` - O nome do usuário.
- **email**: `string` - O endereço de e-mail do usuário.
- **senha**: `string` - A senha do usuário.
- **profileImage**: `string` (opcional) - URL da imagem de perfil do usuário.
- **criadoEm**: `Date` - Data de criação do registro do usuário.
- **atualizadoEm**: `Date` (opcional) - Data da última atualização do registro do usuário.

## IUsuarioPermitido

A interface `IUsuarioPermitido` define a estrutura de um usuário com permissões específicas.

```typescript
export interface IUsuarioPermitido {
    usuarioId: string;
    email: string;
    podeEditar: boolean;
    criadoEm: Date;
    atualizadoEm?: Date;
}
```

### Propriedades

- **usuarioId**: `string` - Identificador único do usuário.
- **email**: `string` - Endereço de e-mail do usuário.
- **podeEditar**: `boolean` - Indica se o usuário tem permissão para editar.
- **criadoEm**: `Date` - Data de criação do registro de permissões.
- **atualizadoEm**: `Date` (opcional) - Data da última atualização do registro de permissões.

## IUsuarioModal

A interface `IUsuarioModal` estende a interface `IUsuario` e é utilizada em conjunto com o Mongoose para definir um modelo de usuário.

```typescript
import { Document } from 'mongoose';
export interface IUsuarioModal extends Document, IUsuario { }
```

## IUsuarioPermitidoModal

A interface `IUsuarioPermitidoModal` estende a interface `IUsuarioPermitido` e é utilizada em conjunto com o Mongoose para definir um modelo de permissões de usuário.

```typescript
export interface IUsuarioPermitidoModal extends Document, IUsuarioPermitido { }
``` 

Essas interfaces são fundamentais para garantir a integridade e a estrutura dos dados relacionados aos usuários no sistema.