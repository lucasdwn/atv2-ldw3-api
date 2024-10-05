---
title: IAnexo
description: 'Interface que define a estrutura de um anexo no sistema, incluindo informações sobre o upload e a associação a um usuário e tarefa.'
---

# IAnexo

A interface `IAnexo` define a estrutura de um anexo no sistema, estendendo a interface `IUpload`. Ela inclui informações sobre o usuário que fez o upload, a tarefa associada e a data de criação do anexo.

## Estrutura

```typescript
export interface IAnexo extends IUpload {
    usuarioId: string;        // ID do usuário que fez o upload
    tarefaId?: string;       // ID da tarefa associada (opcional)
    criadoEm: Date;          // Data de criação do anexo
}
```

### Propriedades

- **usuarioId**: `string`  
  Identificador único do usuário que fez o upload do anexo.

- **tarefaId**: `string` (opcional)  
  Identificador único da tarefa à qual o anexo está associado.

- **criadoEm**: `Date`  
  Data e hora em que o anexo foi criado.

## Interface IUpload

A interface `IAnexo` também estende a interface `IUpload`, que define as propriedades relacionadas ao upload do arquivo.

```typescript
export interface IUpload {
    url: string;                // URL do arquivo armazenado
    originalFilename: string;   // Nome original do arquivo
}
```

### Propriedades de IUpload

- **url**: `string`  
  URL onde o arquivo está armazenado.

- **originalFilename**: `string`  
  Nome original do arquivo enviado pelo usuário.

## Interface IAnexoModal

Além disso, a interface `IAnexo` é utilizada para criar a interface `IAnexoModal`, que estende a interface `Document` do Mongoose, permitindo que os anexos sejam utilizados como documentos em um banco de dados MongoDB.

```typescript
import { Document } from 'mongoose';

export interface IAnexoModal extends Document, IAnexo { }
```

### Propriedades de IAnexoModal

A interface `IAnexoModal` herda todas as propriedades de `IAnexo` e adiciona as propriedades padrão de um documento do Mongoose, como `_id`, `createdAt`, e `updatedAt`.