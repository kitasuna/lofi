const promiseRejection = () => {
  return new Promise((resolve, reject) => {
    reject('this is an expected error')
  })
}

promiseRejection()
  .catch((err) => console.log('Handled: ', err))
