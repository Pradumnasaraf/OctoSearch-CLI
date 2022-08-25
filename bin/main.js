#! /usr/bin/env node

const init = require("../utils/init");
const cli = require("../utils/cli");
const log = require("../utils/log");
const Search = require("../data/outputData");
const search = new Search();

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

(async () => {
  init({ clear });
  input.includes(`help`) && cli.showHelp(0);

  if (flags.repository && flags.username) {
    search.repoSearch(flags.username, flags.repository);
  } else if (flags.username) {
    search.userSearch(flags.username);
  }
  debug && log(flags);
})();
