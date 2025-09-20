# 🔖 Bookmark Manager API

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express)](https://expressjs.com/)
[![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens)](https://jwt.io/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)

A modern, secure, and scalable RESTful API for managing bookmarks. Built with TypeScript, Express.js, MongoDB (Mongoose), and JWT authentication.

## 🌟 Features

- **🔐 Secure Authentication**
  - JWT-based authentication
  - Password hashing with bcrypt
  - Protected routes

- **📚 Bookmark Management**
  - Create, read, update, delete (CRUD) operations
  - User-specific bookmarks
  - Optional descriptions for better organization

- **🛠️ Technical Stack**
  - TypeScript for type safety
  - MongoDB with Mongoose ODM
  - Express.js for routing
  - JWT for stateless authentication

## 🏗️ Project Structure

\`\`\`
src/
 ├── config/            # Configuration (DB, env variables)
 ├── controllers/       # Request handlers
 ├── middlewares/       # Auth & error handling
 ├── models/           # Mongoose schemas
 ├── routes/           # API routes
 ├── services/         # Business logic
 ├── utils/            # Helper functions
 ├── tests/            # Test suites
 ├── app.ts            # Express app setup
 └── server.ts         # Entry point
\`\`\`

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or Atlas URI)
- npm or yarn

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/tribertmuto/Bookmark_Manager.git
   cd Bookmark_Manager
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Environment Setup**
   Create a \`.env\` file in the root directory:
   \`\`\`env
   PORT=4000
   MONGO_URI=mongodb://localhost:27017/bookmarks
   JWT_SECRET=your_jwt_secret_here
   \`\`\`

4. **Start MongoDB**
   - Local MongoDB: Start your MongoDB service
   - Atlas: Use your connection string in MONGO_URI

5. **Run the application**
   - Development mode:
     \`\`\`bash
     npm run dev
     \`\`\`
   - Production build:
     \`\`\`bash
     npm run build
     npm start
     \`\`\`

## 📡 API Endpoints

### Authentication

#### Register a new user
\`\`\`http
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepassword123"
}
\`\`\`

#### Login
\`\`\`http
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "securepassword123"
}

Response: {
  "token": "your_jwt_token_here"
}
\`\`\`

### Bookmarks (Protected Routes)

All bookmark endpoints require the JWT token in the Authorization header:
\`\`\`http
Authorization: Bearer your_jwt_token_here
\`\`\`

#### Get all bookmarks
\`\`\`http
GET /api/bookmarks
\`\`\`

#### Create a bookmark
\`\`\`http
POST /api/bookmarks
Content-Type: application/json

{
  "title": "GitHub",
  "url": "https://github.com",
  "description": "Where the world builds software"
}
\`\`\`

#### Update a bookmark
\`\`\`http
PUT /api/bookmarks/:id
Content-Type: application/json

{
  "title": "Updated Title",
  "description": "Updated description"
}
\`\`\`

#### Delete a bookmark
\`\`\`http
DELETE /api/bookmarks/:id
\`\`\`

## 🧪 Testing

Coming soon:
- Unit tests with Jest
- Integration tests with Supertest
- API documentation with Swagger/OpenAPI

## 📈 Future Enhancements

- [ ] Add tags/categories for bookmarks
- [ ] Implement bookmark sharing
- [ ] Add search functionality
- [ ] Create API documentation with Swagger
- [ ] Add rate limiting
- [ ] Implement refresh tokens

## 📄 License

MIT License - feel free to use this project for your own learning or as a starting point for your applications.

## 👥 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

---

Built with ❤️ using TypeScript, Express, MongoDB, and JWT
