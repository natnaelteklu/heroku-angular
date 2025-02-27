const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the dist/heroku/browser directory
app.use(express.static(path.join(__dirname, 'dist', 'heroku', 'browser')));

// Handle all routes by serving the index.html from dist/heroku/browser
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'heroku', 'browser', 'index.html'));
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
