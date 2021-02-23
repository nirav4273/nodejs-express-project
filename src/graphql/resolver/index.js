const userItems = [
  {
    email: 'test',
    phone: '1233',
    id: 1
  },
  {
    email: 'ema',
    phone: '545',
    id: 2
  },
  {
    email: 'GIR',
    phone: '55656',
    id: 3
  }
]

const root = {
  users: () => {
    return userItems
  },
  addUser: ({ input }) => {
    console.log(input)
    return input
  }
}

export default root
