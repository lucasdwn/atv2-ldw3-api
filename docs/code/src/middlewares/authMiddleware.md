---
title: authMiddleware
description: 'Middleware para autenticação de usuários utilizando JWT.'
---

# authMiddleware

O `authMiddleware` é um middleware do Express que verifica a autenticação de usuários através de um token JWT (JSON Web Token). Ele é responsável por garantir que apenas usuários autenticados possam acessar determinadas rotas da aplicação.

## Funcionamento

1. **Recepção do Token**: O middleware tenta obter o token JWT do cabeçalho `Authorization` da requisição.
2. **Verificação do Token**: Se o token não for fornecido, uma resposta de erro 401 (Não Autorizado) é retornada. Caso o token seja fornecido, ele é verificado utilizando a chave secreta definida na variável de ambiente `JWT_SECRET`.
3. **Decodificação do Token**: Se a verificação for bem-sucedida, o ID do usuário é extraído do token decodificado e adicionado ao corpo da requisição (`req.body.userId`).
4. **Continuação do Fluxo**: O middleware chama `next()` para passar o controle para o próximo middleware ou rota.

## Exemplo de Uso

```javascript
import express from 'express';
import authMiddleware from './middlewares/authMiddleware';

const app = express();

app.use(authMiddleware);

app.get('/protected-route', (req, res) => {
    res.send(`Acesso permitido para o usuário com ID: ${req.body.userId}`);
});
```

## Considerações

- Certifique-se de que a variável de ambiente `JWT_SECRET` esteja configurada corretamente para garantir a segurança da aplicação.
- O middleware deve ser aplicado antes das rotas que requerem autenticação.