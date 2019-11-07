const fs = require('fs');

function generateData() {
    let data = '1';
    for (i=0; i < 1000000; i++) {
        data = data + Math.random() * 10;
    }
    return data;
}

function callback() {
    console.log('Process \'bigFile\' terminé, durée ' + (Date.now() - date) + ' ms.')
}

fs.writeFile('bigFile', generateData(), () => callback())
const date = Date.now();
console.log('Disponible.');

fs.readFile('bigFile1', (err, data) => {
    if (err) {
        throw new Error('Erreur détectée.')
    }
    console.log(data)
})