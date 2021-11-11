async function connect() {
    if (global.connection && global.connection.state !== 'disconnected') return global.connection;

    const mysql = require('mysql2/promise')
    const connection = await mysql.createConnection("mysql://root:capoclassico@localhost:3306")
    console.log("Conectado ao banco de dados")

    global.connection = connection
    return connection
}
connect()


module.exports = {}