const _ = require("lodash")
const bcrypt = require("bcrypt")
const { User } = require("./model")

const findId = async function (id) {
  const user = await User.findById(id).select("-password")

  return _.pick(user, ["_id", "username", "email"])
}

const register = async function (body) {
  // TODO: Joi Validation

  let user = await User.findOne(_.pick(body, ["email"]))
  if (user) return { err: "User already registerd" }

  user = new User(_.pick(body, ["username", "email", "password"]))
  const salt = await bcrypt.genSalt(10)
  user.password = await bcrypt.hash(user.password, salt)

  await user.save()

  const token = user.generateAuthToken()

  return [_.pick(user, ["_id", "username", "email"]), token]
}

exports.register = register
exports.findId = findId
