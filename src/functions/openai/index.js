import { CustomError, Errors } from 'utils/errors'
import route from 'utils/route'
import * as fns from './chatgpt'

export const routes = {
  '/openai/chatgpt': {
    POST: {
      fn: (props) => fns.complete(props)
    }
  }
}

export const handler = async (event, context, callback) => {
  return route({ routes, event, context, callback })
}
