const mysql = require('mysql');

class Connection {
    static connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '1234',
        database: 'YU_Reviews'
    });

    static connect () {
        this.connection.connect((err) => {
            if (err) console.log('Failed to Connect to the MySQL Server');
            console.log('Connected to the MySQL Server');
        });
    }

    static end () {
        this.connection.end((err) => {
            if (err) {console.log('Failed to Close connection to MySQL Server'); throw err};
            console.log('Connection closed');
        });
    }

    static getConnection() {
        return this.connection;
    }

    static checkConnection() {
        if (!this.getConnection()) {
            this.connect();
        }
    }
}

module.exports = Connection;