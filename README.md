# MyPortfolio - Kraftylytix

This is the personal portfolio website for Kraftylytix, built with React and Vite.

## Features

- Modern React application using TypeScript
- Hash-based routing for improved GitHub Pages compatibility
- Responsive design for all device sizes
- Custom 404 page handling

## Routing

This application uses HashRouter from react-router-dom for routing. This approach was chosen because:

- It works well with GitHub Pages hosting
- It doesn't require server-side configuration
- It handles page refreshes correctly on static hosting

## 404 Handling

The project includes a custom 404 page implementation:

1. A static `404.html` page that redirects to the main application with a `/404` hash route
2. A React `NotFound` component that displays when users navigate to undefined routes
3. Proper routing configuration to catch all invalid paths

## Development

To run this project locally:

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

## Deployment

This project is configured for deployment to GitHub Pages:

```bash
# Build the project
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## Technologies Used

- React
- TypeScript
- Vite
- React Router (HashRouter)
- GitHub Pages
Your portfolio will be available at `https://yourusername.github.io/MyPortfolio`

## Updating Content
To update your portfolio content, modify the relevant files in the `/src` directory and redeploy.

## License
This project is open source and available under the MIT License.
