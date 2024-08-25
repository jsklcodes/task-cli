import { randomUUID, createHash } from 'crypto'

export const generateId = () => {
  return createHash('sha256').update(randomUUID()).digest('hex').slice(0, 8)
}
