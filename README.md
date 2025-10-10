# 🚀 HERO.IO – App Explorer Platform

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v3.3.2-blue.svg)](https://tailwindcss.com/)

**HERO.IO** is a modern React-based web app that allows users to explore, install, and manage applications in a sleek, interactive interface.  
It features smooth navigation, dynamic routing, responsive layouts, and clean gradient-based UI built with Tailwind CSS and DaisyUI.

---

## 🌟 Features

- ⚡ **Dynamic Navigation System**
  - Smart active-state highlighting synced with routes.
  - Auto-detects the current page even after reload.

- 🎨 **Modern UI Design**
  - Gradient text, animated underlines, and smooth hover effects.
  - Responsive and mobile-friendly layout using **Tailwind CSS + DaisyUI**.

- 🧭 **Seamless Routing**
  - Integrated with React Router for page transitions.
  - `NavContext` ensures active tab persists across navigation.

- 📦 **Modular File Structure**
  - Clean separation of pages, components, hooks, and context.
  - Easy to extend and maintain.

- 🌈 **Interactive Components**
  - App listings, installation pages, and app details with animations.
  - Toast notifications for user actions.

- 🧹 **Utilities**
  - `ScrollToTop` component for smooth page transitions.
  - Error handling with a custom `ErrorPage`.

---

## 🛠️ Tech Stack

| Technology       | Description |
|-----------------|-------------|
| ⚛️ React         | Front-end library |
| 🧭 React Router  | Client-side routing |
| 🎨 Tailwind CSS  | Utility-first CSS framework |
| 💎 DaisyUI       | Tailwind component library |
| 🔔 React Toastify| Toast notifications |
| 📦 Context API   | Global state management |
| 💻 Recharts      | Data visualization (used in analytics views) |

---

## 📁 Project Structure

```text
src/
│
├── components/
│   ├── Navbar.jsx          # Navigation bar with gradient effects & responsive menu
│   ├── Footer.jsx          # App footer section
│   ├── ScrollToTop.jsx     # Automatically scrolls to top on route change
│
├── context/
│   └── NavContext.jsx      # Global context for navigation toggle & route sync
│
├── hooks/
│   └── useApps.js          # Custom hook for fetching app data
│
├── layout/
│   └── Layout.jsx          # Wraps Navbar, Footer, and main content (Outlet)
│
├── pages/
│   ├── Home.jsx            # Landing page
│   ├── Apps.jsx            # Displays list of available apps
│   ├── Install.jsx         # Installation management page
│   ├── AppDetails.jsx      # Detailed info page for a specific app
│   ├── ErrorPage.jsx       # Handles invalid routes and errors
│
├── routes/
│   └── Routes.jsx          # React Router setup with paths and layout
│
├── assets/                 # Static assets like images or icons
├── index.css               # Tailwind & custom styles
├── main.jsx                # React entry point
└── vite.config.js          # Vite configuration


---

# 🎯 Let's Code Your Dream 