const axios = require('axios');
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Ammadq87',
    database: 'YU_Reviews'
});

connection.connect((err) => {
    if (err) console.log('Could not connect');
    console.log('Connected to YU Reviews');
})

getCourseData();
getProfessorData();

async function getCourseData() {
    const courses = await axios.get(`https://yorkapi.isaackogan.com/v1/courses/info/FW_2022/codes`);
    const courseData = courses['data'];

    courseData?.forEach(course => {
        const _course = course.split('-');
        const credit = _course[_course.length-1].substring(0, _course[_course.length-1].indexOf('.'));
        connection.query(
            `
            INSERT INTO Course
            VALUES (
                ?,
                ?,
                ?,
                ?,
                ?
            );
            `, [course, _course[0], _course[1], _course[2], credit], 
            (err) => {
                if (err) console.log('Error @' + course)
            }
        )
    });
    console.log('Course Values Inserted Successfully');
}

async function getProfessorData() {
    const professors = await axios.get('https://yorkapi.isaackogan.com/v1/courses/index/FALL_WINTER_2022_2023/instructors');
    const professorData = professors['data'];

    professorData?.forEach(professor => {
        connection.query(
            `
            INSERT INTO Professor VALUES 
            (
                0,
                ?
            );
            `, [professor.split(' ').map(name => {return name.split('').join('')}).reverse().join(' ')],
            (err) => {
                if (err) console.log('Error @' + professor)
            }
        );
    });
    console.log('Course Values Inserted Successfully');
}