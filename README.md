# E-commerce Platform

A modern, high-performance e-commerce web application built with a focus on seamless user experience, responsive design, and robust state management.

## 🚀 Tech Stack

- **Frontend Framework:** React 19 (via Vite)
- **Styling:** Tailwind CSS v4
- **State Management:** Redux & Redux-Persist (with Redux Logger for debugging)
- **Routing:** React Router v7
- **Icons:** React Icons

## ✨ Key Features

- **Responsive Design:** Mobile-first architecture ensures a seamless shopping experience across all devices.
- **Persistent Cart:** Utilizes `redux-persist` to maintain users' shopping carts across browser sessions, completely eliminating data loss on reloads.
- **Dynamic Routing:** Implemented with `createBrowserRouter` to enable instant navigation between product catalogs, category pages, and checkout flows.
- **Modular Architecture:** Built with highly reusable UI components (e.g., `ProductCard`, `CartItem`, `CategoryCard`) for scalable and maintainable code.
- **Real-Time Data Fetching:** Efficient front-end utilities for querying and categorizing product information dynamically.

## 📦 Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/mehdi-raza99/E-commerce-Platform.git
   ```

2. Navigate to the project directory:
   ```bash
   cd E-commerce-Platform
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## 🛠️ Project Structure

- `src/components/`: Reusable specific UI components (Navbars, Cards).
- `src/pages/`: Top-level routing pages (Home, Cart, Contact, About, Category Product Listing).
- `src/store/`: Redux configuration, continuous root reducers, and persisted state logic.
- `src/utils/`: Helper functions like filtering and API data-fetching.
