const path = require("path");

module.exports = {
  entry: "./timeTracker.js", // Path to your main file
  output: {
    filename: "bundle.js", // Name of the bundled file
    path: path.resolve(__dirname, "dist"), // Output directory
  },
  mode: "development", // Set the mode to 'development' or 'production'
};
