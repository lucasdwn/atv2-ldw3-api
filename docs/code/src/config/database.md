---
title: database
description: 'Configuração e gerenciamento da conexão com o banco de dados MongoDB.'
---

# database.ts

O arquivo `database.ts` é responsável pela configuração e gerenciamento da conexão com o banco de dados MongoDB utilizando a biblioteca Mongoose. Ele contém funções para conectar e desconectar do banco de dados, além de gerenciar o encerramento da conexão de forma adequada.

## Dependências

- `mongoose`: Biblioteca para modelagem de dados MongoDB.
- `dotenv`: Biblioteca para carregar variáveis de ambiente a partir de um arquivo `.env`.

## Variáveis de Ambiente

A conexão com o banco de dados é feita utilizando a variável de ambiente `DB_URI`. Caso essa variável não esteja definida, o código utilizará a URI padrão `mongodb://localhost:27017/atv2-ldw3`.

## Funções

### connect()

Estabelece a conexão com o banco de dados MongoDB. Em caso de sucesso, uma mensagem de confirmação é exibida no console. Se ocorrer um erro, a mensagem de erro é registrada.

#### Exemplo de uso:

```typescript
import { connect } from './config/database';

connect();
```

### disconnect()

Encerra a conexão com o banco de dados MongoDB. Uma mensagem de confirmação é exibida no console ao encerrar a conexão.

#### Exemplo de uso:

```typescript
import { disconnect } from './config/database';

await disconnect();
```

## Gerenciamento de Sinais

O arquivo também escuta o sinal `SIGINT` (geralmente enviado quando o processo é encerrado) para garantir que a conexão com o MongoDB seja fechada corretamente antes que o processo termine. Isso ajuda a evitar problemas de conexão não encerrada.

## Conclusão

O `database.ts` fornece uma interface simples para gerenciar a conexão com o MongoDB, facilitando a integração do banco de dados na aplicação.