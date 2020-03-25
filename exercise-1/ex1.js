let uc = require("upper-case");
 

const greeter = () =>  {
	for (let i = 1 ; i <= 10 ; i++) {
		console.log(uc.upperCase("hello world"));
	}
}

greeter();

