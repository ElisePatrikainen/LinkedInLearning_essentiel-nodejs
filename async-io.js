// Sync
function doSomething_sync() {
    let data = getUserDetails_sync();
    console.log(data);
    console.log('Disponible');
}

function getUserDetails_sync() {
    const timout = Date.now() + 2000;
    while (Date.now() < timout) {};
    return 'Elise';
}

// Async
function doSomething_async() {
    getUserDetails_async((data) => console.log(data));
    console.log('Disponible');
}

function getUserDetails_async(callback) {
    setTimeout(() => callback('Elise'), 2000);
}

doSomething_async();