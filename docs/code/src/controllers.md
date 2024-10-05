---
title: controllers
description: 'Contém os controladores que gerenciam a lógica de negócios da aplicação.'
---

# controllers

A pasta `controllers` é responsável por conter os controladores que gerenciam a lógica de negócios da aplicação. Cada controlador é responsável por uma parte específica da funcionalidade do sistema, lidando com as requisições e respostas, além de interagir com os modelos e serviços necessários.

## Estrutura

Abaixo está a lista dos controladores disponíveis na pasta:

- **authController.ts**: Gerencia a autenticação de usuários, incluindo login e registro.
- **anexoController.ts**: Manipula operações relacionadas a anexos, como upload e download.
- **listaController.ts**: Controla as operações sobre listas, incluindo criação, leitura, atualização e exclusão.
- **prioridadeController.ts**: Gerencia as prioridades associadas às tarefas.
- **tarefaController.ts**: Manipula as operações relacionadas a tarefas, como criação, atualização e listagem.
- **tipoListaController.ts**: Controla os tipos de listas disponíveis na aplicação.
- **usuarioController.ts**: Gerencia as operações relacionadas aos usuários, incluindo informações de perfil e gerenciamento de contas.

## Uso

Os controladores são utilizados nas rotas da aplicação para processar as requisições e retornar as respostas apropriadas. Cada controlador deve ser importado nas rotas correspondentes para que suas funcionalidades possam ser acessadas.