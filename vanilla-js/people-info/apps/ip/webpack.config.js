const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',

    devServer: {
        port: '9003',
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),

        new ModuleFederationPlugin({
            name: 'ipFile',
            filename: 'remoteFile.js',
            exposes: {
                './IpIndex': './src/uiLogic',
            },
            shared: ['chance'],
        }),
    ],
}