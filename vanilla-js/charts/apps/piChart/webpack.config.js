// 🟥 this approach not work 🟥
// import HtmlWebpackPlugin from 'html-webpack-plugin'; 

const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',

    devServer: {
        port: 8002,
    },

    plugins: [
        // 🟩 webpack automatically add js file in html tag, inside its id attribute
        // 🟩 so no <script> tag need inside html body tag...
        // 🟩 so - for running a micro-frontEnd app till this setup is OK...
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),

        // 🟩 export pattern, from this micro-frontend app
        // 🟩 by the help of Module Federation Plugin
        new ModuleFederationPlugin({
            name: 'piChart',
            filename: 'remoteEntry.js',
            exposes: {
                './PiChartIndex': './src/index',
            },
            shared: ["echarts"],
        })
    ]
}