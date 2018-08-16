const EventEmiiter = require('events');
//const emiiter  = new EventEmiiter();

var url = 'http://mylogger.io/log';


class Logger extends EventEmiiter{
	log(message) {
	//sent http request
	console.log(message);

//Raise event
this.emit('messageLogged', {
	id: 1,
	url: 'http://'
});
}
}
module.exports = Logger;