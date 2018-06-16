var path = require("path")
var webpack = require("webpack")

module.exports = {
    //"webpack-dev-server/client?http://localhost:3000",
    entry: ["./src/index.js"],
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: "/build/"
    },
    resolve: {
        alias: {
            styles: path.join(__dirname, "styles")
        }
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ["babel-loader"],
                include: path.join(__dirname, "src")
            },
            {
                test: /\.s?css$/,
                loaders: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: [{ loader: "file-loader?name=font/[name]__[hash:base64:5].[ext]" }]
            }
        ]
    }
}
