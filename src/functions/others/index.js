import logger from '../../utils/logger'

const jsonParse = (body) => {
  try {
    return JSON.parse(body)
  } catch (error) {
    return body
  }
}

const handler = async (event, context) => {
  const response = {
    status: 200,
    body: JSON.stringify({
      message: 'Hello World! from other lambda',
      input: event
    })
  }
  logger.info(
    JSON.stringify({
      handlers: {
        '/others': (props) => {
          console.log(props)
        }
      },
      method: event.httpMethod,
      resource: event.resource,
      props: {
        body: jsonParse(event.body),
        pathParameters: event.pathParameters,
        queryStringParameters: event.queryStringParameters,
        headers: event.headers
      }
    })
  )
  return response
}

export { handler }
