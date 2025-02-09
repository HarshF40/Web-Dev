import {DatabaseSync} from 'node:sqlite' //importing sqlite
const db = new DatabaseSync(':memory:') //creating a database in memory

// Execute SQL statements from strings

//create a TABLE for user
//PRIMARY KEY is user for
//  1. UNIQUENESS
//  2.  To establish relationship between tables
db.exec(
    `
    CREATE TABLE users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE,
        password TEXT
    )
    `
)

// FOREIGN KEY sets the relationship between the tables
// Todos
db.exec(
    `
    CREATE TABLE todos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER,
        task TEXT,
        completed BOOLEAN DEFAULT 0,
        FOREIGN KEY(user_id) REFERENCES users(id)
    )
    `
)

export default db