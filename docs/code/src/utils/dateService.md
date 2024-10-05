---
title: dateService
description: 'Classe responsável por manipulações de data, incluindo obtenção da data atual e remoção de horas de uma data específica.'
---

# dateService

A classe `DataService` fornece métodos para manipulação de datas. Ela é projetada para facilitar a obtenção da data atual e a remoção das horas de uma data específica.

## Métodos

### `getServiceDate()`

```typescript
getServiceDate(): Date
```

Este método retorna a data atual ajustada para o fuso horário local, removendo o deslocamento de tempo.

#### Exemplo de uso:

```typescript
const dataService = new DataService();
const dataAtual = dataService.getServiceDate();
console.log(dataAtual); // Exibe a data atual sem o deslocamento de fuso horário
```

### `getDataSemHoras(date: Date)`

```typescript
getDataSemHoras(date: Date): Date
```

Este método recebe uma instância de `Date` e retorna uma nova instância de `Date` com as horas, minutos, segundos e milissegundos zerados.

#### Exemplo de uso:

```typescript
const dataService = new DataService();
const dataComHoras = new Date('2023-10-01T15:30:00');
const dataSemHoras = dataService.getDataSemHoras(dataComHoras);
console.log(dataSemHoras); // Exibe a data '2023-10-01T00:00:00'
```

## Exportação

A instância da classe `DataService` é exportada como padrão, permitindo fácil acesso aos métodos em outros módulos.