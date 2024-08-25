import fs from 'node:fs/promises'

const fileName = 'tasks.json'

export const getJSONFileData = async () => {
  try {
    const data = await fs.readFile(fileName)
    return JSON.parse(data)
  } catch (error) {
    if (error.code === 'ENOENT') {
      return []
    }
    throw error
  }
}

export const setJSONFileData = async data => {
  await fs.writeFile(fileName, JSON.stringify(data, null, 2), 'utf8')
}
