const { concat, compose, join, toUpper } = require('ramda')

/*
 * Adapted from:
 * https://drboolean.gitbooks.io/mostly-adequate-guide/content/ch5.html
 */

/*
 * String -> String
 */
const excite = (str) => {
  return concat(str, '!!!')
}

/*
 * String -> String
 */
const greet = (name) => {
  return "Hello, " + name
}

module.exports = {
  compose, excite, toUpper, greet
}
