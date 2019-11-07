
const exemple = require('./events/customEventEmittter');

exemple.timer.on('3_secondes', () => console.log('3 secondes écoulées.'));
exemple.launchTimer();