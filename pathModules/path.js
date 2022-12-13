const path = require("path");

console.log(path.dirname('/home/wohlig/nodejs/pathModules/path.js'));
console.log(path.extname('/home/wohlig/nodejs/pathModules/path.js'));
console.log(path.basename('/home/wohlig/nodejs/pathModules/path.js'));

const accPath = path.parse('/home/wohlig/nodejs/pathModules/path.js');
console.log(accPath.name);