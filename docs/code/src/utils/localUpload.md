---
title: localUpload
description: 'Funções para upload de arquivos localmente no servidor.'
---

# localUpload

Este módulo fornece funcionalidades para o upload de arquivos em um diretório local no servidor. Ele utiliza a biblioteca `fs` para manipulação de arquivos e `path` para gerenciamento de caminhos de diretórios. Além disso, gera nomes de arquivos únicos usando `uuid`.

## Estrutura do Código

### Constantes

- `UPLOADS_FOLDER`: Define o caminho para a pasta de uploads, que é criada na inicialização do módulo, caso não exista.

### Funções

#### `uploadToLocal(file: Express.Multer.File, folder: string): { url: string, originalFilename: string }`

Esta função realiza o upload de um arquivo para um diretório específico no servidor.

**Parâmetros:**

- `file`: Um objeto do tipo `Express.Multer.File`, que contém informações sobre o arquivo a ser enviado.
- `folder`: Uma string que representa o nome da pasta onde o arquivo será armazenado.

**Retorno:**

Um objeto contendo:
- `url`: A URL pública do arquivo enviado.
- `originalFilename`: O nome original do arquivo enviado.

**Exemplo de Uso:**

```typescript
const file = req.file; // arquivo recebido via multer
const folder = 'documents'; // pasta de destino
const result = uploadToLocal(file, folder);
console.log(result.url); // URL pública do arquivo
```

## Observações

- A função cria a pasta de uploads e a subpasta especificada, se elas não existirem.
- Os arquivos são salvos com um nome único gerado pelo `uuid`, mantendo a extensão original do arquivo.