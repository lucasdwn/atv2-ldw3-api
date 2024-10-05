---
title: IPersonalizacao
description: 'Interface que define a estrutura de personalização de um item, incluindo ícone, cor e timestamps de criação e atualização.'
---

# IPersonalizacao

A interface `IPersonalizacao` define a estrutura de um objeto de personalização, que pode ser utilizado em diferentes partes da aplicação. Esta interface inclui propriedades para armazenar informações visuais e de controle de versão.

## Propriedades

- **icone**: `string`  
  Representa o ícone associado à personalização.

- **cor**: `string`  
  Define a cor utilizada na personalização.

- **criadoEm**: `Date`  
  Indica a data e hora em que a personalização foi criada.

- **atualizadoEm**: `Date` (opcional)  
  Indica a data e hora da última atualização da personalização. Esta propriedade é opcional e pode não estar presente em todos os casos.

## Extensão

A interface `IPersonalizacaoModal` estende a interface `IPersonalizacao` e a interface `Document` do Mongoose, permitindo que objetos que implementam `IPersonalizacaoModal` sejam utilizados como documentos em um banco de dados MongoDB.

```typescript
import { Document } from 'mongoose';

export interface IPersonalizacaoModal extends Document, IPersonalizacao { }
``` 

Esta estrutura permite que a personalização seja facilmente integrada em modelos de dados que utilizam o Mongoose, facilitando a manipulação e persistência de dados.