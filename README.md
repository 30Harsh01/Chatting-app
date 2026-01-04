
---

# 💬 **Chat App – Real-Time Messaging System**

A lightweight **real-time chat application** built using **Node.js**, **Express**, **Socket.io**, and **React**.
This project was created so that I and my friends could chat inside our **computer labs**, where mobile phones were not allowed—providing a simple, fast, and practical alternative for communication.

---

## 🚀 **Why I Built This Project**

Inside our computer labs, mobile phones were not allowed, which made communication difficult during group work and assignments.

To solve this, I built a **web-based real-time chat system** that runs entirely on desktop browsers, allowing us to:

* 💬 Chat instantly without mobile phones
* 🤝 Collaborate during lab sessions
* ⚡ Communicate quickly with minimal setup

This project became both a **useful real-world tool** and a **hands-on learning experience** with real-time web technologies.

---

## ⚡ **Core Features**

### 🔥 **1. Real-Time Messaging (Socket.io)**

* Uses **Socket.io** for bidirectional real-time communication
* Messages appear instantly without page refresh
* Multiple users can chat simultaneously
* Low latency and efficient message delivery

---

### 🧑‍🚀 **2. Avatar System**

* Users can select custom avatars
* Avatars appear next to messages
* Makes chats more personal and visually engaging
* Easy identification of users

---

### 🌐 **3. Clean & Lightweight UI**

* Simple design optimized for lab usage
* Runs fully in the browser
* No installation required
* Fast loading and responsive interface

---

### 🖥️ **4. Secure & Private Sessions**

* No external authentication providers
* JWT-based authentication
* Chats are limited to active sessions
* Ideal for temporary and internal communication

---

### 🧠 **5. Global State Management (Zustand)**

* Uses **Zustand** for client-side state management
* Lightweight and scalable alternative to Redux
* Manages user data, chat state, and UI state efficiently

---

## 🏗️ **Tech Stack**

### **Backend**

* **Node.js**
* **Express.js**
* **Socket.io**
* **MongoDB**
* **JWT Authentication**

### **Frontend**

* **React**
* **Vite**
* **Zustand**
* **Socket.io Client**
* **HTML / CSS / JavaScript**

---

## 🔐 **Environment Variables Setup**

### 📦 **Backend `.env`**

Create a `.env` file in the backend root directory:

```env
MONGOURI=mongodb string like => mongodb://localhost:27017/ChatAPP
JWT_SECRET=scret
FRONTEND_URL=http://localhost:3000
isProduction= false or true
```

**Explanation:**

* `MONGOURI` → MongoDB connection string
* `JWT_SECRET` → Secret key for JWT authentication
* `FRONTEND_URL` → Allowed frontend origin for CORS
* `isProduction` → This is on production or stage

---

### 🎨 **Frontend `.env`**

Create a `.env` file in the frontend root directory:

```env
VITE_API_BASE_URL=http://localhost:5000
```

**Important:**

* Vite **only exposes env variables prefixed with `VITE_`**
* This variable is used for API calls and proxy configuration

---

## ▶️ **Running the Project**

### **Backend**

```bash
cd backend
npm install
npm run start
```

### **Frontend**

```bash
cd frontend
npm install
npm run dev
```

---

## 📡 **How It Works**

1. Users open the chat app in the browser
2. Socket.io establishes a real-time connection with the server
3. Messages are broadcast instantly to connected users
4. Zustand manages client-side chat and user state
5. MongoDB stores user/session data if required
6. JWT secures authenticated routes

---

## 🛠️ **Future Improvements**

* Group chat rooms
* Message persistence
* Typing indicators
* Uploading Images and videos
* add encryption decryption on messages
---

## 👏 **Final Notes**

This project was built with a **real problem in mind**, making it both fun and meaningful.
It helped me understand:

* Real-time communication
* WebSockets & Socket.io
* State management with Zustand
* Full-stack application flow

---
