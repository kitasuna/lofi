const getUsers = () => {
  return new Promise((resolve, reject) => {
    return setTimeout(() => resolve('bar'), 10000);
  })
}

/*
 * This will reject
 */
const getComments = () => {
  return new Promise((resolve, reject) => {
    return setTimeout(() => {console.log('rejecting first promise'); reject('err');}, 300);
  })
}

const test = () => {
  const p1 = getComments()
  const p2 = getUsers()
  Promise.all([p1, p2])
    .then(() => console.log('All done'))
    .catch(() => console.log('Promise.all ended with rejection'))
}

test()
