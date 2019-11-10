function connection(err, client) {
    if (err) { console.error(err.message); return; }
    console.log('Connected to MongoDb.');
}

exports.connection = connection;