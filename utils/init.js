const welcome = require("cli-welcome");
const pkg = require("./../package.json");
const unhandled = require("cli-handle-unhandled");

module.exports = ({ clear = true }) => {
  unhandled();
  welcome({
    title: `OctoSearch CLI`,
    tagLine: `by Pradumna Saraf`,
    version: pkg.version,
    bgColor: "#FF5733",
    color: "#000000",
    bold: true,
    clear,
  });
};
