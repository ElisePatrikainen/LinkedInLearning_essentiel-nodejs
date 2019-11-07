
const exemple = require('./events/eventEmittter_exemple');

exemple.timer.on('3_secondes', () => console.log('3 secondes écoulées.'));
exemple.launchTimer();