
const calc = require('./calculator');
const comp = require('./comparer');

const result = (n1,n2) => {
	console.log("comparing two numbers: " + n1 + "," + n2);

	if (comp.AreNumberEqual(n1,n2)) {
		console.log("numbers are equal") 
		console.log("adding two numbers");
		console.log(calc.add(n1,n2));
	} else {
		console.log("numbers are not equal");
		console.log("subtracting two numbers");
		console.log(calc.subtract(n1,n2));
	}
};

//result(5,10);
result(5,5);