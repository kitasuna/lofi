const promiseUndefinedError = () => {
  return new Promise((resolve, reject) => {
    return value
  })
}

promiseUndefinedError()
  .catch((err) => console.log('Handled: ', err))
