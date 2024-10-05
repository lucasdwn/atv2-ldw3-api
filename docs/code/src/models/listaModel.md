---
title: listaModel
description: 'Modelo de dados para a entidade Lista, utilizando Mongoose para definição de esquema e manipulação de dados.'
---

# listaModel

O arquivo `listaModel.ts` define o modelo de dados para a entidade "Lista" utilizando o Mongoose, uma biblioteca do Node.js que facilita a interação com o MongoDB.

## Estrutura do Modelo

O modelo `Lista` é construído a partir de um esquema (`Schema`) que define a estrutura dos documentos que serão armazenados na coleção "Listas". Abaixo estão os campos definidos no esquema:

- **usuarioId**: 
  - Tipo: `String`
  - Requerido: `true`
  - Mensagem de erro: "o campo 'Usuario' é obrigatório"

- **nome**: 
  - Tipo: `String`
  - Requerido: `true`
  - Mensagem de erro: "o campo 'Nome' é obrigatório"

- **tipoListaId**: 
  - Tipo: `String`
  - Requerido: `true`
  - Mensagem de erro: "o campo 'Tipo de lista' é obrigatório"

- **usuariosPermitidos**: 
  - Tipo: `Array`
  - Estrutura: Utiliza o `UsuarioPermitidoSchema` para definir a estrutura dos usuários permitidos.

- **criadoEm**: 
  - Tipo: `Date`
  - Padrão: `Date.now` (data atual)

- **atualizadoEm**: 
  - Tipo: `Date`
  - Padrão: `null`

- **personalizacao**: 
  - Tipo: `Object`
  - Estrutura: Utiliza o `PersonalizacaoSchema` para definir as opções de personalização da lista.

## Métodos

O modelo `Lista` inclui um método personalizado `toJSON`, que modifica a representação do objeto quando convertido para JSON. Este método remove os campos `_id` e `__v`, e adiciona um campo `id` que contém o valor de `_id`.

## Exportação

O modelo é exportado como uma instância do modelo Mongoose, permitindo que seja utilizado em outras partes da aplicação para criar, ler, atualizar e deletar documentos da coleção "Listas".

```javascript
export default model<IListaModal>('Lista', ListaSchema, 'Listas');
```