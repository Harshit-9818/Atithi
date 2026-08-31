🍽️ Atithi — Food Delivery Landing Page

Atithi is a modern, responsive food-delivery landing page built with React.js, Vite, and Tailwind CSS. The project recreates the visual experience of a premium food-delivery service with a full-screen video hero, food-themed illustrations, feature highlights, a Gold membership section, app-download CTA, and footer.

Live Website: https://harshit-9818.github.io/Atithi/

GitHub Repository: https://github.com/Harshit-9818/Atithi

✨ Features

🎥 Full-screen video hero section with autoplay, looping, muted background video

🍔 Food-focused promotional section with burger, momos, pizza, tomatoes, leaves, and decorative lines

📊 Platform statistics section showcasing restaurants, cities, and orders delivered

📱 App feature showcase presented around a mobile-phone visual

🌟 Gold membership section with premium benefits

📲 Download-the-app section with Google Play and App Store badges

🔳 QR-code based app download CTA

❄️ Snowfall visual effect using react-snowfall

🧩 Component-based React architecture for maintainability

📱 Responsive UI built with Tailwind CSS utility classes

🚀 GitHub Pages deployment configured through Vite's base path

🖥️ Website Preview

Hero Section



Better Food for More People



App Features



Gold Membership



Download & Footer



🛠️ Tech Stack

Technology

Purpose

React 19

Building the user interface

Vite 7

Development server and production build tooling

Tailwind CSS 4

Styling and responsive layouts

@tailwindcss/vite

Tailwind CSS integration with Vite

react-snowfall

Decorative snowfall effect

JavaScript / JSX

Application logic and React components

GitHub Pages

Static website hosting

📁 Project Structure

Atithi/
├── public/
│   └── assets/
│
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Download.jsx
│   │   ├── FeatureSection.jsx
│   │   ├── FeaturesCard.jsx
│   │   ├── Footer.jsx
│   │   ├── Gold.jsx
│   │   ├── HeroSection.jsx
│   │   └── OrderSection.jsx
│   │
│   ├── utils/
│   │   └── app.constants.js
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── docs/
│   └── screenshots/
│       ├── 01-hero.png
│       ├── 02-order-section.png
│       ├── 03-features.png
│       ├── 04-gold.png
│       └── 05-download-footer.png
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md

🧩 Main Components

HeroSection

The landing section uses a full-screen background video with a dark gradient overlay, Atithi branding, food-delivery messaging, and app-store download badges.

OrderSection

Introduces the food-delivery service and presents platform statistics along with decorative food imagery.

FeatureSection

Highlights different experiences available through the app, including healthy food, vegetarian mode, party planning, gift cards, gourmet food, offers, food on train, and collections.

Gold

Presents the premium Gold membership experience and its benefits.

Download

Provides a final call-to-action for downloading the Atithi app, including app-store badges and a QR code.

Footer

Contains quick links, customer-support links, company information, social links, and app-download badges.

⚙️ Installation & Local Development

1. Clone the repository

git clone https://github.com/Harshit-9818/Atithi.git
cd Atithi

2. Install dependencies

npm install

3. Start the development server

npm run dev

The development server will be available at the local URL shown by Vite, usually:

http://localhost:5173/

4. Build for production

npm run build

5. Preview the production build

npm run preview

🚀 Deployment

The project is configured for GitHub Pages.

The Vite configuration uses the repository base path:

base: '/Atithi/',

This allows the production build to work correctly at:

https://harshit-9818.github.io/Atithi/

If GitHub Actions is configured for the repository, pushing changes to the main branch can trigger the deployment workflow automatically.

📦 Dependencies

The project uses the following primary packages:

react
react-dom
vite
@vitejs/plugin-react
tailwindcss
@tailwindcss/vite
react-snowfall

Install all dependencies with:

npm install

🎨 Design Highlights

Premium food-delivery visual style

Large typography and strong visual hierarchy

Full-screen cinematic hero section

Food imagery integrated with decorative elements

Rounded statistic card with elevated shadow

Mobile-app focused feature presentation

Pink, white, and black visual sections

Gold-themed premium membership section

Responsive Tailwind CSS layouts

🌐 Live Demo

Website: https://harshit-9818.github.io/Atithi/

Repository: https://github.com/Harshit-9818/Atithi

👨‍💻 Author

Harshit Jain

GitHub: https://github.com/Harshit-9818

📄 License

This project is intended for educational and portfolio purposes.

The project uses external visual assets and media referenced by the application. Please verify the licensing/usage rights of third-party assets before using the project commercially.
