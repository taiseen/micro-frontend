const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',

    devServer: {
        port: '9001',
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),

        new ModuleFederationPlugin({
            name: 'nameFile',
            filename: 'remoteFile.js',
            exposes: {
                './NameIndex': './src/uiLogic',
            },
            shared: ['chance'],
        }),
    ],
}