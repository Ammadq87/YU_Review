const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 3000;
const cors = require('cors')
const york = require('./routes/york.js')
const user = require('./routes/user.js');

// api to use: https://yorkapi.isaackogan.com/v1/courses/info/FW_2022/LE-EECS-3311-3.00/teachers

// Parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Parse JSON bodies
app.use(bodyParser.json());

app.use(cors())

app.get('/api', (req, res) => {
    res.send('YU-Reviews API')
})

app.use('/api/york', york);
app.use('/api/user', user);

app.listen(PORT, (err) => {
    if (err) 
        console.log('<< Err: Could not connect >>');
    console.log(`Listening on localhost:${PORT}`);
});
