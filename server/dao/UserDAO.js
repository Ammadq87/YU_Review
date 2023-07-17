const Connection = require('./Connection.js');

class UserDAO extends Connection {

    /**
     * @param {string} email
     * @param {string} password
     */
    static validateUserLogin(email, password) {
        Connection.checkConnection();
        return new Promise((resolve, reject) => {
            Connection.getConnection().query(
                `
                SELECT
                u.ID, 
                u.Email,
                u.Password,
                u.FirstName,
                u.LastName,
                u.Bio,
                m.Description AS Major
                FROM User u
                LEFT JOIN Major m
                ON m.ID = u.MajorID
                WHERE 
                u.Email=?
                AND
                u.Password=?;
                `, 
                [email, password],
                (err, results) => {
                    if (err) resolve(-1);
                    if (results === null)
                        resolve([]);
                    resolve(results);
                }
            );
        });
    }

    static updateInfo(info) {
        Connection.checkConnection();
        return new Promise((resolve, reject) => {
            Connection.getConnection().query(
                `
                UPDATE User 
                SET
                FirstName=?,
                LastName=?,
                Email=?,
                Bio=?,
                MajorID=(
                    SELECT m.ID
                    FROM Major m 
                    WHERE Description=?
                )
                WHERE ID=?

                `,
                [info['FirstName'], info['LastName'], info['Email'], info['Bio'], info['Major'], info['ID']],
                (err) => {
                    if (err) resolve(false);
                    resolve(true);
                }
            );
        });
    }
}

module.exports = UserDAO;