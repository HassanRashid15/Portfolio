# Portfolio Website with Tailwind CSS

A modern, responsive portfolio website built with HTML, CSS, JavaScript, and Tailwind CSS.

## Features

- 🎨 Modern design with Tailwind CSS
- 📱 Fully responsive layout
- ⚡ Fast loading with CDN
- 🎯 Clean and professional appearance
- 🔧 Easy to customize

## Quick Start (CDN Method)

The project is already set up to use Tailwind CSS via CDN for immediate use:

1. Open `html/portfolio.html` in your browser
2. The page will load with all Tailwind CSS styles applied

## Development Setup (Build Process)

For production use or custom builds, follow these steps:

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Build the CSS:
```bash
# For development (with watch mode)
npm run build-css

# For production (minified)
npm run build-css-prod
```

3. Update the HTML file to use the compiled CSS instead of CDN:
   - Replace the CDN script tag with: `<link rel="stylesheet" href="../style/output.css">`

## Project Structure

```
portfolio/
├── html/
│   └── portfolio.html      # Main HTML file
├── style/
│   ├── styles.css          # Source CSS with Tailwind directives
│   └── output.css          # Compiled CSS (generated)
├── javascript/
│   └── index.js           # JavaScript file
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind configuration
└── README.md             # This file
```

## Customization

### Colors
Edit the `tailwind.config.js` file to customize the color palette:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom colors
      }
    }
  }
}
```

### Custom Components
Add custom components in `style/styles.css`:

```css
@layer components {
  .your-custom-class {
    @apply /* Tailwind utilities */;
  }
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).
