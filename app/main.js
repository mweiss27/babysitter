const webpack = require("webpack")
const WebpackDevServer = require("webpack-dev-server")
const opn = require("opn")

const addr = "localhost"
const port = 3000

const config = require("./webpack.config")
let server = new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath
})

server.listen(port, addr, (err, result) => {
    if (err) return console.error(err)

    opn(`http://${addr}:${port}`)
})
