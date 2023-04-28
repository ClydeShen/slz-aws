export const formatResponse = (response) => {
  console.log(JSON.stringify(response))
  return {
    statusCode: response.status || 200,
    headers: {
      // 'Access-Control-Allow-Origin': '*',
      // 'Access-Control-Allow-Credentials': true
    },
    body: JSON.stringify(response)
  }
}
