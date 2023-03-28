import { CustomError, Errors } from './errors'
import { formatResponse } from './formatter'
import logger from './logger'
import pipePromises from './pipePromises'

const jsonParse = (body) => {
  try {
    return JSON.parse(body)
  } catch (error) {
    return body
  }
}

const getProps = (request) => {
  return {
    handlers: request.handlers,
    method: request.event.httpMethod,
    resource: request.event.resource,
    props: {
      body: jsonParse(request.event.body),
      pathParameters: request.event.pathParameters,
      queryStringParameters: request.event.queryStringParameters,
      headers: request.event.headers
    }
  }
}

const callFn = (request) => {
  const { handlers, method, resource, props } = request
  if (handlers[resource] && handlers[resource][method]) {
    return handlers[resource][method].fn(props)
  } else {
    throw new CustomError(Errors[4004])
  }
}

const dataToArray = (data) => (Array.isArray(data) ? data : [data])

const pipeline = pipePromises(getProps, callFn, dataToArray, formatResponse)

const route = ({ handlers, event }) => {
  try {
    return pipeline({ handlers, event })
  } catch (error) {
    if (error.loggable !== false) {
      logger.error(error)
    }
    return formatResponse({
      status: error.status || 500,
      type: error.type || 'Server Error',
      code: error.code || 500,
      message: error.message || 'Server Error'
    })
  }
}

export default route
