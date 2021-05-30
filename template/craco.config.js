
module.exports = {
  style: {
    postcss: {
      plugins: [
        require("autoprefixer"),
        require("tailwindcss")
      ],
    },
  },
  plugins: [
    {
      plugin: require("craco-alias"),
      options: {
        source: "tsconfig",
        baseUrl: "./src",
        tsConfigPath: "./tsconfig.paths.json"
      }
    }
  ]
};
