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
                    reviewData.Review,
                    reviewData.CourseID, 
                    reviewData.ProfessorID,
                    reviewData.DatePosted, 
                    reviewData.UserID, 
                    reviewData.Difficulty,
                    reviewData.Useful, 
                    reviewData.Retake, 
                    reviewData.LikedCourse, 
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