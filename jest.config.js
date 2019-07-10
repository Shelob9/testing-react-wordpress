/**
 * Jest config for unit tests
 */
const defaultConfig = require("./node_modules/@wordpress/scripts/config/jest-unit.config.js");
module.exports = {
  //use the default from WordPress for everything...
  ...defaultConfig,
  //Except test ignore, where we need to ignore our e2e test directory
  testPathIgnorePatterns: ["/.git/", "/node_modules/", "<rootDir>/e2e"]
};