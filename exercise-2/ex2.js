var moment = require('moment');

const getCurrentDate = () => { 
	 return `${moment().format('LLLL')}`;
}

console.log(getCurrentDate());
