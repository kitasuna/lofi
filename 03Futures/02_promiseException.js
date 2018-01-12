const promiseException = () => {
  return new Promise((resolve, reject) => {
    throw 'this is an unexpected error'
  })
}

promiseException()
  .catch((err) => console.log('Handled: ', err))
