const express = require('express');
const UserSession = require('../UserSession');
const UserDAO = require('../dao/UserDAO.js');
const router = express();

router.post('/login', async (req, res) => {
    const {email, password} = req.body;
    const validLogin = await UserSession.login(email, password);
    res.send(validLogin);
});

router.post('/updateInfo', async (req, res) => {
    const updated = await UserDAO.updateInfo(req.body);
    console.log(req.body);
    res.send(updated);
})

module.exports = router;