# My Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. This portfolio showcases my projects, skills, and experience as a developer.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean, minimalist design with glassmorphism effects
- **Project Showcase**: Display of featured projects with live demos and source code links
- **Interactive Components**: Smooth animations and hover effects
- **Fast Loading**: Optimized with Vite for lightning-fast development and builds
- **TypeScript**: Type-safe development experience

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Deployment**: Ready for deployment on Vercel, Netlify, or GitHub Pages

## 📋 Projects Featured

1. **E-commerce Platform** - Modern e-commerce solution built with React and Django
2. **Task Management App** - Collaborative task management with real-time updates
3. **Issues Register** - System for tracking and managing issues and bugs
4. **Portfolio Website** - This very website showcasing my work

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd MyPortfolio
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and visit `http://localhost:5173`

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 📁 Project Structure

```
MyPortfolio/
├── public/
├── src/
│   ├── components/
│   │   └── Portfolio.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🎨 Customization

### Adding New Projects

Edit the `projects` array in `src/components/Portfolio.tsx`:

```tsx
{
  title: "Your Project Name",
  description: "Brief description of your project",
  image: "path/to/your/image",
  tech: ["React", "Node.js", "MongoDB"],
  demo: "https://your-demo-link.com",
  github: "https://github.com/yourusername/your-repo"
}
```

### Styling

This project uses Tailwind CSS for styling. You can customize:

- Colors in `tailwind.config.js`
- Global styles in `src/index.css`
- Component-specific styles directly in the TSX files

## 🚀 Deployment

### Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Netlify

1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure redirects for single-page application

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json
3. Run `npm run deploy`

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

Feel free to reach out if you have any questions or suggestions!

- **Email**: pkcastrence@gmail.com
- **LinkedIn**: https://www.linkedin.com/in/patrick-keith-castrence-b1809598/
- **GitHub**: https://github.com/patrickcastr

---

⭐ Star this repository if you found it helpful!
