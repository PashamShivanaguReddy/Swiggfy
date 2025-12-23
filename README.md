# SwiggyLite (Food Delivery UI)

A modern, responsive food delivery web app inspired by Swiggy, built with React + Vite. It includes a Home page with hero/search, an Explore page with filters, a Contact page, and a Login/Profile page (mock auth with localStorage).

## Tech Stack
- React (Functional Components)
- React Router DOM (SPA navigation) [web:12]
- Vite (fast dev server + build) [web:114]

## Features
- Home page
  - Hero section + location input (manual + basic geolocation detect)
  - Search bar UI
  - Featured restaurants + offers section
- Explore page
  - Restaurant listing cards (image, rating, cuisine, time, price tier)
  - Filters: price, minimum rating, veg/non-veg + search
  - Responsive grid
- Contact page
  - Contact form + support details + social links
- Login/Profile
  - Login/Signup UI (demo)
  - Profile view (name/email/orders) + logout
  - Persists session in `localStorage`

## Folder Structure
```
src/
  components/
  pages/
  data/
  styles/
  App.jsx
  main.jsx
```

## Getting Started (Local Setup)
### 1) Clone
```
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>
```

### 2) Install dependencies
```
npm install
```

### 3) Start dev server
```
npm run dev
```
Vite will print the local URL in the terminal. [web:114]

## Build & Preview (Production)
### Build
```
npm run build
```
This generates the production build (usually in `dist/`). [web:114]

### Preview the build locally
```
npm run preview
```
Vite preview lets you test the built app locally. [web:115]

## Notes
- This project uses mock restaurant/menu data in `src/data/restaurants.js`.
- Authentication is demo-only using `localStorage` (no backend).

## Deployment
You can deploy the `dist/` folder to Netlify / Vercel / GitHub Pages (static hosting). Refer to Vite static deploy guidance if needed. [web:115]

## License
MIT (or update as needed)
