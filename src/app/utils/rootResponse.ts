export const rootPage: string = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>PD-University API</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color:rgb(244, 244, 244);
          text-align: center;
          padding: 50px;
        }
        .container {
          background: #ffffff;
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          display: inline-block;
        }
        h1 {
          color: #2c3e50;
        }
        p {
          color: #555;
          font-size: 18px;
        }
        .link {
          display: inline-block;
          margin-top: 20px;
          padding: 10px 20px;
          text-decoration: none;
          background: #3498db;
          color: #fff;
          border-radius: 5px;
          font-weight: bold;
          transition: 0.3s;
        }
        .link:hover {
          background: #2980b9;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>🎓 Welcome to PD-University API 🚀</h1>
        <p>Your go-to solution for managing university operations efficiently.</p>
        <p>Stay organized with students, courses, faculty, and more!</p>
        <a href="/api-docs" class="link">📜 View API Documentation</a>
      </div>
    </body>
    </html>
  `;
