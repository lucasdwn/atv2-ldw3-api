---
title: utils
description: 'Uma coleção de utilitários para operações comuns no projeto.'
---

# utils

A pasta `utils` contém uma série de funções utilitárias que são utilizadas em diversas partes do projeto. Esses utilitários são projetados para facilitar operações comuns, como manipulação de dados, criptografia, upload de arquivos e formatação de datas.

## Estrutura

Abaixo estão os arquivos contidos na pasta `utils`:

- **criptografia.ts**: Funções relacionadas à criptografia de dados.
- **dateService.ts**: Utilitários para manipulação e formatação de datas.
- **localUpload.ts**: Funções para gerenciar uploads de arquivos localmente.
- **personalizacao.ts**: Funções para personalização de dados e configurações.
- **s3Upload.ts**: Funções para gerenciar uploads de arquivos para o Amazon S3.

## Uso

Os utilitários podem ser importados em outros módulos do projeto conforme necessário. Por exemplo:

```typescript
import { someUtilityFunction } from './utils/criptografia';
```

Essas funções são projetadas para serem reutilizáveis e devem ser documentadas individualmente em seus respectivos arquivos para garantir clareza e facilidade de uso.