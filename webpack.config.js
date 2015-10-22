module.exports = {
    entry: "./src/app.js",
    output: {
        path: "./dist",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader' },
            { test: /\.json$/, loader: 'json-loader' },
            { test: /\.css$/, loader: 'style!css' }
        ]
    },
    node: {
        console: true,
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    }
};