const Connection = require("./Connection");

class CourseReviewDAO extends Connection {
    static submitCourseReview(reviewData) {
        Connection.checkConnection();
        return new Promise((resolve, reject) => {
            Connection.getConnection().query(
                `
                INSERT INTO CourseReview
                VALUES (
                    0,
                    ?,
                    ?,
                    ?,
                    ?,
                    ?,
                    ?,
                    ?,
                    ?,
                    ?,
                    ?,
                    ?
                );
                `, [
                    reviewData.review,
                    reviewData.CourseID, 
                    reviewData.professorId,
                    reviewData.DatePosted, 
                    reviewData.UserID, 
                    reviewData.difficulty,
                    reviewData.useful, 
                    reviewData.retake, 
                    reviewData.liked, 
                    reviewData.ReviewLikes, 
                    reviewData.ReviewDislikes
                ], (err) => {
                    if (err) resolve(false);
                    resolve(true);
                }
            )
        })
    }
}

module.exports = CourseReviewDAO;