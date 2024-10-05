---
title: uploadMiddleware
description: 'Middleware para gerenciamento de uploads de arquivos, incluindo imagens e documentos, com validação de tipo e otimização de imagens.'
---

# uploadMiddleware

O `uploadMiddleware` é um middleware desenvolvido para gerenciar o upload de arquivos em uma aplicação Express. Ele utiliza a biblioteca `multer` para lidar com o upload de arquivos e `sharp` para otimização de imagens. Este middleware permite o upload de imagens e documentos, aplicando validações de tipo e limites de tamanho.

## Funcionalidades

- **Validação de Tipos de Arquivo**: Permite apenas tipos de arquivos específicos para imagens e documentos.
- **Limites de Tamanho**: Define limites de tamanho para uploads de imagens (5 MB) e documentos (10 MB).
- **Otimização de Imagens**: Redimensiona e comprime imagens para melhorar a performance.

## Estrutura do Código

### Filtros de Arquivo

- **imageFileFilter**: Filtra os arquivos de imagem permitidos (JPEG, JPG, PNG, GIF).
- **documentFileFilter**: Filtra os arquivos de documento permitidos (PDF, DOC, DOCX, ZIP, RAR).

### Configuração do Multer

- **multerStorage**: Utiliza armazenamento em memória para os arquivos.
- **imageUpload**: Configuração do multer para upload de imagens.
- **documentUpload**: Configuração do multer para upload de documentos.

### Funções Principais

- **optimizeImage**: Função assíncrona que utiliza `sharp` para redimensionar e otimizar imagens.
- **preserveBody**: Middleware que preserva o corpo da requisição original e processa o upload de arquivos, chamando a função de upload apropriada com base no tipo de arquivo.

## Uso

Para utilizar o `uploadMiddleware`, você deve importar e aplicar o middleware nas rotas desejadas. Exemplo:

```javascript
import { preserveBody } from './middlewares/uploadMiddleware';

// Rota para upload de imagem
app.post('/upload/image', preserveBody('image'), (req, res) => {
    res.json({ message: 'Imagem enviada com sucesso!' });
});

// Rota para upload de documentos
app.post('/upload/documents', preserveBody('documents'), (req, res) => {
    res.json({ message: 'Documentos enviados com sucesso!' });
});
```

## Erros

O middleware retorna mensagens de erro específicas em caso de falhas durante o upload, como tipos de arquivo inválidos ou erros de processamento.