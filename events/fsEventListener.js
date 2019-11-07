const fs = require('fs');

const bigFileWatcher = fs.watch('../bigFile');
bigFileWatcher.on("change", (changeType) => console.log(changeType));