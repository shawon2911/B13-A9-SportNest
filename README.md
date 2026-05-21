# 🏟️ SportNest — Frontend

> A modern sports hub platform where users can explore sports programs, watch highlights, and enroll in skill-based sports training courses like Football, Basketball, Cricket, Athletics, and more.

---

## 🔗 Live URL

👉 

---

## 📌 Project Purpose

SportNest is a full-featured online sports learning and enrollment platform. Users can browse available sport programs, view detailed course info, and manage their profile — all within a clean, responsive, and performant interface powered by Next.js and secured via BetterAuth.

---

## ✨ Key Features

- 🔐 **Authentication** — Email/password login & Google OAuth via BetterAuth
- 🏠 **Home Page** — Hero slider, Popular Courses, Learning Tips, Top Instructors, Trending Programs
- 📚 **All Courses Page** — Browse all sport programs with live search by title
- 🔒 **Course Details (Protected Route)** — Full curriculum visible only to logged-in users; redirects to login with return navigation
- 👤 **My Profile** — View logged-in user data with name & avatar update support
- ✏️ **Update Profile** — Dedicated route with form to update name and photo URL
- 🔔 **Toast Notifications** — Success/error feedback throughout the app
- 🔄 **Loading States** — Skeleton/spinner shown during data fetching
- 📱 **Fully Responsive** — Optimized for mobile, tablet, and desktop
- 🚫 **404 Not Found Page** — Custom page for unmatched routes
- 🎞️ **Animations** — Smooth transitions using Swiper.js / Motion

---

## 📁 Project Structure

```
sportnest-client/
├── app/
│   ├── (root)/
│   │   ├── page.jsx              # Home
│   │   ├── courses/
│   │   │   ├── page.jsx          # All Courses
│   │   │   └── [id]/page.jsx     # Course Details (protected)
│   │   ├── my-profile/
│   │   │   └── page.jsx          # My Profile
│   │   └── update-profile/
│   │       └── page.jsx          # Update Profile Form
│   ├── login/page.jsx
│   ├── register/page.jsx
│   ├── not-found.jsx
│   └── layout.jsx
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── CourseCard.jsx
│   ├── HeroSlider.jsx
│   └── ...
├── lib/
│   └── auth-client.js
├── data/
│   └── courses.json
├── public/
└── .env.local
```

---

## 📦 NPM Packages Used

| Package | Purpose |
|---|---|
| `next` | React framework with App Router |
| `react` / `react-dom` | UI library |
| `tailwindcss` | Utility-first CSS framework |
| `daisyui` | Tailwind component library |
| `better-auth` | Authentication (email + Google OAuth) |
| `swiper` | Hero banner & course sliders |
| `react-hot-toast` | Toast notifications |
| `axios` | HTTP requests to backend API |
| `motion` | Page/component animations |

---

## 🔐 Environment Variables

Create a `.env.local` file in the project root:



## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/your-username/sportnest-client.git
cd sportnest-client

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Fill in your values

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🛠️ Tech Stack

| Technology | Role |
|---|---|
| **Next.js 14** (App Router) | Frontend framework |
| **Tailwind CSS** | Styling |
| **DaisyUI** | Pre-built UI components |
| **BetterAuth** | Authentication |
| **Swiper.js** | Slider/carousel |
| **Vercel** | Deployment |

---

## 📸 Pages Overview

| Route | Description | Protected |
|---|---|---|
| `/` | Home with hero, popular courses, tips | ❌ |
| `/courses` | All courses with search | ❌ |
| `/courses/[id]` | Course detail & curriculum | ✅ |
| `/login` | Login with email or Google | ❌ |
| `/register` | Register form | ❌ |
| `/my-profile` | Logged-in user info | ✅ |
| `/update-profile` | Edit name & avatar | ✅ |

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you'd like to change.

---

## 📄 License

This project is for educational purposes. All rights reserved © SportNest 2026.