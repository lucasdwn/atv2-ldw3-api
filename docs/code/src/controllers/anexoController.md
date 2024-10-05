---
title: anexoController
description: 'Controlador responsável pelo gerenciamento de anexos, incluindo upload de imagens e documentos.'
---

# anexoController

O `anexoController` é um módulo que gerencia o upload de anexos, como imagens e documentos, em uma aplicação Express. Ele fornece métodos para lidar com requisições de upload e interagir com o modelo de dados correspondente.

## Métodos

### uploadImagem

```typescript
public async uploadImagem(req: Request, res: Response): Promise<Response>
```

Este método permite o upload de uma imagem. Ele verifica se um arquivo foi enviado e se o usuário existe. Em caso de sucesso, a imagem é salva localmente e um novo anexo é criado.

#### Parâmetros

- `req`: Objeto de requisição que contém os dados do usuário e da tarefa.
- `res`: Objeto de resposta utilizado para enviar a resposta ao cliente.

#### Respostas

- **201 Created**: Retorna uma mensagem de sucesso e os detalhes do anexo criado.
- **400 Bad Request**: Retorna um erro se nenhuma imagem for enviada.
- **404 Not Found**: Retorna um erro se o usuário não for encontrado.
- **500 Internal Server Error**: Retorna um erro genérico em caso de falha no upload.

### uploadDocumentos

```typescript
public async uploadDocumentos(req: Request, res: Response): Promise<Response>
```

Este método permite o upload de múltiplos documentos. Ele verifica se os arquivos foram enviados e, em caso de sucesso, salva os documentos localmente e associa-os à tarefa correspondente.

#### Parâmetros

- `req`: Objeto de requisição que contém os dados do usuário e da tarefa.
- `res`: Objeto de resposta utilizado para enviar a resposta ao cliente.

#### Respostas

- **201 Created**: Retorna uma mensagem de sucesso e os detalhes dos anexos criados.
- **400 Bad Request**: Retorna um erro se nenhum documento for enviado.
- **500 Internal Server Error**: Retorna um erro genérico em caso de falha no upload.

## Função createAnexo

```typescript
export const createAnexo = async (upload: IUpload, userId: String, tarefaId?: string): Promise<IAnexo>
```

Esta função cria um novo anexo no banco de dados com base nas informações do upload e do usuário.

### Parâmetros

- `upload`: Objeto que contém os detalhes do upload, como URL e nome do arquivo.
- `userId`: ID do usuário que está realizando o upload.
- `tarefaId`: (opcional) ID da tarefa associada ao anexo.

### Retorno

Retorna um objeto `IAnexo` que representa o anexo salvo no banco de dados.

## Dependências

- `express`: Para manipulação de requisições e respostas HTTP.
- `s3Upload`: Para upload de arquivos para o S3.
- `IAnexo`, `IUpload`: Interfaces que definem a estrutura dos dados de anexo e upload.
- `Usuario`, `Anexo`, `Tarefa`: Modelos que representam as entidades no banco de dados.
- `dateService`: Serviço para manipulação de datas.
- `localUpload`: Para upload de arquivos localmente.