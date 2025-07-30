# MyPortfolio

A showcase of my professional work in Power BI, full-stack development, and low-code automation. Includes interactive dashboards, deployed web apps, and system integration examples.

## Overview
This portfolio website is built to showcase my professional work and projects. It features:
- Interactive project displays
- Responsive design
- Professional background
- Contact information

## Setup and Local Development
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/MyPortfolio.git
   cd MyPortfolio
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open `http://localhost:3000` in your browser

## Deployment
This website is deployed using GitHub Pages. To deploy:

1. Update the `homepage` field in `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/MyPortfolio"
   ```

2. Install gh-pages package:
   ```bash
   npm install --save-dev gh-pages
   ```

3. Add deployment scripts to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

4. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

5. Configure GitHub repository settings:
   - Go to Settings > Pages
   - Set source branch to `gh-pages`
   - Save changes

Your portfolio will be available at `https://yourusername.github.io/MyPortfolio`

## Updating Content
To update your portfolio content, modify the relevant files in the `/src` directory and redeploy.

## License
This project is open source and available under the MIT License.
