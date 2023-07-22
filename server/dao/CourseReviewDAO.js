const Connection = require("./Connection");

class CourseReviewDAO extends Connection {

    static deleteReview(id) {
        Connection.checkConnection();
        return new Promise ((resolve, reject) => {
            Connection.getConnection().query(
                `
                DELETE FROM
                CourseReview 
                WHERE ID=?
                `, [
                    id
                ],
                (err) => {
                    if (err) reject('deleting course review gone wrong');
                    resolve(true);
                }
            );
        });
    }

    static checkSubmission(id) {
        Connection.checkConnection();
        return new Promise ((resolve, reject) => {
            Connection.getConnection().query(
                `
                SELECT 
                COUNT(*) AS Amount
                FROM CourseReview cr
                WHERE UserID=?
                `, [
                    id
                ],
                (err, results) => {
                    if (err) reject('checkSubmission Query Gone Wrong');
                    resolve(results);
                }
            );
        });
    }

    static updateCourseReview(reviewData) {
        Connection.checkConnection();
        return new Promise((resolve, reject) => {
            Connection.getConnection().query(
            `
            UPDATE CourseReview 
            SET Review=?,
            ProfessorID=?,
            DatePosted=?,
            Difficulty=?,
            Useful=?,
            Retake=?,
            LikedCourse=?
            WHERE UserID=?
            `, [
                reviewData.review,
                reviewData.professorId,
                reviewData.DatePosted, 
                reviewData.difficulty,
                reviewData.useful, 
                reviewData.retake, 
                reviewData.liked, 
                reviewData.UserID
            ],
            (err) => {
                if (err) reject('Something went wrong with deleting a course review');
                resolve(true);
            }     
            );
        });
    }

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