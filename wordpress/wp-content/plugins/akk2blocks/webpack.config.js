const defaultConfig = require("@wordpress/scripts/config/webpack.config");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const sass = require("sass-embedded");

module.exports = {
    ...defaultConfig,
    entry: {
        blocks: ["./blocks/index.js", "./blocks/scss/style.scss"],
        frontend: "./blocks/frontend.js",
    },
    output: {
        path: path.resolve(__dirname, "./blocks/build"),
        filename: "[name].js",
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                        plugins: [
                            "@babel/plugin-transform-runtime",
                            "@babel/plugin-proposal-class-properties",
                        ],
                    },
                },
            },
            {
                test: /\.(json|geojson)$/,
                type: "json",
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            // api: "modern",
                            implementation: sass,
                            sassOptions: {
                                quietDeps: true,
                            },
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
        ],
    },
    plugins: [
        ...defaultConfig.plugins,
        new MiniCssExtractPlugin({
            filename: "[name].css",
        }),
    ],
};
