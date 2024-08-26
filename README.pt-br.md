<p align="right">
  <a href="./README.md">:us: Ler isso em Inglês</a>
</p>

# Task CLI

Task CLI é uma aplicação de linha de comando para gerenciamento de tarefas, desenvolvida em Node.js utilizando apenas módulos nativos.



## Funcionalidades

- Adicionar tarefas
- Atualizar descrições de tarefas
- Excluir tarefas
- Marcar tarefas como em progresso ou concluídas
- Listar tarefas com opção de filtro por status

## Instalação

1. Clone este repositório
2. Navegue até o diretório do projeto
3. Execute `npm link` para criar um link simbólico global para o comando `task-cli`

## Uso

O Task CLI oferece os seguintes comandos:

- `task-cli add <descrição>`: Adiciona uma nova tarefa
- `task-cli update <id> <nova descrição>`: Atualiza a descrição de uma tarefa existente
- `task-cli delete <id>`: Exclui uma tarefa
- `task-cli mark-in-progress <id>`: Marca uma tarefa como em progresso
- `task-cli mark-done <id>`: Marca uma tarefa como concluída
- `task-cli list [filtro]`: Lista todas as tarefas ou as tarefas filtradas por status

### Status das Tarefas

As tarefas podem ter um dos seguintes status:

- `todo`: Tarefa pendente (status padrão ao criar uma nova tarefa)
- `in-progress`: Tarefa em andamento
- `done`: Tarefa concluída

## Estrutura do Projeto

- `index.js`: Ponto de entrada da aplicação e roteamento de comandos
- `actions.js`: Implementação das ações de gerenciamento de tarefas
- `jsonHandler.js`: Funções para manipulação do arquivo JSON de armazenamento
- `utils.js`: Funções utilitárias, como geração de IDs

## Armazenamento

As tarefas são armazenadas em um arquivo JSON local chamado `tasks.json`.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
