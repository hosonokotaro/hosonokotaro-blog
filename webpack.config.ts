import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import ForkTsCheckerPlugin from 'fork-ts-checker-webpack-plugin';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExactPlugin from 'mini-css-extract-plugin';
import path from 'path';
import webpack, { Configuration as WebpackConfiguration } from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const dev = process.env.NODE_ENV === 'production';

const config: Configuration = {
  mode: dev ? 'development' : 'production',
  entry: {
    index: ['@babel/polyfill', './src/pages/index.tsx'],
    edit: ['@babel/polyfill', './src/pages/edit/index.tsx'],
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: '[name].bundle.[contenthash].js',
    publicPath: '/',
  },
  optimization: {
    chunkIds: 'named',
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/env'],
            },
          },
          {
            loader: '@linaria/webpack-loader',
            options: {
              sourceMap: dev,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExactPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: dev,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: ['file-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.ts', '.tsx'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  devServer: {
    contentBase: path.join(__dirname, 'public/'),
    port: 3000,
    host: '0.0.0.0',
    hotOnly: true,
    historyApiFallback: true,
    watchOptions: {
      poll: 1000,
      ignored: ['node_modules'],
    },
  },
  devtool: 'source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HTMLWebpackPlugin({
      chunks: ['index'],
      template: './src/pages/index.html',
      filename: path.resolve(__dirname, 'dist/index.html'),
    }),
    new HTMLWebpackPlugin({
      chunks: ['edit'],
      template: './src/pages/edit/index.html',
      filename: path.resolve(__dirname, 'dist/edit/index.html'),
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: '**/*',
          context: 'public/',
          noErrorOnMissing: true,
        },
      ],
    }),
    new ForkTsCheckerPlugin({
      typescript: {
        diagnosticOptions: {
          semantic: true,
          syntactic: true,
        },
      },
    }),
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
      analyzerMode: 'static',
      reportFilename: path.resolve(__dirname, 'report/index.html'),
    }),
    new MiniCssExactPlugin({
      filename: 'styles-[contenthash].css',
    }),
  ],
};

export default config;
