const Logger = require('./log.js');

const myLogger = new Logger();

myLogger.on('some_event', (args) => {
    const {id, message} = args;

    console.log(id, message);
});

myLogger.log('text');
