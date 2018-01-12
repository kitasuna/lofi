
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

const writeUsers = (users) => {
  if(Array.isArray(users)) {
    console.log('=========result of write')
    console.log(users)
    console.log('=========END')
    return true
  } else {
    return false
  }
}

module.exports = {
  getUsers,
  writeUsers
}
