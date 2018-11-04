const path = require('path')
const webpackNodeEexternals = require('webpack-node-externals');
const { ReactLoadablePlugin } = require('react-loadable/webpack');

module.exports = {
    devServer: {
        hot: true
    },
    // Inform wepack that we're building a bundle 
    // for nodeJS, rather than for the browser
    target: 'node',

    // Tell webpack the root file of our server application
    entry: './server/index.js',

    // Tell webpack where to put the output file 
    // that is generated
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },

    // Tell webpack to run babel on every file it runs through
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    plugins: ["@babel/plugin-syntax-dynamic-import", "@babel/plugin-proposal-class-properties",
                        "react-loadable/babel"],
                    presets: [
                        "@babel/preset-react",
                        "@babel/preset-env"
                    ]
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'css-loader/locals',
                        options: {
                            modules: true,
                            localIdentName: '[local]'
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                            outputPath: ''
                        }
                    }
                ]
            }
        ]
    },
    externals: [webpackNodeEexternals()]
}