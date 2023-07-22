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
        const submitted = await CourseReviewDAO.checkSubmission(UserSession.UserID);
        
        const review = req.body;
        review['UserID'] = UserSession.UserID;
        
        let status;        
        if (submitted[0]['Amount'] > 0) {
            status = await CourseReviewDAO.updateCourseReview(review);
        } else {
            status = await CourseReviewDAO.submitCourseReview(review);
        }

        console.log('Status');

        res.send(status);
    }
});

router.get('/checkSubmission/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const submitted = await CourseReviewDAO.checkSubmission(id);
        res.send(submitted);
    } catch (err) {
        res.send('Error');
    }
})

router.delete('/deleteReview/:id', async (req, res) => {
    const {id} = req.params;
    console.log(id);
    try {
        const deleted = await CourseReviewDAO.deleteReview(id);
        res.send(deleted);
    } catch (err) {
        res.send('Error');
    }
})

module.exports = router;