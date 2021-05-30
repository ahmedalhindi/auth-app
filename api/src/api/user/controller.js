const router = require("express").Router()
const User = require("./services")
const auth = require("../../middleware/auth")

router.get("/me", auth,  async (req, res) => {
  const user =  await User.findId(req.user._id)
  res.status(400).send(user)
})

router.post("/", async (req, res) => {
  const user = await User.register(req.body)
  if (user.err) return res.status(400).send(user.err)

  res.header("x-auth-token", user[1]).status(200).send(user[0])
})

module.exports = router
