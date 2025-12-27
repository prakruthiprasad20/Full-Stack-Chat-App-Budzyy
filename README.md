# 💬 Budzyy — Real-Time Chat Application

**Budzy** is a full-stack real-time chat application built with the **MERN stack** and **Socket.IO**, designed for fast, seamless, and secure communication.

🔗 **Live Demo:** https://full-stack-chat-app-budzyy.onrender.com  

##  Features

-  **JWT Authentication** (secure login & signup)
-  **Real-time messaging** using Socket.IO
-  **Read receipts** (blue tick once seen)
-  **Online / Offline user status**
-  **Image sharing in chats**
-  **Instant updates without refresh**
-  **Fully responsive UI**

## 🛠️ Tech Stack

### Frontend
- React.js
- Tailwind CSS
- DaisyUI
- Zustand (state management)

### Backend
- Node.js
- Express.js
- MongoDB
- Cloudinary
- Socket.IO
- JWT Authentication

---> Follow these steps to run the project locally.

1️⃣ Clone the repository
```bash
git clone https://github.com/prakruthiprasad20/budzy.git
cd budzy
```
2️⃣ Install dependencies

#### Backend

```bash
cd backend
npm install
```

#### Frontend

```bash
cd frontend
npm install
```

3️⃣ Environment Variables

Create a `.env` file inside the **backend** folder and add:

```env
MONGODB_URI=your_mongodb_connection_string

PORT=5001

JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

```



4️⃣ Run the application

#### Start the backend server

```bash
cd backend
npm run dev
```

#### Start the frontend server

```bash
cd frontend
npm run dev
```

5️⃣ Open in browser

The application will be available at:

```
http://localhost:3000
```


