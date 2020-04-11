module.exports = {
    entry: "./index.js",
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    module: {
        rules: [{
            test: /\.css$/,
            loader: [
                'style-loader',
                'css-loader'
            ]
        }]
    },
    devServer : {
        port: 9000,
        compress: true,
        watchOptions : {
            aggregateTimeout : 300
        }
    }
};
