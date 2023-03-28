const Errors = {
  4001: {
    status: 400,
    type: 'Bad Request',
    code: 4001,
    message: 'Missing required parameter: {0}',
    loggable: true
  },
  4002: {},
  4003: {},
  4004: {
    status: 400,
    type: 'Bad Request',
    code: 4004,
    message: 'Unknown router path: {0}',
    loggable: true
  }
}

class CustomError extends Error {
  constructor(error) {
    super(error.message)
    this.status = error.status
    this.type = error.type
    this.code = error.code
    this.message = error.message
    this.loggable = error.loggable
  }
}

const errorToJson = (error) =>
  JSON.stringify(
    Object.getOwnPropertyNames(error).reduce((acc, key) => {
      acc[key] = error[key]
      return acc
    }, {})
  )

export { Errors, CustomError, errorToJson }
