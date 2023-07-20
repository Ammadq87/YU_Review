const Connection = require("./Connection");

class yorkDAO extends Connection {
    static getProfessorId(name) {
        Connection.checkConnection();
        return new Promise((resolve, reject) => {
            Connection.getConnection().query(
                `
                SELECT p.ID 
                FROM Professor p
                WHERE p.Name LIKE '%${name}%'
                LIMIT 1;
                `, (err, results) => {
                    if (err) resolve(null);
                    resolve(results);
                }
            )
        })
    }
}

module.exports = yorkDAO;