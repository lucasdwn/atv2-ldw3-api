---
title: uploadRoutes
description: 'Roteamento para upload de imagens e documentos.'
---

# uploadRoutes

O arquivo `uploadRoutes.ts` define as rotas para o upload de arquivos, utilizando o framework Express. Ele integra middlewares e controladores para gerenciar as requisições de upload.

## Estrutura do Código

O código é estruturado da seguinte forma:

1. **Importações**:
   - Importa o módulo `express` para criar o roteador.
   - Importa o middleware `preserveBody` do arquivo `uploadMiddleware` para manipulação do corpo da requisição.
   - Importa o controlador `anexoController` que contém a lógica para o upload de arquivos.

2. **Criação do Roteador**:
   - Um roteador é criado utilizando `express.Router()`.

3. **Definição das Rotas**:
   - `POST /image`: Rota para upload de imagens. Utiliza o middleware `preserveBody` para garantir que o corpo da requisição contenha a chave `image`, e chama o método `uploadImagem` do `anexoController`.
   - `POST /documents`: Rota para upload de documentos. Utiliza o middleware `preserveBody` para garantir que o corpo da requisição contenha a chave `documents`, e chama o método `uploadDocumentos` do `anexoController`.

4. **Exportação**:
   - O roteador é exportado como padrão para ser utilizado em outras partes da aplicação.

## Exemplo de Uso

Para utilizar as rotas definidas, você deve importá-las em seu arquivo principal de rotas (geralmente `index.ts`) e montá-las no aplicativo Express:

```typescript
import uploadRoutes from './uploadRoutes';

app.use('/upload', uploadRoutes);
```

## Considerações

- Certifique-se de que o middleware `preserveBody` esteja corretamente implementado para lidar com a extração dos arquivos do corpo da requisição.
- O controlador `anexoController` deve conter os métodos `uploadImagem` e `uploadDocumentos` para processar os uploads adequadamente.