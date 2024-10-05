---
title: Introdução
description: 'Uma visão geral do projeto de API para gerenciamento de tarefas e listas.'
---

# Introdução

Este projeto é uma API desenvolvida para gerenciar tarefas e listas, permitindo a criação, leitura, atualização e exclusão de itens. A aplicação utiliza o framework Express para a construção do servidor e MongoDB como banco de dados, proporcionando uma estrutura robusta e escalável.

## Visão Geral

A API oferece funcionalidades para autenticação de usuários, gerenciamento de listas e tarefas, além de suporte para upload de arquivos. A estrutura do projeto é organizada em pastas que separam claramente as responsabilidades, como controladores, modelos, rotas e middlewares.

## Requisitos

Para rodar este projeto, você precisará ter instalado:

- Node.js (versão 14 ou superior)
- MongoDB (local ou em um serviço de nuvem)
- AWS SDK (para funcionalidades relacionadas ao S3, se necessário)

## Como Rodar o Projeto

1. Clone o repositório:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd atv2-ldw3-api
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente. Crie um arquivo `.env` na raiz do projeto e adicione as configurações necessárias, como a URL do banco de dados MongoDB e as credenciais da AWS.

4. Para iniciar o servidor em modo de desenvolvimento, execute:
   ```bash
   npm run dev
   ```

5. Para compilar o projeto, utilize:
   ```bash
   npm run build
   ```

6. Para iniciar o servidor em produção, execute:
   ```bash
   npm start
   ```

## Estrutura de Pastas

- `src/`: Contém todo o código fonte da aplicação.
  - `config/`: Configurações do banco de dados e seeders.
  - `controllers/`: Lógica de controle para as rotas.
  - `enums/`: Enumerações utilizadas no projeto.
  - `interfaces/`: Definições de interfaces TypeScript.
  - `middlewares/`: Middlewares para autenticação e upload.
  - `routes/`: Definições das rotas da API.
  - `models/`: Modelos de dados para o MongoDB.
  - `utils/`: Funções utilitárias.
  - `uploads/`: Diretório para armazenar arquivos enviados.

Com esta introdução, você deve estar preparado para começar a trabalhar com a API e explorar suas funcionalidades. Para mais informações, consulte a documentação das rotas e dos modelos.
