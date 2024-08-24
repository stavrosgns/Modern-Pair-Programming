<<<<<<< HEAD
// Create Web Server
=======
// Create a Web Server
>>>>>>> 2c7ed71ee9b7ef97089e5a1a08355db6350a8b94
const express = require('express');
const app = express();
const port = 3000;

// Use the JSON middleware
app.use(express.json());

// Create a JSON object to store the comments
const comments = [
  { name: 'John', comment: 'Hello World!' },
  { name: 'Jane', comment: 'Hello Universe!' }
];

// Define the GET /comments route
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Define the POST /comments route
app.post('/comments', (req, res) => {
  comments.push(req.body);
  res.json({ message: 'Comment added!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});