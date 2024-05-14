const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',

    devServer: {
        port: '9002',
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),

        new ModuleFederationPlugin({
            name: 'ageFile',
            filename: 'remoteFile.js',
            exposes: {
                './AgeIndex': './src/uiLogic',
            },
            shared: ['chance'],
        }),
    ],
}