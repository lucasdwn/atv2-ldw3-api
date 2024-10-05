---
title: s3Upload
description: 'Função para fazer upload de arquivos para o Amazon S3.'
---

# s3Upload

A função `uploadToS3` permite o upload de arquivos para um bucket do Amazon S3. Ela utiliza a biblioteca AWS SDK para JavaScript e gera um nome de arquivo único para cada upload.

## Importações

A função depende das seguintes bibliotecas:

- `@aws-sdk/client-s3`: Para interagir com o serviço S3 da AWS.
- `uuid`: Para gerar identificadores únicos para os arquivos.
- `path`: Para manipulação de caminhos de arquivos.

## Configuração do S3

A instância do cliente S3 é criada com a região especificada na variável de ambiente `AWS_REGION`.

```typescript
const s3 = new S3Client({ region: process.env.AWS_REGION });
```

## Parâmetros

A função `uploadToS3` aceita os seguintes parâmetros:

- `file: Express.Multer.File`: O arquivo a ser enviado, que deve ser um objeto do tipo `Multer.File`.
- `folder: string`: O nome da pasta dentro do bucket S3 onde o arquivo será armazenado.

## Retorno

A função retorna um objeto contendo:

- `url`: A URL acessível do arquivo no S3.
- `originalFilename`: O nome original do arquivo enviado.

## Exemplo de Uso

```typescript
const result = await uploadToS3(file, 'uploads');
console.log(result.url); // URL do arquivo no S3
```

## Observações

- A função define o ACL (Access Control List) do arquivo como 'private', garantindo que o arquivo não seja acessível publicamente.
- A URL do arquivo é construída com base na variável de ambiente `CLOUD_FRONT_CDN`, se disponível; caso contrário, utiliza a URL padrão do S3.