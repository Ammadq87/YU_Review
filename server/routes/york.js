const express = require('express');
const router = express();
const axios = require('axios');

// coursePeriod: 'FW_2022'
// professorPeriod: 'FALL_WINTER_2022_2023'
router.get('/getAll', async (req, res) => {
    const {coursePeriod, professorPeriod} = req.query;
    const courseCodes = await axios.get(`https://yorkapi.isaackogan.com/v1/courses/info/${coursePeriod}/codes`);
    const professors = await axios.get(`https://yorkapi.isaackogan.com/v1/courses/index/${professorPeriod}/instructors`);
    const data = {
        courses: courseCodes['data'],
        professors: professors['data']
    };
    // console.log(req.body.coursePeriod,req.body.professorPeriod);
    res.send(data);
})

module.exports = router;