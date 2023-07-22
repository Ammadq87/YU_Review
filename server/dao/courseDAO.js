const Connection = require("./Connection");

class courseDAO extends Connection {
    static getCourseReviews(code) {
        Connection.checkConnection();
        return new Promise((resolve, reject) => {
            Connection.getConnection().query(
                `
                SELECT 
                cr.ID AS ReviewID,
                cr.Review,
                cr.CourseID, 
                p.Name AS ProfessorName,
                cr.DatePosted,
                DATEDIFF(CURDATE(), cr.DatePosted) AS DaysSincePost,
                cr.Difficulty,
                cr.Useful,
                cr.Retake,
                cr.ReviewLikes,
                cr.ReviewDislikes,
                cr.LikedCourse,
                u.ID AS UserID,
                u.Email,
                CONCAT(u.FirstName, ' ', u.LastName) AS Author,
                u.Bio,
                m.Description AS Major
                FROM CourseReview cr
                LEFT JOIN User u
                ON cr.UserID = u.ID
                LEFT JOIN Major m
                ON u.MajorID = m.ID
                LEFT JOIN Professor p
                ON p.ID = cr.ProfessorID
                WHERE cr.CourseID=?
                ORDER BY DaysSincePost;
                `, [
                    code
                ], (err, results) => {
                    if (err) reject('Something went wrong. could not get course reviews');
                    resolve(results);
                }
            );
        });
    }
}

module.exports = courseDAO;