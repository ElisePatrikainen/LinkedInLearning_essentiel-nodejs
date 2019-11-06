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

doSomething_sync();