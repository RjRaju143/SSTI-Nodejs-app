const express = require("express")
const pug = require("pug")
var bodyParser = require("body-parser")

const app = express()
app.set("view engine", "pug")
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", function (req, res) {
  res.render("index")
})

app.post("/render", function (req, res) {
  template = req.body.template || "h1 No template provided"

  value = pug.render(template)
  res.render("render", { value: value })
})

app.listen(5000)
