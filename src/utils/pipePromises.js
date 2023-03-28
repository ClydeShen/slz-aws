const pipePromises = (fns) => (initialValue) =>
  fns.reduce((promise, fn) => promise.then(fn), Promise.resolve(initialValue))
export default pipePromises
