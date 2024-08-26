<p align="right">
  <a href="./README.pt-br.md">:brazil: Read this in Brazilian Portuguese</a>
</p>

# Task CLI

Task CLI is a command-line application for task management, developed in Node.js using only native modules.

| This project was developed to solve the task of the [Task Tracker project](https://roadmap.sh/projects/task-tracker) by [roadmap.sh](https://roadmap.sh).

## Features

- Add tasks
- Update task descriptions
- Delete tasks
- Mark tasks as in-progress or done
- List tasks with option to filter by status

## Installation

1. Clone this repository
2. Navigate to the project directory
3. Run `npm link` to create a global symlink for the `task-cli` command

## Usage

The Task CLI offers the following commands:

- `task-cli add <description>`: Adds a new task
- `task-cli update <id> <new description>`: Updates the description of an existing task
- `task-cli delete <id>`: Deletes a task
- `task-cli mark-in-progress <id>`: Marks a task as in-progress
- `task-cli mark-done <id>`: Marks a task as done
- `task-cli list [filter]`: Lists all tasks or tasks filtered by status

### Task Statuses

Tasks can have one of the following statuses:

- `todo`: Pending task (default status when creating a new task)
- `in-progress`: Task in progress
- `done`: Completed task

## Project Structure

- `index.js`: Application entry point and command routing
- `actions.js`: Implementation of task management actions
- `jsonHandler.js`: Functions for manipulating the JSON storage file
- `utils.js`: Utility functions, such as ID generation

## Storage

Tasks are stored in a local JSON file named `tasks.json`.

## License

This project is licensed under the [MIT License](LICENSE).
