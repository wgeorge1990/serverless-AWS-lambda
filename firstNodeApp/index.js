const logger = require('./logger')
const _ = require("underscore")
//https://underscorejs.org/#each

logger.log("hello world this is from the logger module")
console.log(_.first(["one", "two", "three", "four", "five"]))
console.log(_.last(["one", "two", "three", "four", "five"]))