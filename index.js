const moment = require("moment");
const calculate = require("./calculate");

const time = moment().format("HH:mm:ss");
const result = calculate(10, 15); // CALL
console.log("time", time, result);
