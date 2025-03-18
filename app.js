const express = require('express');
const app = express();
const port = 3000;

// Basic route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`); // Make sure this line exists!
});
// Add this code to app.js
app.get('/api/users', (req, res) => {
  res.json([{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }]);
});

app.get('/about', (req, res) => {
  res.send('This is the About page!');
});
app.get('/api/posts', (req, res) => {
  res.json([{ id: 1, title: "First Post" }]);
});