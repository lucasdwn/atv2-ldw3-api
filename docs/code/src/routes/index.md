---
title: index
description: 'Arquivo de configuração das rotas principais da aplicação.'
---

# index.ts

O arquivo `index.ts` é responsável por definir as rotas principais da aplicação utilizando o framework Express. Ele organiza as rotas em diferentes módulos e aplica middleware de autenticação onde necessário.

## Estrutura do Código

1. **Importações**:
   - Importa o `Router` do Express.
   - Importa as rotas específicas de usuários, autenticação, upload, prioridade, lista, tarefa e tipo de lista.
   - Importa o middleware de autenticação.
   - Importa módulos adicionais como `express` e `path`.

2. **Configuração das Rotas**:
   - Cria uma instância do `Router`.
   - Define uma rota estática para servir arquivos de upload.
   - Aplica o middleware de autenticação nas rotas que requerem autenticação.
   - Define as rotas para usuários e autenticação sem middleware.

3. **Rota Raiz**:
   - Define uma rota GET para a raiz (`/`) que responde com "Hello World!".

## Exemplo de Uso

```typescript
import routes from './routes/index';

// Em seu arquivo principal (ex: app.ts)
app.use(routes);
```

## Observações

- As rotas que requerem autenticação são protegidas pelo `authMiddleware`, garantindo que apenas usuários autenticados possam acessá-las.
- A rota de uploads é configurada para servir arquivos estáticos a partir do diretório `uploads`.