# goit-js-hw-11

A simple image search application using the Pixabay API, built with vanilla JavaScript, Vite, and modern UI libraries. Users can search for images, view results in a responsive gallery, and see image details in a lightbox.

## Features

- **Image Search:** Search for images by keyword using the Pixabay API.
- **Responsive Gallery:** Images are displayed in a flexible, responsive gallery layout.
- **Image Details:** Each image shows likes, views, comments, and downloads.
- **Lightbox:** Click on an image to view it in a larger format using SimpleLightbox.
- **Loading Indicator:** Loader animation is shown while fetching images.
- **User Notifications:** Error and warning messages are displayed using iziToast.
- **Modern Build:** Uses Vite for fast development and optimized builds.
- **GitHub Pages Deployment:** Automated deployment via GitHub Actions.

## Project Structure

```
.
├── .editorconfig
├── .gitignore
├── .prettierrc.json
├── package.json
├── README.md
├── vite.config.js
├── .github/
│   └── workflows/
│       └── deploy.yml
├── assets/
│   ├── deploy-status.png
│   ├── gh-actions-perm-1.png
│   ├── gh-actions-perm-2.png
│   ├── how-it-works.png
│   ├── repo-settings.png
│   ├── template-step-1.png
│   └── template-step-2.png
└── src/
    ├── index.html
    ├── main.js
    ├── css/
    │   └── style.css
    └── js/
        ├── pixabay-api.js
        └── render-functions.js
```

### Key Files

- **[src/index.html](src/index.html):** Main HTML file with the search form and gallery container.
- **[src/main.js](src/main.js):** Entry point; handles form submission, fetches images, and manages UI state.
- **[src/js/pixabay-api.js](src/js/pixabay-api.js):** Contains [`fetchImages`](src/js/pixabay-api.js) function to interact with the Pixabay API.
- **[src/js/render-functions.js](src/js/render-functions.js):** Contains [`renderImages`](src/js/render-functions.js), [`showLoader`](src/js/render-functions.js), [`hideLoader`](src/js/render-functions.js), and [`clearGallery`](src/js/render-functions.js) for UI rendering and state management.
- **[src/css/style.css](src/css/style.css):** Styles for the form, gallery, loader, and layout.
- **[vite.config.js](vite.config.js):** Vite configuration for building and serving the project.
- **[.github/workflows/deploy.yml](.github/workflows/deploy.yml):** GitHub Actions workflow for deploying to GitHub Pages.

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Run in development mode:**
   ```sh
   npm run dev
   ```

3. **Build for production:**
   ```sh
   npm run build
   ```

4. **Preview production build:**
   ```sh
   npm run preview
   ```

## Deployment

This project is configured to deploy automatically to GitHub Pages using the workflow in [.github/workflows/deploy.yml](.github/workflows/deploy.yml).

## Dependencies

- [Vite](https://vitejs.dev/)
- [iziToast](https://izitoast.marcelodolza.com/)
- [SimpleLightbox](https://simplelightbox.com/)
- [postcss-sort-media-queries](https://github.com/solversgroup/postcss-sort-media-queries)
- [vite-plugin-full-reload](https://github.com/ElMassimo/vite-plugin-full-reload)
- [vite-plugin-html-inject](https://github.com/ElMassimo/vite-plugin-html-inject)

