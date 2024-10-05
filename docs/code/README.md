---
title: README
description: 'Documentação do projeto Back-end da atividade 2 de LDW3'
---

# Back-end da Atividade 2 de LDW3

Este repositório contém a implementação do back-end para a atividade 2 do curso de Linguagens de Desenvolvimento Web 3 (LDW3). O objetivo deste projeto é fornecer uma API que gerencia diversas entidades, como usuários, listas, tarefas e anexos.

## Estrutura do Projeto

A estrutura do projeto é organizada da seguinte forma:

- **src/**: Contém todo o código-fonte da aplicação.
  - **config/**: Configurações do banco de dados e inicialização.
    - `database.ts`: Configuração da conexão com o banco de dados.
    - `seedDatabase.ts`: Script para popular o banco de dados com dados iniciais.
  - **controllers/**: Controladores que gerenciam a lógica de negócios.
    - `authController.ts`: Controlador para autenticação de usuários.
    - `anexoController.ts`: Controlador para gerenciamento de anexos.
    - `listaController.ts`: Controlador para gerenciamento de listas.
    - `prioridadeController.ts`: Controlador para gerenciamento de prioridades.
    - `tarefaController.ts`: Controlador para gerenciamento de tarefas.
    - `tipoListaController.ts`: Controlador para gerenciamento de tipos de listas.
    - `usuarioController.ts`: Controlador para gerenciamento de usuários.
  - **enums/**: Enumerações utilizadas no projeto.
    - `tarefasEnum.ts`: Enum para definir os estados das tarefas.
  - **interfaces/**: Interfaces TypeScript que definem a estrutura dos dados.
    - `IAnexo.ts`: Interface para anexos.
    - `ILista.ts`: Interface para listas.
    - `IPersonalizacao.ts`: Interface para personalizações.
    - `IPrioridade.ts`: Interface para prioridades.
    - `ITarefa.ts`: Interface para tarefas.
    - `IUsuario.ts`: Interface para usuários.
    - `ITipoLista.ts`: Interface para tipos de listas.
  - **middlewares/**: Middlewares utilizados na aplicação.
    - `authMiddleware.ts`: Middleware para autenticação de requisições.
    - `uploadMiddleware.ts`: Middleware para gerenciamento de uploads.
  - **routes/**: Definição das rotas da API.
    - `authRoutes.ts`: Rotas relacionadas à autenticação.
    - `listaRoutes.ts`: Rotas relacionadas a listas.
    - `prioridadeRoutes.ts`: Rotas relacionadas a prioridades.
    - `tarefaRoutes.ts`: Rotas relacionadas a tarefas.
    - `tipoListaRoutes.ts`: Rotas relacionadas a tipos de listas.
    - `uploadRoutes.ts`: Rotas relacionadas a uploads.
    - `usuarioRoutes.ts`: Rotas relacionadas a usuários.
  - **models/**: Modelos que representam as entidades do banco de dados.
    - `anexoModel.ts`: Modelo para anexos.
    - `listaModel.ts`: Modelo para listas.
    - `personalizacaoModel.ts`: Modelo para personalizações.
    - `prioridadeModel.ts`: Modelo para prioridades.
    - `tarefaModel.ts`: Modelo para tarefas.
    - `tipoListaModel.ts`: Modelo para tipos de listas.
    - `usuarioModel.ts`: Modelo para usuários.
  - **utils/**: Funções utilitárias.
    - `criptografia.ts`: Funções para criptografia de dados.
    - `dateService.ts`: Funções para manipulação de datas.
    - `localUpload.ts`: Funções para upload local de arquivos.
    - `personalizacao.ts`: Funções para personalização de dados.
    - `s3Upload.ts`: Funções para upload de arquivos para o S3.
- **uploads/**: Diretório para armazenar arquivos enviados.
  - **documents/**: Subdiretório para documentos.
  - **profile-images/**: Subdiretório para imagens de perfil.

## Como Executar o Projeto

1. Clone o repositório.
2. Instale as dependências com `npm install`.
3. Configure o banco de dados no arquivo de configuração.
4. Execute o servidor com `npm start`.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.