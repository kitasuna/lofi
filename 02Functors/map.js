const { map } = require('ramda')

const xs = [5, 3]

const result = map((x) => x + 1, xs)

console.log(result)
