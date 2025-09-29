# Manaswini Acharya - Portfolio Website

A beautiful, modern portfolio website built with React, Vite, Tailwind CSS, and Framer Motion, featuring a stunning pastel color scheme.

## 🎨 Features

- Beautiful pastel color palette (lavender, peach, mint, pink, sky blue)
- Smooth animations with Framer Motion
- Responsive design
- Organized sections: Home, Research, Teaching, Awards, Skills, Contact
- Highlighted key achievements and skills
- Modern UI with shadcn/ui components

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Add your images to `src/assets/`:
   - professional-portrait.jpg
   - research-illustration.jpg
   - market-research.jpg
   - data-visualization.jpg

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## 🚀 Deploying to GitHub Pages

This site is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Initial Setup

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click on **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**

3. **Automatic Deployment:**
   - Every time you push to the `main` or `master` branch, the site will automatically build and deploy
   - You can also manually trigger deployment from the **Actions** tab

4. **View Your Site:**
   - Your site will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`
   - If your repo is named `YOUR_USERNAME.github.io`, it will be at: `https://YOUR_USERNAME.github.io/`

### Manual Deployment

If you prefer manual deployment, you can use:

```bash
npm run build
# Then manually upload the 'dist' folder contents to your hosting service
```

## 📁 Project Structure

```
website/
├── src/
│   ├── assets/          # Images and static files
│   ├── components/      # React components
│   │   └── ui/         # UI components (button, card, badge, separator)
│   ├── App.jsx         # Main application component
│   ├── App.css         # Styles
│   └── main.jsx        # Entry point
├── index.html          # HTML template
├── package.json        # Dependencies
├── vite.config.js      # Vite configuration
└── tailwind.config.js  # Tailwind CSS configuration
```

## 🎨 Color Scheme

- **Lavender**: Primary color for headings and key elements
- **Peach**: Warm accents and secondary elements
- **Mint**: Methodological sections
- **Soft Pink**: Highlights and special badges
- **Sky Blue**: Additional variety
- **Cream**: Background color

## 📝 Customization

Edit `src/App.jsx` to update:
- Personal information
- Research publications
- Awards and achievements
- Skills
- Contact information

## 🛠️ Technologies

- React 18
- Vite 5
- Tailwind CSS 3
- Framer Motion 11
- Lucide React (icons)

## 📄 License

© 2024 Manaswini Acharya. All rights reserved.
