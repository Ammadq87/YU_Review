const express = require('express');
const router = express();
const courseDAO = require('../dao/courseDAO.js');

router.get('/reviews/:code', async (req, res) => {
    const code = removeHyphenFromCode(req.params.code);
    const reviews = await courseDAO.getCourseReviews(code);
    res.send(reviews);
});

function removeHyphenFromCode(code) {
    const i = code.lastIndexOf('-');
    return code.substring(0,i)+'.00';
}

module.exports = router;