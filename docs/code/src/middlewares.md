---
title: middlewares
description: 'Contém os middlewares utilizados na aplicação para controle de autenticação e upload de arquivos.'
---

# middlewares

A pasta `middlewares` contém os middlewares utilizados na aplicação. Middlewares são funções que têm acesso ao objeto de solicitação (request), ao objeto de resposta (response) e à próxima função middleware na cadeia. Eles são usados para executar código, modificar a solicitação e a resposta, encerrar a solicitação e chamar o próximo middleware na pilha.

## Estrutura

A pasta `middlewares` contém os seguintes arquivos:

- **authMiddleware.ts**: Middleware responsável pela autenticação de usuários. Verifica se o usuário está autenticado antes de permitir o acesso a rotas protegidas.
  
- **uploadMiddleware.ts**: Middleware que gerencia o upload de arquivos. Pode incluir validações e manipulações necessárias para o processamento de arquivos enviados pelo usuário.

## Uso

Os middlewares podem ser aplicados a rotas específicas ou globalmente na aplicação, dependendo da necessidade. Para utilizá-los, basta importá-los nos arquivos de rotas correspondentes e aplicá-los nas definições das rotas.