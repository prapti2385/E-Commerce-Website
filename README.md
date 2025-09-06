# MERN E-Commerce 🛒

A full-stack e-commerce application built with the **MERN stack** (MongoDB, Express.js, React, Node.js).  
It features a **customer-facing frontend**, a **separate admin dashboard** for management, and a **robust backend API**.

---
<img width="400" height="300" alt="image" src="https://github.com/user-attachments/assets/b184fe88-aaf0-476d-b27d-3035a40d403a" />
<img width="400" height="300" alt="image" src="https://github.com/user-attachments/assets/9055af7d-d049-419c-a605-bf04514dd171" />
<img width="400" height="300" alt="image" src="https://github.com/user-attachments/assets/2c91e25e-2b9b-4bbb-af4b-166e891dffc3" />
<img width="400" height="300" alt="image" src="https://github.com/user-attachments/assets/748865e2-c6a3-404c-945b-a8b97edc1814" />
<img width="400" height="300" alt="image" src="https://github.com/user-attachments/assets/a11d28e5-67ce-4a49-9fdb-9d4ca38d98cb" />
<img width="400" height="300" alt="image" src="https://github.com/user-attachments/assets/4816751f-9042-4c53-a4c0-acca07dfaf6a" />






## ✨ Key Features

- 🛍️ **Customer Frontend**: Browse products, view details, add items to cart, and complete purchases.
- 🧑‍💻 **Admin Dashboard**: Manage products, users, and orders with a dedicated React-based panel.
- 🔐 **Authentication & Authorization**: Secure login/signup with JWT-based authentication.
- 💳 **Payments Integration**: Supports **Stripe** and **Razorpay** for processing payments.
- ☁️ **Image & File Uploads**: Upload and manage product images using **Multer** & **Cloudinary**.
- ⚡ **Real-time Notifications**: Interactive toasts and alerts powered by **React Toastify**.
- 🏗️ **Scalable Architecture**: Modular backend API, reusable React components, and a clean project structure.

---

## 📂 Project Structure

The project is divided into three main parts:
```
/backend → Node.js + Express server, APIs, MongoDB, Authentication, Payments
/frontend → Customer-facing React app (shopping experience)
/admin → Admin React app (manage products, orders, users)
```
---
## 🛠️ Tech Stack

### Backend
- **Runtime**: Node.js  
- **Framework**: Express.js  
- **Database**: MongoDB with Mongoose  
- **Authentication**: JWT, bcrypt  
- **File Uploads**: Multer & Cloudinary  
- **Payments**: Stripe
- **Middleware**: CORS, Dotenv  

### Frontend & Admin
- **Library**: React  
- **UI/Styling**: Tailwind CSS  
- **Routing**: React Router  
- **HTTP Client**: Axios  
- **Notifications**: React Toastify  
- **Build Tool**: Vite  

---

## 🎮 How to Run

Objective: Run all three parts of the app (backend, frontend, admin) simultaneously.

| Terminal | Command | Runs |
|----------|---------|------|
| 1 | `npm run server` (inside `/backend`) | Backend API on `http://localhost:4000` |
| 2 | `npm run dev` (inside `/frontend`) | Customer frontend on `http://localhost:5173` |
| 3 | `npm run dev` (inside `/admin`) | Admin panel on `http://localhost:5174` |

---

## 🚀 Getting Started

### Prerequisites
- Node.js **v18+**
- npm / yarn / pnpm
- MongoDB (local or MongoDB Atlas connection URI)

### 1. Setup Backend
```bash
cd backend
npm install
```
---

```bash
MONGODB_URI = your_mongodb_uri
CLOUDINARY_API_KEY = your_key
CLOUDINARY_SECRET_KEY = your_key
CLOUDINARY_NAME = your_cloud_name
JWT_SECRET = your_secret
ADMIN_EMAIL = test@gmail.com
ADMIN_PASSWORD = admin_password
STRIPE_SECRET_KEY = our_key
```

```bash
npm run server
```
### 2. Setup Frontend
```
cd frontend
npm install
npm run dev
```
## 3. Setup Admin
```
cd admin
npm install
npm run dev
```

## Running the Full Project

- 🖥️ **Terminal 1**: npm run server in /backend
- 🌐 **Terminal 2**: npm run dev in /frontend
- 🛠️ **Terminal 3**: npm run dev in /admin
---
## License 
[MIT](https://github.com/prapti2385/E-Commerce-Website/tree/main?tab=MIT-1-ov-file)
