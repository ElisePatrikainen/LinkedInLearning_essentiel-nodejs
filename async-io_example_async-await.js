const fs = require('fs').promises;

async function writeFile(url) {
  const generateData = () => {
      let data = '1';
      for (i=0; i < 10000; i++) {
          data = data + Math.random() * 10;
      }
      return data;
  }
  return fs.writeFile(url, generateData())
}

async function writeThenReadFile() {
    const date = Date.now();
    await writeFile('bigFile')
    console.log('Ecriture \'bigFile\' terminé, durée ' + (Date.now() - date) + ' ms.')
    await fs.readFile('bigFile', "utf8")
    console.log('Lecture \'bigFile\' terminée')
}

writeThenReadFile().catch((r) => console.log(r))

console.log('Disponible.');
