import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExactPlugin from 'mini-css-extract-plugin';
import path from 'path';
import webpack from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

const dev = process.env.NODE_ENV === 'development';

const config: webpack.Configuration = {
  mode: dev ? 'development' : 'production',
  entry: {
    index: './src/pages/index.tsx',
    edit: './src/pages/edit/index.tsx',
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: '[name].bundle.[contenthash].js',
    publicPath: '/',
  },
  optimization: {
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
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
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
      '~': path.resolve(__dirname, 'src/'),
      '@': path.resolve(__dirname, 'src/components/'),
    },
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public/'),
    },
    port: 3000,
    host: '0.0.0.0',
    hot: true,
    historyApiFallback: {
      rewrites: [
        { from: /^\/$/, to: '/index.html' },
        { from: /^\/edit/, to: '/edit/index.html' },
      ],
    },
  },
  watchOptions: {
    poll: 1000,
    ignored: ['node_modules'],
  },
  devtool: dev ? 'inline-source-map' : 'source-map',
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
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        diagnosticOptions: {
          semantic: true,
          syntactic: true,
        },
      },
      eslint: {
        files: './src/**/*.{ts,tsx,js,jsx}',
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
