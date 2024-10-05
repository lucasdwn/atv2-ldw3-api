---
title: personalizacao
description: 'Funções para gerar personalizações aleatórias, incluindo ícones e cores.'
---

# personalizacao.ts

Este módulo contém funções relacionadas à personalização de elementos, permitindo a geração de ícones e cores aleatórias.

## Importações

O arquivo importa as seguintes dependências:

- `IPersonalizacao` da interface `../interfaces/IPersonalizacao`
- `dateService` do módulo `./dateService`

## Constantes

- `icones`: Um array de strings que contém ícones representados por emojis.
- `cores`: Um array de strings que contém códigos de cores em formato hexadecimal.

## Funções

### `getPersonalizacaoAleatoria()`

```typescript
export function getPersonalizacaoAleatoria(): IPersonalizacao
```

Esta função gera uma personalização aleatória, retornando um objeto que implementa a interface `IPersonalizacao`. O objeto contém:

- `icone`: Um ícone aleatório selecionado do array `icones`.
- `cor`: Uma cor aleatória selecionada do array `cores`.
- `criadoEm`: A data em que a personalização foi criada, obtida através do `dateService`.

### Exemplo de Uso

```typescript
const personalizacao = getPersonalizacaoAleatoria();
console.log(personalizacao);
```

Este exemplo demonstra como chamar a função `getPersonalizacaoAleatoria` e exibir a personalização gerada no console.