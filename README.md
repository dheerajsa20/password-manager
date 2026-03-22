# 🔐 Password Manager

A secure full-stack password manager web application built with React, Node.js, and MongoDB.

## 🌐 Live Demo
- **Frontend:** [your-vercel-url.vercel.app]([https://your-vercel-url.vercel.app](https://password-manager-client-dheerajsa20s-projects.vercel.app/))
- **Backend:** [pwd-manager-api.onrender.com](https://pwd-manager-api.onrender.com)

## 🛠️ Tech Stack
- **Frontend:** React, Axios, React Router
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas
- **Authentication:** JWT (JSON Web Tokens)
- **Encryption:** AES-256-CBC (Node.js crypto module)
- **Password Hashing:** bcrypt

## ✨ Features
- User registration and login
- JWT-based authentication
- AES-256-CBC encryption for stored passwords
- Add, view, and delete saved passwords
- Show/Hide password toggle
- Copy password to clipboard
- Secure master password with bcrypt hashing

## 🔐 Security Architecture
```
Master Password
      ↓
   bcrypt (hashing)
      ↓
  JWT Token (session)
      ↓
  AES-256-CBC (encrypt vault)
      ↓
  Encrypted data → MongoDB
```

## 🚀 Run Locally

### Prerequisites
- Node.js
- MongoDB Atlas account

### Backend Setup
```bash
cd server
npm install
```
Create `.env` file:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```
Run server:
```bash
node index.js
```

### Frontend Setup
```bash
cd client
npm install
npm start
```

## 📁 Project Structure
```
pwd-manager/
├── server/
│   ├── models/
│   │   ├── User.js
│   │   └── PasswordModel.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── vault.js
│   ├── utils/
│   │   └── crypto.js
│   └── index.js
└── client/
    └── src/
        ├── pages/
        │   ├── Login.jsx
        │   ├── Register.jsx
        │   └── Vault.jsx
        └── App.js
```

## 👨‍💻 Developer
**Dheeraj** — 4th Semester CSE Student at RVITM, Bengaluru
- GitHub: [@dheerajsa20](https://github.com/dheerajsa20)
