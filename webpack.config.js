const webpack = require('webpack');
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

require('./mock/server.js');
module.exports = {
    entry:'./app/index.jsx',
    output:{
        path:__dirname+"./public",
        filename: "script/[name].[hash:8].js",
        jsonpFunction:'Topthinking',
        chunkFilename: "script/[name].[chunkhash:8].js"
    },
    resolve:{
        extensions:['.js','.jsx']
    },
    module:{
        loaders:[
            {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                loader:'babel-loader',
                query:{
                    "presets":['react','es2015']
                }
            },
            { 
                test: /\.less$/, 
                exclude: /node_modules/, 
                loader: 'style-loader!css-loader!postcss-loader!less-loader' 
            },
            { 
                test: /\.css$/, 
                exclude: /node_modules/, 
                loader: 'style-loader!css-loader!postcss-loader' 
            },
            { 
                test:/\.(png|gif|jpg|jpeg|bmp)$/, 
                loader:'url-loader?limit=5000' 
            },  // 限制大小5kb
            { 
                test:/\.(woff|woff2|svg|ttf|eot)($|\?)/, 
                loader:'file-loader?limit=5000'
            } // 限制大小小于5k
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            favicon:'./app/static/img/1.ico',
            template:'./app/index.html'
        }),

        new webpack.LoaderOptionsPlugin({
            options:{
                postcss:()=>{
                  return [
                    require('autoprefixer')({
                      browsers: ['last 10 versions','ie>=8','>1% in CN']
                    })
                  ]
                }
            }
        }),

        new OpenBrowserPlugin({
            url:'http://localhost:8080'
        }),

        new webpack.HotModuleReplacementPlugin()
    ],

    devServer:{
        proxy:{
            '/api':{
                target:"http://localhost:3000",
                secure:false
            }
        },

        contentBase:'./public',
        historyApiFallback:true,
        inline:true,
        hot:true
    }
}