// include fs-extra package
var fs = require("fs-extra");

fs.copy("./src/config","dist/config",function(Err){
	console.log(Err);
});

fs.copy("./src/config","minify-dist/config",function(Err){
	console.log(Err);
});