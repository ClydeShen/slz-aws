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
