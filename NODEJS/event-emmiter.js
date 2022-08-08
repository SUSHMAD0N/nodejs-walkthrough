const EventEmitter = require('events');

const eventEmitter = new EventEmitter();
eventEmitter.on('start', () => {
    console.log('started');
  });
  eventEmitter.emit('start');
  eventEmitter.on('start', number => {
    console.log(`started ${number}`);
  });
  
  eventEmitter.emit('start', 23);
  