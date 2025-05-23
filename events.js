const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('some_event', (args) => {
    const {id, text} = args;

    console.log(id, text);
});

emitter.emit('some_event', {'id': 1, 'text': 'some text here'});
