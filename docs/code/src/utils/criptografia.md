---
title: criptografia
description: 'Serviço de criptografia para gerenciamento de senhas utilizando bcrypt.'
---

# CriptografiaService

O `CriptografiaService` é uma classe responsável por fornecer funcionalidades de criptografia de senhas utilizando a biblioteca `bcrypt`. Este serviço permite a criação de hashes de senhas e a verificação de senhas em relação a esses hashes.

## Estrutura da Classe

### Propriedades

- `saltRounds`: número de rounds de sal utilizados para a criptografia. O valor padrão é 10.

### Métodos

#### `criptografarSenha(senha: string): Promise<string>`

Este método recebe uma senha em formato de string e retorna uma Promise que resolve para a senha criptografada.

**Parâmetros:**
- `senha`: A senha a ser criptografada.

**Retorno:**
- Uma Promise que resolve para a senha criptografada.

#### `verificarSenha(senha: string, hash: string): Promise<boolean>`

Este método verifica se uma senha fornecida corresponde a um hash previamente gerado.

**Parâmetros:**
- `senha`: A senha a ser verificada.
- `hash`: O hash da senha que será comparado.

**Retorno:**
- Uma Promise que resolve para um booleano indicando se a senha corresponde ao hash.

## Exemplo de Uso

```typescript
import criptografiaService from './src/utils/criptografia';

const senha = 'minhaSenhaSecreta';
const hash = await criptografiaService.criptografarSenha(senha);

const isMatch = await criptografiaService.verificarSenha(senha, hash);
console.log(isMatch); // true
```

## Exportação

O serviço é exportado como uma instância única da classe `CriptografiaService`, permitindo seu uso em diferentes partes da aplicação sem a necessidade de instanciar a classe repetidamente.