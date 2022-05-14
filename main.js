const prompt = require('prompt-sync')()

let a = +prompt()
let b = +prompt()
let c = +prompt()

// a < b < c
// c < b < a
// a < c < b
// b < c < a
// c < a < b
// b < a < c

if (a < b && b < c || c < b && b < a) {
	console.log(b);
}