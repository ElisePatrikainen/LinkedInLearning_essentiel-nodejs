function beforeExitCallback(code) {
    console.log('About to exist with code ' + code);
    setTimeout( () => console.log('Last async action.'), 1000);
}

process.on("beforeExit", beforeExitCallback);   // ne termine pas le process
process.on("exit", beforeExitCallback);     // n'exécute pas le setTimeout()

console.log('starting');