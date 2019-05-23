const sqlite3 = require('sqlite3').verbose();
const bd = new sqlite3.Database('data.db');

const USERS_SCHEMA = `
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    name VARCHAR(40) NOT NULL UNIQUE, 
    email VARCHAR(255) NOT NULL, 
    password VARCHAR(255) NOT NULL
)
`;

const INSERT_USUER_1 = 
`
INSERT INTO users (
    name, 
    email,
    password
) SELECT 'Carol', 'carol@email.com', '123' WHERE NOT EXISTS (SELECT * FROM users WHERE email = 'carol@email.com')
`;

const CLIENTS_SCHEMA = 
`
CREATE TABLE IF NOT EXISTS clients (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL, 
    email TEXT NOT NULL,
    age INT NOT NULL
)
`;

const INSERT_CLIENT_1 = 
`
INSERT INTO clients (
    name,
    email,
    age
) SELECT 'Fulano', 'fulano@email.com', 18 WHERE NOT EXISTS (SELECT * FROM clients WHERE email = 'fulano@email.com')
`;

const INSERT_CLIENT_2 = 
`
INSERT INTO clients (
    name, 
    email,
    age
) SELECT 'Ciclano', 'ciclano@email.com', 20 WHERE NOT EXISTS (SELECT * FROM clients WHERE email = 'ciclano@email.com')
`;

bd.serialize(() => {
    bd.run("PRAGMA foreign_keys=ON");
    bd.run(USERS_SCHEMA);
    bd.run(INSERT_USUER_1);
    bd.run(CLIENTS_SCHEMA);
    bd.run(INSERT_CLIENT_1);
    bd.run(INSERT_CLIENT_2);

    bd.each("SELECT * FROM users", (err, user) => {
        console.log('User: ');
        console.log(user);
    });
});

process.on('SIGINT', () =>
    bd.close(() => {
        console.log('BD encerrado!');
        process.exit(0);
    })
);

module.exports = bd;