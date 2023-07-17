const express = require('express');
const UserSession = require('../UserSession.js');
const CourseReviewDAO = require('../dao/CourseReviewDAO.js');
const router = express();

router.post('/submitReview', async (req, res) => {
    /*
    Check if logged in first
    Sanitize information
        - make sure values are correct
    Submit data if corrent
        - return error messge if incorrect
    */

    if (!UserSession.loginStatus) {
        res.send({msg: 'Must login to add review'});
        return;
    } else {
        // Sanitize information
        const submitted = await CourseReviewDAO.submitCourseReview(req.body);
        res.send(submitted);
    }

})