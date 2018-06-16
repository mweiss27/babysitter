const webpack = require("webpack")
const WebpackDevServer = require("webpack-dev-server")
const opn = require("opn")

const config = require("./webpack.config")
let server = new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath
})

server.listen(8080, "192.168.50.158", (err, result) => {
    if (err) return console.error(err)

    opn("http://192.168.50.158:8080")
})
