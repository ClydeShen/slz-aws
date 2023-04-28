import logger from 'utils/logger'

export const complete = async (params) => {
  try {
    const response = {
      statusCd: 200,
      body: JSON.stringify({
        message: 'Hello World! from OpenAI',
        input: params
      })
    }
    return response
  } catch (error) {
    throw new CustomError(Errors[4001])
  }
}

export const testFn = async (params) => {
  try {
    const response = {
      statusCd: 200,
      body: JSON.stringify({
        message: 'Hello World! from OpenAI',
        input: params
      })
    }
    logger.info(JSON.stringify(response))
    return response
  } catch (error) {
    throw new CustomError(Errors[4001])
  }
}
