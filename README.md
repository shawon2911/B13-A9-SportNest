# SportNest — Client

A modern sports facility booking platform where users can explore, book, and manage sports venues like football turfs, badminton courts, swimming lanes, and tennis courts.

---

## 🔗 Live URL

[https://sportnest.vercel.app](https://sportnest.vercel.app)

---

## ✨ Features

- Browse all available sports facilities with search and filter by sport type
- Book a facility by selecting date, time slot, and hours — total price calculated automatically
- View and cancel personal bookings from the My Bookings dashboard
- Add new facilities with image upload via imgbb/postimage
- Manage (update/delete) your own listed facilities
- Google OAuth and email/password authentication via BetterAuth
- Protected private routes — no redirect to login on reload
- Profile dropdown with quick access to all user actions
- Toast notifications for all success/error feedback
- Loading spinner on data fetch, custom 404 not-found page
- Fully responsive across mobile, tablet, and desktop

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS + HeroUI |
| Auth | BetterAuth (Google + Credentials) |
| HTTP | Axios |
| Animations | Framer Motion |
| Icons | React Icons |
| Deployment | Vercel |

---

## 📦 NPM Packages

| Package | Purpose |
|---|---|
| `better-auth` | Authentication engine |
| `axios` | API requests |
| `framer-motion` | Animations |
| `react-hot-toast` | Toast notifications |
| `react-icons` | Icon library |
| `swiper` | Hero banner slider |
| `@heroui/react` | UI component library |










## 🚀 Getting Started

```bash
git clone https://github.com/shawon2911/B13-A9-SportNest
cd SportNest
npm install
cp .env.example .env.local   # fill in your values
npm run dev
```

---

## 📄 Pages & Routes

| Route | Access |
|---|---|
| `/` | Public |
| `/all-facilities` | Public |
| `/facility/:id` | Private |
| `/my-bookings` | Private |
| `/add-facility` | Private |
| `/manage-my-facilities` | Private |
| `/login` | Public |
| `/signup` | Public |
