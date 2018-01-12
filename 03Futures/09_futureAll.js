const Future = require('fluture')

const getUsers = Future.after(10000, [])
const getComments = Future.rejectAfter(300, new Error('getComments failed'))

const test = () => {
  Future.parallel(2, [getComments, getUsers])
    .fork(
      (x) => {
        console.error('Future.parallel ended with rejection: ', x)},
      console.log
    )
}

test()
