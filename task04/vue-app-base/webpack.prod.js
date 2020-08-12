const common = require('./webpack.common');
const merge = require('webpack-merge');
module.exports=merge(common,{
    mode:'"production"',
    API:'"http://192.168.1.151:8181"'
})