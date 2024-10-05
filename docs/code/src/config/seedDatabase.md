---
title: seedDatabase
description: 'Função responsável por popular o banco de dados com prioridades e tipos de lista iniciais.'
---

# seedDatabase

A função `seedDatabase` é utilizada para inicializar o banco de dados com dados padrão, caso ainda não existam. Ela insere prioridades e tipos de lista predefinidos, garantindo que o sistema tenha dados básicos para operação.

## Funcionamento

1. **Data Atual**: A função começa obtendo a data atual através do serviço `dateService.getServiceDate()`.
  
2. **Inserção de Prioridades**:
   - Verifica se já existem prioridades no banco de dados.
   - Se não houver, insere três prioridades padrão:
     - Alta
     - Média
     - Baixa
   - Cada prioridade possui um `usuarioId`, `nome`, `criadoEm` e um objeto de `personalizacao` que inclui `icone` e `cor`.

3. **Inserção de Tipos de Lista**:
   - Verifica se já existem tipos de lista no banco de dados.
   - Se não houver, insere cinco tipos de lista padrão:
     - Tarefas
     - Projetos
     - Compras
     - Metas
     - Ideias
   - Cada tipo de lista também possui um `usuarioId`, `nome`, `criadoEm` e um objeto de `personalizacao`.

4. **Tratamento de Erros**: Caso ocorra algum erro durante o processo, uma mensagem de erro é exibida no console.

## Exemplo de Uso

```typescript
import seedDatabase from './config/seedDatabase';

seedDatabase();
```

## Dependências

- `IPrioridade` e `ITipoLista`: Interfaces que definem a estrutura dos dados a serem inseridos.
- `Prioridade` e `TipoLista`: Modelos que representam as coleções no banco de dados.
- `dateService`: Serviço utilizado para obter a data atual.