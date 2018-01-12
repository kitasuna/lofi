const Future = require('fluture')

const fooFuture = Future.reject('this is an error')

fooFuture.fork(
  (x) => {
    console.error('Promise rejected:', x);
  },
  console.log);
