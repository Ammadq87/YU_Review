const UserSession = require('./UserSession.js');

async function test () {
    const x = await UserSession.login('ammad@yorku.ca', '1');
    console.log(x, UserSession.UserID);
}

test();
