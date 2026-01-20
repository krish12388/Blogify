# Blogify

Blogify is a full-featured blogging platform that allows users to create, read, and share blogs. Built with a robust Node.js backend and a dynamic EJS frontend, it creates a seamless experience for both readers and writers.

## 🚀 Features

- **User Authentication**: Secure Sign Up and Login functionality using JWT and cookies.
- **Create Blogs**: Users can write and publish their own blogs with titles, content, and cover images.
- **Blog Feed**: A home page displaying all published blogs.
- **Comments System**: interactive comment section for each blog.
- **Image Uploads**: Support for uploading blog cover images using Multer.
- **Responsive Design**: A beautiful, mobile-friendly UI styled with custom CSS and Bootstrap.
- **Secure**: Password hashing and protected routes.

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose ODM)
- **Frontend**: EJS (Embedded JavaScript templates), CSS, Bootstrap
- **Authentication**: JSON Web Tokens (JWT), Cookie Parser
- **File Storage**: Multer

## 📋 Prerequisites

Before running the application, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (Local or Atlas)

## ⚙️ Environment Variables

Create a `.env` file in the root directory and add the following variables:

```env
PORT=3000
MONGO_URL=your_mongodb_url
```

## 🔧 Installation

1.  **Clone the repository**

    ```bash
    git clone <repository-url>
    cd Blogify
    ```

2.  **Install dependencies**

    ```bash
    npm install
    ```

3.  **Start the server**

    For development (with nodemon):

    ```bash
    npm run dev
    ```

    For production:

    ```bash
    npm start
    ```

4.  **Access the application**

    Open your browser and navigate to: `http://localhost:3000`

## 📂 Project Structure

```
Blogify/
├── controllers/    # Route controllers
├── middleware/     # Authentication middleware
├── models/         # Mongoose models (User, Blog, Comment)
├── public/         # Static files (CSS, Images, Uploads)
├── routes/         # Express routes (User, Blog)
├── services/       # Auth services (Token generation)
├── views/          # EJS templates
├── index.js        # Entry point
└── ...
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
