
const add = (x, y) => {
  return x + y
}

const result = add(3, 5)
//result: 8

const onlyOne = add(3)
//NaN

/*
const badAdd = (3, undefined) => {
  return 3 + undefined
}
//NaN
*/

// Currying: each function takes in one argument at a time
// Think of it like this:
// add(3)(5)
// Instead of trying to execute, it returns another function
// that takes one less argument

// Remember this? We don't want this
  /*
const onlyOne = add(3)
const badAdd = (3, undefined) => {
  return 3 + undefined
}
*/

// We want this
  /*
const onlyOne = add(3)
const goodAdd = (y) => {
  return 3 + y
}
*/

// Javascript functions can't be curried by default
// so, this doesn't happen. We need help. We need...
//
// RAMDA
// (or lodash/fp, or sanctuary...)

const R = require('ramda')

const curriedAdd = R.curry(add)

const add3 = curriedAdd(3)

add3(5)
add3(10)
add3(15)

// Filter by age
const ucFilterByAge = (minAge, maxAge, user) => {
  if(user.age >= minAge && user.age <= maxAge) {
    return true
  } else {
    return false
  }
}

const getUsers = () => {
  return [
    {
      name: 'James Murphy',
      profession: 'Producer',
      age: 25
    },
    {
      name: 'BROCKHAMPTON',
      profession: 'Rapper',
      age: 19
    },
    {
      name: 'Jay-Z',
      profession: 'Rapper',
      age: 72
    },
    {
      name: 'Rostam',
      profession: 'Composer',
      age: 43
    },
    {
      name: 'Ghostface Killah',
      profession: 'Rapper',
      age: 99
    },
    {
      name: 'Andrew Bird',
      profession: 'Violinist',
      age: 32
    },
    {
      name: 'St. Vincent',
      profession: 'Guitarist',
      age: 32
    },
    {
      name: 'Amine',
      profession: 'Rapper',
      age: 21
    },
  ]
}

let ageGroup1 = getUsers().filter((user) => ucFilterByAge(18, 25, user))

let ageGroup2 = getUsers().filter((user) => ucFilterByAge(26, 34, user))

let ageGroup3 = getUsers().filter((user) => ucFilterByAge(26, 999, user))
  //
// Try doing it with the uncurried version here
  /*
const brokenFilter = ucFilterByAge(18, 25)
console.log('^^^ just called broken filter')
*/

/*
 * TypeError: Cannot read property 'age' of undefined
 */

// Maybe do this as an exercise
const cFilterByAge = R.curry(ucFilterByAge)
const age18To25  = cFilterByAge(18, 25)
const age26To34  = cFilterByAge(26, 34)
const age34AndUp = cFilterByAge(34, 999)

ageGroup1 = getUsers().filter(age18To25)
console.log(ageGroup1)

ageGroup2  = getUsers().filter(age26To34)
console.log(ageGroup2)
 
ageGroup3 = getUsers().filter(age34AndUp)
console.log(ageGroup3)

// Now for composition
// f . g = f ( g ( x ) )
// Execute g with some input. The output of g has to become the input of f
// IMPORTANT: THE SECOND FUNCTION GETS EXECUTED FIRST (see nested notation above)

const isRapper = (user) => user.profession == 'Rapper'
const getRappers = (users) => users.filter(isRapper)
const getYoungPeople = (users) => users.filter(age18To25)
const youngRappers = R.compose(getRappers, getYoungPeople, getUsers)
  //^^ not sure if I like this

  console.dir(youngRappers())
  console.log('done?')
// Why write code like this? Small, atomic functions are easier to test and debug
