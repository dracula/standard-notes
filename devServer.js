const http = require("http")

const static = require("node-static")

const port = process.argv[2] || "8080"

const dir = new static.Server(__dirname, {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "*",
  },
})

http
  .createServer(function (req, res) {
    dir.serve(req, res)
  })
  .listen(port)
