const Database = require('sqlite-async');

function execute(db) {

    return db.exec(`
        CREATE TABLE IF NOT EXISTS hills (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            lat TEXT,
            lng TEXT,
            description TEXT,
            images TEXT,
            advises TEXT
        );
    `)
}

module.exports = Database.open(__dirname + '/database.sqlite').then(execute)