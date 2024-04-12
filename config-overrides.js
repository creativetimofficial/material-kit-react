const { query } = require("express");
const { ProvidePlugin } = require("webpack");

module.exports = function (config, env) {
  return {
    ...config,
    module: {
      ...config.module,
      rules: [
        ...config.module.rules,
        {
          test: /\.m?[jt]sx?$/,
          enforce: "pre",
          use: ["source-map-loader"],
        },
        {
          test: /\.m?[jt]sx?$/,
          resolve: {
            fullySpecified: false,
          },
        },
      ],
    },
    plugins: [
      ...config.plugins,
      new ProvidePlugin({
        process: "process/browser",
      }),
    ],
    resolve: {
      ...config.resolve,
      fallback: {
        assert: require.resolve("assert"),
        buffer: require.resolve("buffer"),
        crypto: require.resolve("crypto-browserify"),
        http: require.resolve("stream-http"),
        https: require.resolve("https-browserify"),
        stream: require.resolve("stream-browserify"),
        url: require.resolve("url/"),
        zlib: require.resolve("browserify-zlib"),
        vm: require.resolve("vm-browserify"),
        querystring: require.resolve("querystring-es3"),
        path: require.resolve("path-browserify"),
        fs: require.resolve("browserify-fs"),
        net: require.resolve("net"),
      },
    },
    ignoreWarnings: [/Failed to parse source map/],
  };
};
