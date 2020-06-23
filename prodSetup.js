// include fs-extra package
var fs = require("fs-extra");

fs.copy(".env.prod",".env",function(err){
	if(err){
		console.log(err);
	}
});
