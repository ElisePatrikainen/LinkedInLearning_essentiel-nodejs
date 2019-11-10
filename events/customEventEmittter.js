const EventEmitter = require('events');

timer = new EventEmitter();

function launchTimer() {
    setTimeout(() => timer.emit('1_seconde'), 1000);
    setTimeout(() => timer.emit('2_secondes'), 2000);
    setTimeout(() => timer.emit('3_secondes'), 3000);
}

timer.on('3_secondes', () => console.log('3 secondes écoulées.'));
launchTimer(); 