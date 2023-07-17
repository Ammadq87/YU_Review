const UserDAO = require('./dao/UserDAO.js');
class UserSession {
    static loginStatus = false;    
    static UserID = -1;

    /**
     * Logs in user if credentials are
     * @param {string} email 
     * @param {string} password
     * @returns if user login is valid, status changes, returns true. Returns false
     * if user login is invalid 
     */
    static async login (email, password) {
        const result = await UserDAO.validateUserLogin(email, password);
        if (!result || result.length !== 1)
            return {valid: false, User: null};

        this.UserID = result[0]['ID'];
        this.loginStatus = true;
        return {valid: true, User: result[0]};
    }
}

module.exports = UserSession;