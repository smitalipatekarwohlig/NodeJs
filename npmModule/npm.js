var chalk = require("chalk");
var validator =require("validator");

// console.log(chalk.red.underline.inverse("False"));

var res = validator.isEmail("smitali@patekar.com");
console.log(res ? chalk.green.inverse(res): chalk.red.inverse(res));