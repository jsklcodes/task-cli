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
