var path = require("path")
var webpack = require("webpack")

module.exports = {
    entry: ["./src/index.js"],
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: "/build/"
    },
    resolve: {
        alias: {
            node_modules: path.join(__dirname, "node_modules"),
            actions: path.join(__dirname, "src/actions"),
            components: path.join(__dirname, "src/components"),
            containers: path.join(__dirname, "containers"),
            styles: path.join(__dirname, "src/styles"),
            util: path.join(__dirname, "src/util")
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: ["babel-loader"],
                include: path.join(__dirname, "src")
            },
            {
                test: /\.s?css$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: [{ loader: "file-loader?name=font/[name]__[hash:base64:5].[ext]" }]
            }
        ]
    }
}
