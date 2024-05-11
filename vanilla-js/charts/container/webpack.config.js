const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',

    devServer: {
        port: 8001,
    },

    plugins: [
        // 🟩 webpack automatically add js file in html tag, inside its id attribute
        // 🟩 so no <script> tag need inside html body tag...
        // 🟩 so - for running a micro-frontEnd app till this setup is OK...
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),

        // 🟩 import pattern, from other micro-frontend app
        // 🟩 by the help of Module Federation Plugin
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                piChartMFApp: 'piChart@http://localhost:8002/remoteEntry.js',
                barChartMFApp: 'barChart@http://localhost:8003/remoteEntry.js',
                lineChartMFApp: 'lineChart@http://localhost:8004/remoteEntry.js',
            },
        }),
    ]
}