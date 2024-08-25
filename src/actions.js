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
