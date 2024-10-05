---
title: models
description: 'Contém as definições dos modelos de dados utilizados na aplicação.'
---

# models

A pasta `models` contém as definições dos modelos de dados utilizados na aplicação. Cada arquivo dentro desta pasta representa um modelo específico, que é responsável por estruturar e gerenciar os dados relacionados a diferentes entidades do sistema. 

Os modelos são fundamentais para a interação com o banco de dados, permitindo a criação, leitura, atualização e exclusão (CRUD) de registros. Abaixo estão os arquivos presentes nesta pasta:

- **anexoModel.ts**: Define o modelo para anexos, incluindo suas propriedades e métodos relacionados.
- **listaModel.ts**: Define o modelo para listas, que pode incluir tarefas e outros elementos.
- **personalizacaoModel.ts**: Define o modelo para personalizações de usuário ou de interface.
- **prioridadeModel.ts**: Define o modelo para prioridades, que podem ser atribuídas a tarefas ou listas.
- **tarefaModel.ts**: Define o modelo para tarefas, incluindo suas propriedades e relacionamentos.
- **tipoListaModel.ts**: Define o modelo para tipos de listas, categorizando diferentes listas que podem existir.
- **usuarioModel.ts**: Define o modelo para usuários, incluindo autenticação e informações pessoais.

Esses modelos são utilizados em conjunto com os controladores e rotas da aplicação para garantir uma estrutura organizada e eficiente na manipulação de dados.