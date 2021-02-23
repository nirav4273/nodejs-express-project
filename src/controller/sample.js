// import response from "../utils/response";
// import {generateToken} from "../utils/auth";
// import {compareInput} from "../utils/encrypt";
// import {user as User} from "../models";
function sleep (ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

const findAll = async (req, res) => {
  await sleep(1000)
  res.send({
    success: true
  })
}

const getById = async (req, res) => {
  await sleep(1000)
  res.send({
    success: true
  })
}

const add = async (req, res) => {
  const postParam = req.body.name
  console.log(postParam)

  await sleep(1000)
  res.send({
    success: true
  })
}

const update = async (req, res) => {
  const postParam = req.body.name
  console.log(postParam)

  await sleep(1000)
  res.send({
    success: true
  })
}

const remove = async (req, res) => {
  console.log(req.params.id)

  await sleep(1000)
  res.send({
    success: true
  })
}

const controller = {
  add,
  update,
  findAll,
  getById,
  remove
}

export default controller
