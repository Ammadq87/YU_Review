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
    console.log('[MSG] Logged In: '+UserSession.loginStatus);
    if (!UserSession.loginStatus) {
        res.send({msg: 'Must login to add review'});
        return;
    } else {
        const review = req.body;
        review['UserID'] = UserSession.UserID;
        console.log(review);
        const submitted = await CourseReviewDAO.submitCourseReview(review);
        res.send(submitted);
    }

})

module.exports = router;