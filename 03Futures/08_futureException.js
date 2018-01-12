const Future = require('fluture')

const fooFuture = Future(function computation(reject, resolve){
  throw new Error('a crazy error')
});

try {
  fooFuture.fork((x) => {console.error('FUTURE REJECT BRANCH:', x)}, console.log)
} catch (err) {
  console.log('HANDLED IN TRY CATCH', err)
}
