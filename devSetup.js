// include fs-extra package
var fs = require("fs-extra");

fs.copy(".env.sample",".env",function(err){
	if(err){
		console.log(err);
	}
});