import { getJSONFileData, setJSONFileData } from './jsonHandler.js'
import { generateId } from './utils.js'

export const addTask = async description => {
  const tasks = await getJSONFileData()

  if (!description) {
    console.error(
      'You need to provide a description for the task. Use `task-cli add <description>`.'
    )
    return
  }

  const newTask = {
    id: generateId(),
    description,
    status: 'todo',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }

  tasks.push(newTask)
  await setJSONFileData(tasks)
  console.log(`Task added successfully (ID: ${newTask.id})`)
}

export const updateTask = async (id, newDescription) => {
  const tasks = await getJSONFileData()

  if (!id || !newDescription) {
    console.error(
      'Provide the necessary parameters. Use `task-cli update <id> <newDescription>`.'
    )
    return
  }

  const taskToUpdate = tasks.find(task => task.id === id)

  taskToUpdate.description = newDescription
  taskToUpdate.updatedAt = new Date().toISOString()
  await setJSONFileData(tasks)
}

export const deleteTask = async id => {
  let tasks = await getJSONFileData()

  if (!id) {
    console.error(
      'You need to provide an ID for the task. Use `task-cli delete <id>`.'
    )
    return
  }

  tasks = tasks.filter(task => task.id !== id)
  await setJSONFileData(tasks)
}

export const markTask = async (id, type) => {
  const tasks = await getJSONFileData()
  const taskToMark = tasks.find(task => task.id === id)

  if (!id) {
    console.error(
      `You need to provide an ID for the task. Use \`task-cli mark-${type} <id>\`.`
    )
    return
  }

  taskToMark.status = type
  await setJSONFileData(tasks)
}

export const listTask = async filter => {
  const tasks = await getJSONFileData()
  let taskToList = tasks
  let numberOfTasks = taskToList.length

  if (taskToList.length === 0) {
    console.log('No tasks found.')
    return
  }

  if (filter) {
    taskToList = tasks.filter(task => task.status === filter)
    numberOfTasks = taskToList.length

    if (taskToList.length === 0) {
      console.log(
        `There is no task with a${
          filter === 'in-progress' ? 'n' : ''
        } ${filter} status.`
      )
      return
    }
  }

  console.log(
    `\nShowing ${numberOfTasks} task${numberOfTasks > 1 ? 's' : ''}:\n`
  )

  taskToList.map(task => {
    console.log(`${task.id} → ${task.description} [${task.status}]`)
    console.log(`| createdAt: ${task.createdAt}`)
    console.log(`| updated at: ${task.updatedAt}\n`)
  })
}
