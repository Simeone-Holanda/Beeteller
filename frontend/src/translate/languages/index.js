import { messages as portugueseMessages } from './pt'
import { messages as englishMessages } from './en'

const messages = {
    ...portugueseMessages,
    ...englishMessages
}
console.log(messages)
export { messages }