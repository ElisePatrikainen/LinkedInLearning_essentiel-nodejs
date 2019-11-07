function timer(callback1, callback2, callback3) {
    if (callback1) {
        setTimeout(callback1, 1000);
    }
    if (callback2) {
        setTimeout(callback2, 1000);
    }
    if (callback3) {
        setTimeout(callback3, 1000);
    }
}
exports.timer = timer;