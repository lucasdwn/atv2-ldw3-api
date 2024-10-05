---
title: uploads
description: 'Diretório responsável pelo armazenamento de arquivos enviados, incluindo documentos e imagens de perfil.'
---

# uploads

O diretório `uploads` é utilizado para armazenar arquivos que são enviados pelo usuário. Este diretório contém subpastas específicas para diferentes tipos de arquivos, como documentos e imagens de perfil.

## Estrutura do Diretório

- **documents**: Pasta destinada ao armazenamento de documentos enviados pelos usuários.
- **profile-images**: Pasta destinada ao armazenamento de imagens de perfil dos usuários.

## Considerações

- É importante garantir que as permissões de acesso ao diretório estejam configuradas corretamente para evitar acessos não autorizados.
- A implementação de uma estratégia de limpeza periódica pode ser necessária para gerenciar o espaço em disco, especialmente se o volume de uploads for alto.