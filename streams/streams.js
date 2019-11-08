
process.stdin.setEncoding('utf8');
process.stdin.on("data", evaluate)
process.stdin.on("pause", () => console.log('Terminé.'))

function evaluate(input) {
    input.includes('pause') ? process.stdin.pause(): console.log(input);
}