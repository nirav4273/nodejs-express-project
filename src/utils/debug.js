import colors from 'colors';

module.exports = {
	log: (...args) => {
		for(let i in args){
			console.log(args[i]);
		}
	},
	warn: (...args) => {
		for(let i in args){
			console.log(colors.yellow(args[i]));
		}
	},
	error: (...args) => {
		for(let i in args){
			console.log(colors.red(args[i]));
		}
	}
}