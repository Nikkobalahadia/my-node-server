const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


const studentData = {
  name: "Nikko Balahadia",
  program: "Bachelor of Science in Information Technology",
  major: "Major in Business Analytics",
  quote: "The only way to do great work is to love what you do.",
  author: "Steve Jobs"
};


const generateHTML = (data) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${data.name} - Profile</title>
        <style>
            body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                background-color: #f0f2f5;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                margin: 0;
            }
            .card {
                background: white;
                padding: 40px;
                border-radius: 12px;
                box-shadow: 0 4px 8px rgba(0,0,0,0.1);
                text-align: center;
                max-width: 500px;
                width: 90%;
            }
            h1 { color: #333; margin-bottom: 10px; }
            h2 { color: #555; font-size: 1.1rem; font-weight: normal; margin-top: 0; }
            .quote-box {
                margin-top: 30px;
                padding-top: 20px;
                border-top: 1px solid #eee;
            }
            .quote { font-style: italic; color: #666; font-size: 1.1rem; }
            .author { display: block; margin-top: 10px; font-weight: bold; font-size: 0.9rem; color: #888; }
        </style>
    </head>
    <body>
        <div class="card">
            <h1>${data.name}</h1>
            <h2>${data.program}</h2>
            <h2>${data.major}</h2>
            <div class="quote-box">
                <p class="quote">"${data.quote}"</p>
                <span class="author">- ${data.author}</span>
            </div>
        </div>
    </body>
    </html>
  `;
};

app.get('/', (req, res) => {
  res.send(generateHTML(studentData));
});

app.listen(port, () => {
  console.log(`🚀 Server is live at http://localhost:${port}`);
});