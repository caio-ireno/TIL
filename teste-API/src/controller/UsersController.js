const users = [
  {id: 1, name: 'nathalia'},
  {id: 2, name: 'Matheus'},
  {id: 3, name: 'Maia'},
]

function usersList(req, res) {
  return res.json(users)
}

function user(req, res) {
  const userId = parseInt(req.params.userId)

  let user = null
  users.forEach((val) => {
    if(val.id === userId) {
      user = val
    }
  })

  if(!user) return res.status(404).end()

  return res.json(user)
}

function createUser(req, res) {
  const body = req.body
  users.push(body)
  return res.json(body)
}

module.exports = {
  usersList,
  user,
  createUser,
}