const webpack = require("webpack")
const WebpackDevServer = require("webpack-dev-server")
const opn = require("opn")

const config = require("./webpack.config")
let server = new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath
})

server.listen(3000, "localhost", (err, result) => {
    if (err) return console.error(err)

    opn("http://localhost:3000")
})
