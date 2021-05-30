const config = require('config')
const _ = require("lodash")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { User } = require("./model")

const validate = (body) => {
  // TODO: Validate req.body
  return null
}

const isRegistered = async (body) => {
  // find a user by any identifier
  const user = await User.findOne(_.pick(body, ["username", "email"]))
  console.log("user", user)
  if (!user) return false
  else return user
}

const isValidPassword = async (body, user) => {
  return await bcrypt.compare(body.password, user.password)
}

const login = async function (body) {
  validate(body)

  const user = await isRegistered(body)
  if (!user) return { err: "invalid username/email or password" }

  const valid = await isValidPassword(body, user)
  if (!valid) return { err: "invalid username/email or password" }

  const token = user.generateAuthToken()

  return token
}

// TODO: Validate login credentials

exports.login = login
