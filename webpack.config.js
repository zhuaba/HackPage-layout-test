var path=require('path');
var HtmlWebpackPlugin=require('html-webpack-plugin');
var webpack=require('webpack');

module.exports={
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname,'build'),
        filename:'bundle.js'
    },
    mode:'development',
    devServer:{
        contentBase:'./build',
        hot:true
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'   //根据模板生成打包html文件；
        }),
        new webpack.HotModuleReplacementPlugin()  //配置实时热更新
    ],
    module:{
        rules:[
            {
                test:/\.jsx?$/,
                exclude:/node_modules/,
                loader:'babel-loader',
                query:{
                    presets:['es2015','react']
                }
            },
            {
                test:/\.(png|jpg|gif)$/,
                loader:'url-loader?limit=8192'
            },{
                test:/\.css$/,
                loader:['style-loader','css-loader']
            }
        ]
    }
}