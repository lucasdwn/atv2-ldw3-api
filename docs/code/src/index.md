---
title: index
description: 'Arquivo principal que inicializa o servidor Express e configura as rotas e o banco de dados.'
---

# index.ts

O arquivo `index.ts` é o ponto de entrada da aplicação. Ele configura o servidor Express, conecta ao banco de dados e inicializa as rotas.

## Estrutura do Código

1. **Importações**:
   - `express`: Framework para construção de aplicações web.
   - `cors`: Middleware para habilitar CORS (Cross-Origin Resource Sharing).
   - `dotenv`: Carrega variáveis de ambiente a partir de um arquivo `.env`.
   - `connect`: Função para conectar ao banco de dados.
   - `routes`: Conjunto de rotas da aplicação.
   - `seedDatabase`: Função para popular o banco de dados com dados iniciais.

2. **Configuração do Ambiente**:
   - O arquivo `.env` é carregado para acessar variáveis de ambiente.

3. **Configuração do Servidor**:
   - Define a porta do servidor, que pode ser configurada através da variável de ambiente `PORT` ou, por padrão, será a porta `3000`.
   - Cria uma instância do aplicativo Express.

4. **Middleware**:
   - `express.json()`: Middleware para analisar requisições com payload JSON.
   - `cors()`: Middleware para habilitar CORS.

5. **Função `startServer`**:
   - Conecta ao banco de dados.
   - Executa a função `seedDatabase` para popular o banco de dados.
   - Inicia o servidor e escuta na porta definida.
   - Registra as rotas da aplicação.

6. **Tratamento de Erros**:
   - Captura e exibe erros que possam ocorrer durante a inicialização da aplicação.

## Exemplo de Uso

Para iniciar a aplicação, execute o comando:

```bash
npm start
```

Certifique-se de que as variáveis de ambiente estão configuradas corretamente no arquivo `.env`. O servidor estará disponível em `http://localhost:3000`.