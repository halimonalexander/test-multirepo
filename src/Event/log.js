const EventEmitter = require('events');

class Logger extends EventEmitter {
    log = (message) => {
        console.log(message);

        this.emit('some_event', {id: 1, message: message})
    };
}

module.exports = Logger;
