import route from 'utils/route'
import * as fns from './chatgpt'

export const routes = {
  '/openai/chatgpt': {
    POST: {
      fn: (props) => fns.complete(props)
    }
  },
  '/openai/test': {
    GET: {
      fn: (props) => fns.testFn(props)
    }
  }
}

export const handler = async (event, context, callback) => {
  return route({ routes, event, context, callback })
}
