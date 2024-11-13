
### Backend
# Media Upload Application - Backend

This is the backend implementation of a media upload application built with Node.js, Express.js, and MongoDB. The server handles user authentication, media upload, and retrieval.

## Features
- User authentication with JWT.
- Secure file upload using `multer`.
- Media storage in MongoDB.
- API for uploading and retrieving media files.

## Prerequisites
- Node.js and npm installed.
- MongoDB database instance (local or cloud).

## Installation and Setup

1. **Clone the repository**:
2. Install dependencies:
   npm i
4. Set up environment variables:
    PORT=5000
    MONGODB_URI=mongodb://localhost:27017/mediaDB
J    WT_SECRET=your-jwt-secret
6. Run the server:
   node server.js

   Technologies Used
Node.js
Express.js
MongoDB
Multer for file handling
JSON Web Tokens (JWT) for authentication
