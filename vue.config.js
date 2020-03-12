//read build mode from vue environment
let isDev = process.VUE_CLI_SERVICE.mode;
module.exports = {
    publicPath: '/',
    // configureWebpack:{
    //     module: {
    //         rules: [
    //             //extract all css from vue components
    //             {
    //                 test: /\.vue$/,
    //                 exclude: /node_modules/,
    //                 loader: 'vue-loader',
    //                 options: {
    //                     extractCSS: true
    //                 }
    //             }
    //         ]
    //     },
    //     plugins: [
    //         // new ManifestPlugin(),
    //         new MiniCssExtractPlugin({
    //             filename: "email_style.css",
    //         })
    //     ]


    // }, 
    devServer:{
        watchOptions: {
            poll: true
        },
        host: '0.0.0.0',
        hot: true,
        port: 8081,
        https: false,
        //public: 'localhost:8080',
        //open: 'Chrome',
        proxy: { //https://cli.vuejs.org/guide/html-and-static-assets.html#disable-index-generation
            '^/api': {
                //target: process.env.apiUrl || 'http://localhost/uvupm/api',
                target: 'http://localhost/uvupm/api',
                ws: false,
                changeOrigin: false
            },
        }
    }
  }
