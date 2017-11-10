const R = require('ramda')
const { getUsers, writeUsers } = require('./users.js')

// Filter by profession
const filterByProfession = (profession, user) => {
  if(user.profession == profession) {
    return true
  } else {
    return false
  }
}

// Filter by age
const filterByAge = (minAge, maxAge, user) => {
  if(user.age >= minAge && user.age <= maxAge) {
    return true
  } else {
    return false
  }
}


/*
 *
 * Currying exercises
 *
 */
/*
 *****EXERCISE 1*****
 * Make a curried function to filter by profession = 'Rapper'
 */
const getRappers = undefined;

/*
 *****EXERCISE 2*****
 * Use a curried curried function to get ageGroup1 and ageGroup2, below
 */
let ageGroup1 = getUsers().filter((user) => filterByAge(18, 25, user))
let ageGroup2 = getUsers().filter((user) => filterByAge(26, 34, user))

ageGroup1 = undefined
console.log(ageGroup1)

ageGroup2  = undefined
console.log(ageGroup2)


/***********************
 *
 * Composition exercises
 *
 ***********************/
const setNotify = R.curry((user) => {
  return Object.assign(
    {},
    user,
    {notify: true})
})

const updateProfession = R.curry((profession, user) => {
  return Object.assign(
    {},
    user,
    {profession: profession})
})

const user = {
    name: 'Kendrick Lamar',
    profession: 'Rapper',
    age: 28
}
/*
 *****EXERCISE 1*****
 * Use currying and composition to create a function that:
 * - accepts the above user object as an argument
 * - updates its `profession` field to be 'Verified Rapper'
 * - sets the notification flag on the user, and
 * - returns the new user object
 *
 */
const verify = undefined
const verifyAndNotify = undefined

/*
 *****EXERCISE 2*****
 * How can we use our newly composed function on the result of getRappers()?
 */
const verifiedRappers = undefined

/*
 *****EXERCISE 3*****
 * Try to compose getUsers(), getRappers(), verify(), writeUsers() into ONE function
 * HINT: Ramda has a `map` function that is curried
 */
const superF = undefined
