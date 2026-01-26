🎓 Educational Awareness Web Portal

A full-stack web application designed to help students access academic courses, scholarships, and competitive exam information in one centralized platform.

🚀 Features

📚 Browse academic and career-oriented courses

🎓 Explore government & private scholarships

📝 Get details of competitive and entrance exams

⚡ Fast and responsive UI

🔗 RESTful APIs with Node.js & Express

🗄️ MongoDB database integration

🛠️ Tech Stack
Frontend

· React (Vite)

· Tailwind CSS

· JavaScript


Backend

· Node.js

· Express.js

· MongoDB

· Mongoose


📁 Project Structure
Web_Portal
├── backend
│   ├── src
│   │   ├── config
│   │   ├── data
│   │   ├── routes
│   │   └── index.js
│   ├── .env
│   └── package.json
│
├── frontend
│   ├── src
│   ├── public
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
└── README.md



⚙️ Setup Instructions
1️⃣ Clone the Repository
git clone https://github.com/Mubashir-85/Web_Portal.git
cd frontend

2️⃣ Backend Setup
cd backend
npm install

Create a .env file inside backend:

PORT=5000
MONGO_URI=mongodb://localhost:27017/educational_awareness


Start backend server: npm run dev


Backend will run on: http://localhost:5000



3️⃣ Frontend Setup
cd ../frontend
npm install
npm run dev

Frontend will run on: http://localhost:5173


🔌 API Endpoints
| Method | Endpoint            | Description          |
| ------ | ------------------- | -------------------- |
| GET    | `/api/courses`      | Get all courses      |
| GET    | `/api/scholarships` | Get all scholarships |
| GET    | `/api/exams`        | Get all exams        |



🧪 Database

· MongoDB (local)

Data stored in collections for:

· Courses

· Scholarships

· Exams


Exams

📌 Future Enhancements

· 🔐 User authentication

· 🧠 Admin dashboard

· 🔍 Search & filter options

· ☁️ Cloud deployment


👨‍💻 Author

Mubashir Shaikh
GitHub: Mubashir-85


📄 License

This project is for educational purposes.