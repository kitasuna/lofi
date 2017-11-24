const { compose, identity } = require('ramda')

const washInfo = '0006:0 / 0001:1131 / 0002:1222 / 0003:1322 / 0004:1431 / 0008:1613 / 0009:1711';

const tidy = compose (
  identity,
  identity
)

console.log(tidy(washInfo))
console.log('^^^^^^^^^^')
