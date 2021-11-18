const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  mode: "development",
  resolve: {
    alias: {
      "@": require("path").resolve(__dirname, "src"),
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  //   css: {
  //     loaderOptions: {
  //       sass: {
  //         data: `
  //           @import "src/assets/scss/mixins";
  //           @import "src/assets/scss/variables";
  //         `,
  //       },
  //     },
  //   },
  plugins: [new VueLoaderPlugin()],
};
