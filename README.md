# The Amala Restaurants 🍽️

A premium, ultra-modern Single Page Application (SPA) designed for a fine-dining restaurant experience. This project features a state-of-the-art UI utilizing Bento-grid layouts, glassmorphism, smooth scroll animations, and elegant typography to deliver a luxurious digital atmosphere.

## 🌟 Features

- **11-Section Architecture:** A seamless, continuous scrolling experience encompassing Navbar, Hero, About, Signature Dishes, Full Menu, Why Choose Us, Gallery, Testimonials, Reservation, Contact, and Footer.
- **Ultra-Modern Bento UI:** Interlocking rounded cards and asymmetrical grids for a highly modern aesthetic.
- **Glassmorphism:** Frosted-glass effects on the sticky navigation bar and overlay cards.
- **Premium Typography:** High-contrast design featuring bold modern sans-serif paired with elegant `Playfair Display` serif for headings.
- **Fluid Animations:** Spring-physics powered micro-interactions and scroll animations via Framer Motion.
- **Localized Content:** Indian Rupee (₹) pricing and realistic restaurant data formatting.
- **Fully Responsive:** Flawless layout scaling across mobile, tablet, and desktop views.

## 🛠️ Tech Stack

- **Framework:** [React 18](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Navigation:** `react-scroll`

## 🚀 Getting Started

Follow these steps to run the project locally:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone https://github.com/balaji3245/The-Amala-Restaurants.git
   cd The-Amala-Restaurants
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Open your browser and navigate to `http://localhost:5173/` to view the website.

## 📁 Project Structure

```
src/
├── components/          # Reusable UI sections
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   ├── FullMenu.jsx
│   ├── Gallery.jsx
│   ├── Hero.jsx
│   ├── Navbar.jsx
│   ├── Reservation.jsx
│   ├── SignatureDishes.jsx
│   ├── Testimonials.jsx
│   └── WhyChooseUs.jsx
├── App.jsx              # Main layout assembler
├── index.css            # Tailwind directives and custom CSS variables
└── main.jsx             # React entry point
```

## 🎨 Theme Configuration

The project uses a clean **White & Orange** theme with custom properties defined in `index.css`:
- **Brand Orange:** `#FF6B00`
- **Brand Dark (Text):** `#000000`
- **Backgrounds:** Pure White (`#FFFFFF`) and Soft Gray (`#F9FAFB`)
- **Serif Font:** `Playfair Display`
- **Sans Font:** `Inter`

---
*Designed & Developed by The Amala.*
