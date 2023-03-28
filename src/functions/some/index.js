const handler = async (event, context) => {
  const response = {
    statusCd: 200,
    body: JSON.stringify({
      message: 'Hello World! from other lambda',
      input: event
    })
  }
  return response
}

export { handler }
