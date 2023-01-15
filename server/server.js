const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3080;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname + '/../ui/dist')));

/**
 * SERVER ROUTES START HERE
 */
app.get('/api/test', (req, res) => {
    res.send('test api route')
});
/**
 * SERVER ROUTES END HERE
 */

// Server routes need to be defined before defining all other routes with the UI Frontend build through Vue
app.all('*', (req, res) => {
    try {
        res.sendFile(path.join(__dirname + '/../ui/dist/index.html'));
    } catch(error) {
        res.json({ 
            success: false, 
            message: "Something went wrong" 
        });
    }
});

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});