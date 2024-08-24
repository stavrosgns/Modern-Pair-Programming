// Create web server
const express = require('express');
const server = express();
server.listen(8080);

// Create a route
server.get('/comments', (req, res) => {
  res.json([
    { id: 1, author: 'Beth', body: 'I love your blog!' },
    { id: 2, author: 'Tom', body: 'Good job' },
  ]);
});