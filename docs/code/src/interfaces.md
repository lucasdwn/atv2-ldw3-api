---
title: interfaces
description: 'Contém as definições de interfaces utilizadas no projeto para garantir a tipagem e a estrutura dos dados.'
---

# interfaces

A pasta `interfaces` contém as definições de interfaces que são utilizadas em todo o projeto. As interfaces são fundamentais para garantir a tipagem estática e a estrutura dos dados, facilitando a manutenção e a escalabilidade do código.

## Estrutura

Abaixo estão as interfaces disponíveis na pasta:

- **IAnexo.ts**: Define a estrutura de um anexo, incluindo propriedades como nome, tipo e tamanho.
- **ILista.ts**: Especifica a estrutura de uma lista, incluindo atributos como título e itens associados.
- **IPersonalizacao.ts**: Define as opções de personalização disponíveis para o usuário.
- **IPrioridade.ts**: Especifica a estrutura de prioridade, incluindo níveis e descrições.
- **ITarefa.ts**: Define a estrutura de uma tarefa, incluindo propriedades como descrição, status e data de conclusão.
- **IUsuario.ts**: Especifica a estrutura de um usuário, incluindo informações como nome, email e senha.
- **ITipoLista.ts**: Define os tipos de listas disponíveis, incluindo categorias e descrições.

## Uso

As interfaces devem ser importadas nos arquivos onde são necessárias, garantindo que os objetos utilizados estejam de acordo com as definições estabelecidas. Isso ajuda a evitar erros e a melhorar a legibilidade do código.