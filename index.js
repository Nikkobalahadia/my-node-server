const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Use Render's port or 3000 locally

app.get('/', (req, res) => {
  // Customize this HTML with your details
  const htmlResponse = `
    <div style="font-family: sans-serif; text-align: center; padding-top: 50px;">
        <h1>Student Name: Nikko Balahadia</h1>
        <h2>Class Section: Bachelor of Science in Information Technology Major in Business Analytics</h2>
        <p style="font-style: italic; font-size: 1.2em; margin-top: 20px;">
            "The only way to do great work is to love what you do." - Steve Jobs
        </p>
    </div>
  `;
  res.send(htmlResponse);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});