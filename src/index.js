#!/usr/bin/env node

import { addTask, updateTask, deleteTask, markTask } from './actions.js'

const init = () => {
  const [command, ...args] = process.argv.slice(2)

  const operations = {
    add: addTask,
    update: updateTask,
    delete: deleteTask,
    'mark-in-progress': markTask,
    'mark-done': markTask,
    list: () => console.log('listing'),
  }

  if (command === 'add' || command === 'delete') {
    return operations[command](args[0])
  }

  if (command === 'list' || command === 'update') {
    return operations[command](args[0], args[1])
  }

  if (command === 'mark-in-progress') {
    return operations[command](args[0], 'in-progress')
  }

  if (command === 'mark-done') {
    return operations[command](args[0], 'done')
  }
}

init()
