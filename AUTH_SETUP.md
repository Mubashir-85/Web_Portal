# Authentication Setup Guide

## Backend Setup Complete ✅

### What's Been Added:

1. **User Model** (`Backend/src/models/User.js`)
   - Full name, email, phone, password fields
   - Password hashing with bcryptjs
   - Password comparison method

2. **Auth Routes** (`Backend/src/routes/authroutes.js`)
   - POST `/api/auth/signup` - Register new user
   - POST `/api/auth/login` - Login user
   - GET `/api/auth/me` - Get current user (protected)

3. **Dependencies Installed**
   - bcryptjs - For password hashing
   - jsonwebtoken - For JWT authentication

4. **Environment Variables** (`Backend/.env`)
   - JWT_SECRET added for token generation

## Frontend Setup Complete ✅

### What's Been Added:

1. **Auth Service** (`frontend/src/Components/Services/auth.js`)
   - signUp() - Register new user
   - login() - Login user
   - logout() - Clear user session
   - getCurrentUser() - Get logged in user
   - isAuthenticated() - Check if user is logged in

2. **Updated Components**
   - SignUpForm - Connected to backend API
   - LoginForm - Connected to backend API
   - Error handling and loading states added

3. **Environment Variables** (`frontend/.env`)
   - VITE_API_URL updated to include `/api` path

## How to Use:

### 1. Start MongoDB
Make sure MongoDB is running on your system:
```bash
# Windows
mongod

# Mac/Linux
sudo systemctl start mongodb
```

### 2. Start Backend Server
```bash
cd Backend
npm run dev
```
Backend will run on http://localhost:5000

### 3. Start Frontend Server
```bash
cd frontend
npm run dev
```
Frontend will run on http://localhost:5173

### 4. Test Authentication

1. **Sign Up**
   - Click "Sign Up" button in header
   - Fill in the form (name, email, password)
   - Submit - User will be saved to MongoDB
   - Redirects to login page

2. **Login**
   - Click "Login" button in header
   - Enter email and password
   - Submit - JWT token stored in localStorage
   - Redirects to home page

3. **User Data Storage**
   - Token stored in: `localStorage.getItem('token')`
   - User info stored in: `localStorage.getItem('user')`

## API Endpoints:

### Sign Up
```
POST http://localhost:5000/api/auth/signup
Body: {
  "fullName": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890",
  "password": "password123"
}
```

### Login
```
POST http://localhost:5000/api/auth/login
Body: {
  "email": "john@example.com",
  "password": "password123"
}
```

### Get Current User
```
GET http://localhost:5000/api/auth/me
Headers: {
  "Authorization": "Bearer <token>"
}
```

## Security Features:

- ✅ Password hashing with bcrypt (10 salt rounds)
- ✅ JWT token authentication
- ✅ Password minimum length validation (6 characters)
- ✅ Email format validation
- ✅ Duplicate email prevention
- ✅ Secure password comparison

## Next Steps (Optional):

1. Add password reset functionality
2. Add email verification
3. Add user profile page
4. Add protected routes (require login)
5. Add logout button in header
6. Show user name in header when logged in
