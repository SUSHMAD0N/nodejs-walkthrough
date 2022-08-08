const EventEmitter = require('events');

const door = new EventEmitter();
door.emit('slam'); // emitting the event "slam"
door.eventNames();
door.getMaxListeners();
door.on('open', () => {
    console.log('Door was opened');
  });
  