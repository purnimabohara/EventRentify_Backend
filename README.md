# EventRentify – Backend

This is the backend API service for **EventRentify**, a full-stack rental platform built to connect users, vendors, and admins in the event equipment rental ecosystem. The backend powers secure user authentication, dynamic item management, booking flows, and admin oversight — all aligned with a user-centered design process.

---

## 🔧 What the Backend Does

- Manages user roles (User, Vendor, Admin) with secure login and JWT-based authentication
- Supports CRUD operations for:
  - Users, rental items, categories, carts, and orders
- Handles booking requests, order status updates, and real-time interaction with frontend
- Ensures secure password reset, profile editing, and booking verification
- Serves as the logic layer behind item filtering, cart pricing, and order confirmation

---

## 💡Design Process

- Designed API routes around **user flows**, not just database structure  
- Focused on **clarity**, **modularity**, and **error handling** to support smooth UI behavior  
- Ensured admin and vendor permissions were scoped and logically separated  
- Supported end-to-end testing with real data from frontend forms  

---

## ⚙️ Tech Stack

- **Node.js** with **Express**
- **MongoDB** with Mongoose ORM
- **JWT** for token-based authentication
- **bcrypt.js** for password encryption
- **Nodemailer** for password recovery flows

---

## 📂 API Structure Overview

- `/auth` – Register, login, reset, JWT verify  
- `/items` – View, create, edit, delete items  
- `/cart` – Add to cart, calculate totals, remove items  
- `/orders` – Place orders, return items, update status  
- `/users` – Admin and user management endpoints  

---

> This backend was built to align with frontend requirements and user experience goals, enabling clear flows across all platform roles. It supports modular, scalable design suited for future business logic and platform growth.

[🔙 Frontend Repository](https://github.com/purnimabohara/EventRentify-Frontend)
