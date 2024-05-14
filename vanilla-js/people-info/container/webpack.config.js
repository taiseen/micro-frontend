const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',

    devServer: {
        port: '9000',
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),

        new ModuleFederationPlugin({
            name: 'containerFile',
            remotes: {
                nameMF : 'nameFile@http://localhost:9001/remoteFile.js',
                ageMF : 'ageFile@http://localhost:9002/remoteFile.js',
                ipMF : 'ipFile@http://localhost:9003/remoteFile.js',
            }
        }),
    ],
}