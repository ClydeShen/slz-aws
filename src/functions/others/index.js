const handler = async (event, context) => {
  const response = {
    status: 200,
    body: JSON.stringify({
      message: 'Hello World! from other lambda',
      input: event
    })
  }
  return response
}

export { handler }
