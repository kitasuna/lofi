const R = require('ramda')

const add = (x, y) => {
  return x + y
}

/*
 *****EXERCISE*****
 * Given the `match` function below, use currying to make:
 * a function that will check a string for the word 'curry'
 *
 * Exercise taken from:
 * https://drboolean.gitbooks.io/mostly-adequate-guide/content/ch4.html
 */
const match = (what, str) => {
  return str.match(what)
}


module.exports = {
  add, match
}
