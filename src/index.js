#!/usr/bin/env node

import { addTask, updateTask, deleteTask } from './actions.js'

const init = () => {
  const [command, ...args] = process.argv.slice(2)

  const operations = {
    add: addTask,
    update: updateTask,
    delete: deleteTask,
    'mark-in-progress': () => console.log('marking as in progress'),
    'mark-done': () => console.log('marking as done'),
    list: () => console.log('listing'),
  }

  if (command === 'add' || command === 'delete') {
    return operations[command](args[0])
  }

  if (
    command === 'list' ||
    command === 'update' ||
    command === 'mark-in-progress' ||
    command === 'mark-done'
  ) {
    return operations[command](args[0], args[1])
  }
}

init()
