---
title: Procfile
description: 'Arquivo de configuração para o processo de execução da aplicação web.'
---

# Procfile

O `Procfile` é um arquivo utilizado para definir os processos que serão executados pela aplicação em ambientes de produção, como o Heroku. Ele especifica como a aplicação deve ser iniciada.

## Estrutura

O conteúdo do `Procfile` é simples e consiste em uma linha que define o comando a ser executado. No caso deste arquivo, temos:

```
web: node dist/index.js
```

### Explicação dos componentes:

- **web**: Este é o tipo de processo que está sendo definido. O Heroku, por exemplo, utiliza este tipo para identificar que este é um processo web que deve ser exposto na porta padrão.
  
- **node dist/index.js**: Este é o comando que será executado para iniciar a aplicação. O Node.js é utilizado para executar o arquivo `index.js` que está localizado na pasta `dist`, que geralmente contém o código transpilado da aplicação.

## Considerações

- Certifique-se de que o arquivo `index.js` esteja presente na pasta `dist` antes de iniciar a aplicação.
- O `Procfile` deve estar localizado na raiz do projeto para que seja reconhecido pelo ambiente de execução.