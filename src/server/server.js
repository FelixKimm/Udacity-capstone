// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser');

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('./dist'));

const port = 8001;

// Spin up the server
const server = app.listen(port, listening);

function listening() {
    console.log('The server is running');
    console.log(`Running on localhost: ${port}`);
}

// GET route    
app.get('/all', (req, res) => {
    res.send(projectData)
    console.log('success')
})

// // POST route

// app.post('/addData', (req, res) => {
//     projectData = req.body;
// 	res.send(projectData);
// })