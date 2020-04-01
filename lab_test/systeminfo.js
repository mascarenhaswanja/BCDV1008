const os = require('os');

/* CPU architecture, hostname, operating system type
*/
exports.systemInfo = () => {
	console.log(`Operating System Info: CPU architecture: ${os.arch()} name: ${os.hostname()} name: ${os.type()}`);
}

/*	username, home directory */

exports.userInfo = () => {
	 console.log(`User Info: User name: ${os.userInfo().username} dir: ${os.homedir()}`);
}
 





