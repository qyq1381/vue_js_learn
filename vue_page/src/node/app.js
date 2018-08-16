const path = require('path');
const os = require('os');
const fs = require('fs');
const EventEmiiter = require('events'); //eventEmiiter is class
const Logger = require('./logger');
const logger = new Logger();

const http = require('http');
//server is a emiiter
const server = http.createServer((req, res) => {
	if (req.url === '/') {
		res.write('Hello world');
		res.end();
	}

	if (req.url === '/api/courses') {
		res.write(JSON.stringify([1, 2, 3]));
		res.end();
	}
});
/*
server.on('connection', (socket)=>{
	console.log('New connection');
});
*/
server.listen(3000);

console.log('Listening on port 3000');



/*
let pathObj = path.parse(__filename);
let osTotalMemory = os.totalmem();
let osFreeMemory = os.freemem();
console.log(pathObj);

console.log(`Total memory is :${osTotalMemory} and FreeMemory is ${osFreeMemory}.`);
*/
/*
const files = fs.readdirSync('./');
console.log(files);


fs.readdir('./', function(err, files){

})
*/
/*
//Resgister a listener
logger.on('messageLogged', function(arg){
	console.log('Listener called', arg);
});
logger.log('message');
//raise the emit (making a noise )
/*emiiter.emit('messageLogged', {
	id: 1,
	url: 'http://'
});
*/


