const path = require( 'path' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' ); // Simplifies creation of HTML files to serve your webpack bundles

module.exports = {
    entry: [
        './src/index.js'
    ],

    output: {
        path: path.join( __dirname, './dist' ), // Output directory
        filename: 'js/[name].[contenthash:6].js',
        chunkFilename: 'js/[name].[contenthash:6].js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    path.resolve( __dirname, 'src' )
                ],
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({ // Simplifies creation of HTML files to serve your webpack bundles
            template: './src/index.html',
            inject: true,
            minify: {
                collapseWhitespace: true,
                removeComments: true
            }
        })
    ]
};