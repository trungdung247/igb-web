/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpack = require('webpack');

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production';
    const isAnalyze = Boolean(env?.analyze);
    const config = {
        entry: "./src/index.js",
        output: {
            filename: 'static/js/main.[contenthash:6].js',
            path: path.resolve(__dirname, 'dist'),
            publicPath: '/'
        },
        devServer: {
            hot: true,
            port: 3000,
            historyApiFallback: true,
            static: {
              directory: path.resolve(__dirname, 'public', 'index.html'),
              serveIndex: true,
              watch: true
            }
        },
        devtool: isProduction ? false : 'source-map',
        stats: {
            colors: true,
            modules: true,
            reasons: true,
            errorDetails: true
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.jsx', '.js'],
            alias: {
                App: path.resolve(__dirname, 'src/App'),
                stores: path.resolve(__dirname, 'src/stores/'),
                locales: path.resolve(__dirname, 'src/locales/'),
                config: path.resolve(__dirname, 'src/config/'),
                components: path.resolve(__dirname, 'src/components/'),
                networking: path.resolve(__dirname, 'src/networking/'),
                utils: path.resolve(__dirname, 'src/utils/'),
                assets: path.resolve(__dirname, 'src/assets/'),
                pages: path.resolve(__dirname, 'src/pages/'),
                emitter: path.resolve(__dirname, 'src/emitter'),
                examples: path.resolve(__dirname, 'src/examples/'),
                layouts: path.resolve(__dirname, 'src/layouts/'),
                routes: path.resolve(__dirname, 'src/routes'),
                "footer.routes": path.resolve(__dirname, 'src/footer.routes'),
            },
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /(node_modules|bower_components)/,
                    loader: 'babel-loader',
                    options: { presets: [
                      "@babel/preset-env", 
                      "@babel/preset-typescript", 
                      ["@babel/preset-react", { "runtime": "automatic" }]
                    ]},
                },
                {
                    test: /\.(s[ac]ss|css)$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: { sourceMap: !isProduction }
                        },
                        {
                            loader: 'sass-loader',
                            options: { sourceMap: !isProduction }
                        }
                    ]
                },
                {
                    test: /\.(jpe?g|png|svg|jpg|gif)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: isProduction ? 'static/media/[name].[contenthash:6].[ext]' : '[path][name].[ext]'
                            }
                        }
                    ]
                },
                {
                    test: /\.(eot|ttf|woff|woff2)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: isProduction ? 'static/fonts/[name].[ext]' : '[path][name].[ext]'
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: isProduction ? 'static/css/[name].[contenthash:6].css' : '[name].css'
            }),
            new Dotenv({
              path: '.env' // default is .env
            }),
            new CopyWebpackPlugin({
                patterns: [
                    {
                        from: 'public',
                        to: '.',
                        filter: (name) => {
                            return !name.endsWith('index.html')
                        }
                    }
                ]
            }),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'public', 'index.html'),
                filename: 'index.html'
            }),
            new ESLintPlugin({
                extensions: ['.tsx', '.ts', '.js', '.jsx']
            })
        ]
    }

    if (isProduction) {
        config.plugins = [
            ...config.plugins,
            new webpack.ProgressPlugin(),
            new CompressionPlugin({
                test: /\.(css|js)$/,
                algorithm: 'brotliCompress'
            }),
            new CleanWebpackPlugin()
        ];
        if (isAnalyze) {
            config.plugins = [...config.plugins, new BundleAnalyzerPlugin()]
        }
        config.optimization = {
            minimizer: [
                `...`,
                new CssMinimizerPlugin()
            ]
        }
    }
    return config;
};