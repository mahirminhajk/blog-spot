# Blog-Spot

Blog-Spot is a simple Node.js and Express application for creating and viewing blog posts. This project focuses solely on the backend, allowing you to upload and view blogs.

## Features

- **Homepage:** View the list of all blog posts.
- **About Page:** Information about the blog.
- **Contact Page:** Contact details.
- **Compose Page:** Create new blog posts.
- **Dynamic Post Links:** View individual blog posts through dynamic URLs.

## Installation

1. **Clone the Repository:**

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```
2. **Install Dependencies:**
   ```bash
   npm install
   ```
3. **Install Nodemon (for development):**
   ```bash
   npm run dev
   ```

## Running the Application

Start the application using:
```bash
npm start
```
Visit http://localhost:3000/ in your browser to view the application.

## Pages
- Homepage: http://localhost:3000/
- About Page: http://localhost:3000/about
- Contact Page: http://localhost:3000/contact
- Compose Page: http://localhost:3000/compose
- Dynamic Post Links: http://localhost:3000/compose/posts/post-name

## Technologies Used
- Node.js
- Express.js
- Body-parser
- EJS
- Lodash

