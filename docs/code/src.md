---
title: src
description: 'Diretório principal contendo a lógica da aplicação, incluindo configurações, controladores, modelos, rotas e utilitários.'
---

# src

O diretório `src` é o núcleo da aplicação, onde reside toda a lógica de implementação. Ele é organizado em várias subpastas, cada uma com uma função específica:

- **config**: Contém arquivos de configuração da aplicação, como a configuração do banco de dados e scripts para semear dados iniciais.
- **controllers**: Abriga os controladores que gerenciam a lógica de negócios e as interações entre as rotas e os modelos.
- **enums**: Define enums utilizados em toda a aplicação, facilitando a manutenção e a legibilidade do código.
- **interfaces**: Contém as definições de interfaces TypeScript que descrevem a estrutura dos dados utilizados na aplicação.
- **middlewares**: Inclui middlewares que interceptam requisições e podem realizar validações ou manipulações antes que cheguem aos controladores.
- **routes**: Define as rotas da aplicação, mapeando URLs para os controladores correspondentes.
- **models**: Contém os modelos que representam as entidades da aplicação e suas interações com o banco de dados.
- **utils**: Abriga funções utilitárias que são usadas em várias partes da aplicação, como serviços de data, criptografia e upload de arquivos.

Este diretório é fundamental para a organização e a modularidade do código, permitindo uma fácil manutenção e escalabilidade da aplicação.