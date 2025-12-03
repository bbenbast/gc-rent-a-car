GC Rent-a-Car Website
A modern, responsive landing page for GC Rent-a-Car, a car rental service based in Cabinda, Angola. This project is built using React 19, TypeScript, and Vite to ensure high performance and ease of maintenance.

🚀 Features
Fleet Showcase: Interactive grid displaying available vehicles (Chevrolet Spark, Hyundai Venue, Toyota Hilux, etc.) with specs and categories.

Direct Booking: Integrated "Book Now" buttons that open a pre-filled WhatsApp message to the company's business number.

Responsive Design: Fully optimized for mobile, tablet, and desktop screens.

Company Information: Dedicated sections for "About Us," "Team," and "Contact Info."

Modern UI: Clean aesthetic using Tailwind CSS utility classes and Lucide icons.

🛠️ Tech Stack
Framework: React 19

Build Tool: Vite

Language: TypeScript

Styling: Tailwind CSS

Icons: Lucide React

Linting: ESLint

📦 Prerequisites
Before you begin, ensure you have Node.js installed on your machine.

⚡ Getting Started
Clone the repository

Bash

git clone https://github.com/yourusername/gc-rent-a-car.git
cd gc-rent-a-car
Install dependencies

```Bash

npm install
Run the development server

```

npm run dev
Open your browser and navigate to http://localhost:5173 to view the app.

🔧 Configuration & Customization
The project is designed to be easily editable without touching the complex logic.

1. Update Business Info & Data
Open src/constants.ts. Here you can update:

Company Info: Phone numbers, email, address, and NIF.

Fleet Data: Add or remove cars, change prices, or update features.

Team Members: Update names, roles, and photos.

2. Update Images
Place new images in the src/assets/ folder and update the import references in src/constants.ts.

🏗️ Building for Production
To create an optimized production build:

```Bash

npm run build

```
This will generate a dist folder containing your static files, ready for deployment.

You can preview the production build locally using:

```Bash

npm run preview

```
🚀 Deployment
Option 1: Vercel (Recommended)
Push your code to GitHub.

Import the project into Vercel.

Vercel will detect Vite automatically. Click Deploy.

Option 2: Netlify
Drag and drop the dist folder (created after running npm run build) into the Netlify Drop zone.

Note: For client-side routing, ensure you add a _redirects file in your public/ folder containing: /* /index.html 200.

📄 Scripts
npm run dev: Starts the development server.

npm run build: Type-checks and builds the project for production.

npm run lint: Runs ESLint to find code issues.

npm run preview: Previews the built application locally.

📝 License
This project is proprietary to GC Rent-a-Car. All rights reserved.
