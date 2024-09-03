const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// import { fileURLToPath } from 'url';
// import { dirname } from 'path';
// import path from 'path';
// import HtmlWebpackPlugin from 'html-webpack-plugin';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

module.exports = {
  entry: {
    showCalcTHI: './src/app.ts',
    setCity: './src/utils/setCity.ts',
    showCityResults: './src/utils/showCityResults.ts',
    getWeatherInfo: './src/data/getWeatherInfo.ts',
    countTHIDays: './src/utils/countTHIDays.ts',
    chartTHI: "./src/charts/chartTHI.ts",
    getPrecipitation: "./src/data/getPrecipitation.ts",
    chartPrecipitation: "./src/charts/chartPrecipitation.ts",
    thiTable: "./src/tables/thiTable.ts",
    precipitationTable: "./src/tables/precipitationTable.ts",
    index: "./src/index.ts"
  },
  target: 'web',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public'),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  mode: 'development',
  devtool: 'source-map',
  // devServer: {
  //   static: {
  //     directory: path.join(__dirname, './public'),
  //   },
  //   liveReload: true,
  //   hot: false,
  //   compress: true,
  //   port: 9000,
  // },
  plugins: [
    new HtmlWebpackPlugin({template: "./src/index.html", filename: 'index.html'})
  ] 
};