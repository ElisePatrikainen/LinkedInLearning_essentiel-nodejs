const fs = require('fs');
const writeFileStream = fs.createWriteStream('../bigFile');

process.stdin.setEncoding('utf8');
process.stdin.on("data", pipeToWriteStream)

function pipeToWriteStream(input) {
    writeFileStream.write(input);
}