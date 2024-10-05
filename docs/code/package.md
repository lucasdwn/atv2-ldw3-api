---
title: package.json
description: 'Arquivo de configuração do projeto, contendo informações sobre dependências, scripts e metadados.'
---

# package.json

O arquivo `package.json` é um componente essencial de qualquer projeto Node.js. Ele contém metadados sobre o projeto, incluindo nome, versão, scripts, dependências e outras configurações.

## Estrutura do arquivo

```json
{
  "name": "atv2-ldw3-api",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "dev": "ts-node-dev src/index.ts",
    "build": "tsc",
    "start": "node dist/index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "@aws-sdk/client-s3": "^3.658.1",
    "bcrypt": "^5.1.1",
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.21.0",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^8.6.3",
    "multer": "^1.4.5-lts.1",
    "sharp": "^0.33.5"
  },
  "devDependencies": {
    "@types/bcrypt": "^5.0.2",
    "@types/cors": "^2.8.17",
    "@types/express": "^4.17.21",
    "@types/jsonwebtoken": "^9.0.7",
    "@types/mongoose": "^5.11.96",
    "@types/multer": "^1.4.12",
    "@types/node": "^22.7.0",
    "@types/uuid": "^10.0.0",
    "ts-node-dev": "^2.0.0",
    "typescript": "^5.6.2"
  }
}
```

## Campos principais

- **name**: Nome do projeto.
- **version**: Versão atual do projeto.
- **main**: O ponto de entrada do aplicativo.
- **scripts**: Comandos que podem ser executados usando `npm run <script>`.
  - **dev**: Inicia o servidor em modo de desenvolvimento.
  - **build**: Compila o projeto TypeScript.
  - **start**: Inicia o aplicativo a partir da versão compilada.
- **dependencies**: Lista de pacotes necessários para o funcionamento do projeto.
- **devDependencies**: Lista de pacotes necessários apenas durante o desenvolvimento.

## Dependências

As dependências listadas são bibliotecas que o projeto utiliza:

- `@aws-sdk/client-s3`: Cliente para interagir com o Amazon S3.
- `bcrypt`: Biblioteca para hashing de senhas.
- `cors`: Middleware para habilitar CORS.
- `dotenv`: Carrega variáveis de ambiente de um arquivo `.env`.
- `express`: Framework web para Node.js.
- `jsonwebtoken`: Implementação de JSON Web Tokens.
- `mongoose`: ODM para MongoDB.
- `multer`: Middleware para manipulação de `multipart/form-data`.
- `sharp`: Biblioteca para processamento de imagens.

## Dependências de Desenvolvimento

As dependências de desenvolvimento são utilizadas apenas durante o desenvolvimento e testes:

- `@types/*`: Tipos TypeScript para bibliotecas JavaScript.
- `ts-node-dev`: Ferramenta para desenvolvimento com TypeScript.
- `typescript`: Compilador TypeScript.

Este arquivo é fundamental para a gestão de pacotes e scripts do projeto, facilitando a instalação e execução de dependências.