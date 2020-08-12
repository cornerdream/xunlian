const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports={
    mode:'none',
    devtool:'source-map',
    entry:{
        app:'./src//main.js'
    },
    output:{
        path:path.join(__dirname,'dist'),
        filename:'[name].js'
    },
    resolve:{
        alias:{
            'vue':'vue/dist/vue.js'
        }
    },
    devServer:{
        contentBase:path.join(__dirname,'dist'),
        inline:true,
        compress:true,
        hot:true,
        open:true
    },
    module:{
        rules:[
            {
                test:/.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/.less$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test:/.(png|jpe?g|gif|svg)(\?.*)?$/,
                use:{
                    loader:'url-loader'
                }
            },
            {
                test:/.js$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env']
                    }
                },
                exclude:'/node_modules',
                include:path.resolve(__dirname,'src')
            },{
                test:/.vue$/,
                use:'vue-loader',
                exclude:'/node_modules',
                include:path.resolve(__dirname,'src')
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            title:'vue-webpack',
            filename:'index.html',
            template:'./public/index.html'
        }),
        new CopyWebpackPlugin({
            patterns:[
                {
                    
                    from:path.resolve(__dirname,'./src/assets'),
                    to:path.resolve(__dirname,'./dist/assets')
                    
                }
            ]
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            BASE_URL:JSON.stringify("")
        })
    ]
}