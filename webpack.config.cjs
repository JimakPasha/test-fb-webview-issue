const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');

const retryScript = `(function(){const i={};document.addEventListener("error",function(s){const e=s.target;if(!e||e.tagName!=="SCRIPT"&&!(e.tagName==="LINK"&&(e.rel==="stylesheet"||e.rel==="preload"&&e.as==="style")))return;const a=e.src||e.href;if(!a)return;const r=a.replace(/([?&])retry=\\d+(&?)/,(t,c,d)=>d?c:""),n=i[r]=(i[r]||0)+1;if(n>5){let t=!1;try{t=new URL(r).origin===window.location.origin}catch(c){}if(t)throw new Error("Failed to load resource after 5 retries: "+r);return}s.stopImmediatePropagation();const l=r.indexOf("?")!==-1?"&":"?",o=r+l+"retry="+n,m=Math.random()*Math.min(1e4,1e3*Math.pow(2,n-1));setTimeout(function(){if(e.tagName==="SCRIPT"){const t=document.createElement("script");t.src=o,e.defer&&(t.defer=!0),e.async&&(t.async=!0),e.crossOrigin&&(t.crossOrigin=e.crossOrigin),document.head.appendChild(t)}else{const t=document.createElement("link");t.rel=e.rel,t.href=o,e.as&&(t.as=e.as),e.crossOrigin&&(t.crossOrigin=e.crossOrigin),document.head.appendChild(t)}},m)},!0)})();`;

module.exports = {
  mode: 'production',
  entry: './src/main.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'static/js/[name].[contenthash:8].js',
    chunkFilename: 'static/js/[name].[contenthash:8].chunk.js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader' },
          { loader: 'ts-loader', options: { transpileOnly: true } },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.json'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './webpack.index.html',
      filename: 'index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    {
      apply(compiler) {
        compiler.hooks.compilation.tap('InjectRetryScript', (compilation) => {
          HtmlWebpackPlugin.getHooks(compilation).afterTemplateExecution.tapAsync(
            'InjectRetryScript',
            (data, cb) => {
              data.html = data.html.replace(
                '<head>',
                '<head><script>' + retryScript + '</script>'
              );
              cb(null, data);
            }
          );
        });
      },
    },
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          compress: { ecma: 5, inline: 2 },
          mangle: { safari10: true },
        },
      }),
    ],
    splitChunks: {
      chunks: 'all',
      name: false,
    },
    runtimeChunk: true,
  },
};
