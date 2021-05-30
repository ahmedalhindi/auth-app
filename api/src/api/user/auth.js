const _ = require("lodash")
const router = require("express").Router()
const auth = require("./authServices")

router.post("/", async (req, res) => {
  console.log("req.body", req.body)
  token = await auth.login(req.body)
  if (token.err) return res.status(400).send(token.err)

  res.header("x-auth-token", token).status(200).send(token)
})

module.exports = router
