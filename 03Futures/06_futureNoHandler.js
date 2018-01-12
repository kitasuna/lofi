const Future = require('fluture')

const fooFuture = Future.of('the answer is 42')

fooFuture.fork()
/*
 * ^^^ calling fork without providing an error handler
 * results in an error.
 * This forces us to handle any rejections
 */ 

