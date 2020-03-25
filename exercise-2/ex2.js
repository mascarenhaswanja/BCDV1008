var moment = require('moment');

const getCurrentDate = () => { 
	 return `${moment(new Date()).format('dddd, MMMM Do YYYY : h:mm:ss a')}`;

}

console.log(getCurrentDate());
