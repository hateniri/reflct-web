# 3DGS Gallery

A sophisticated, Netflix-inspired catalog website for showcasing 3D Gaussian Splatting content. Built as a static site optimized for GitHub Pages hosting.

## Features

- 🎨 Modern black-based design with gradient accents
- 📱 Fully responsive layout (mobile-first approach)
- ✨ Smooth animations and transitions
- 🎯 Interactive hover effects
- 🔍 Category filtering system
- 🚀 Optimized for performance
- 📦 No build process required - pure HTML/CSS/JS

## Quick Start

1. Clone the repository
2. Open `index.html` in your browser
3. For GitHub Pages, enable it in repository settings

## Structure

```
├── index.html      # Main HTML file
├── styles.css      # All styling with CSS animations
├── script.js       # Interactive functionality
├── README.md       # Documentation
└── CLAUDE.md       # Development guidelines
```

## Customization

### Adding 3DGS Content

Edit the `catalogData` array in `script.js`:

```javascript
const catalogData = [
    { id: 1, title: "Your Scene", category: "category", views: "1K" },
    // Add more items...
];
```

### Styling

The design uses CSS custom properties for easy theming:

```css
:root {
    --color-black: #0a0a0a;
    --color-accent: #ff0040;
    --gradient-primary: linear-gradient(135deg, #ff0040 0%, #ff3366 50%, #ff6b96 100%);
}
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Future Enhancements

- Integration with actual 3DGS viewer libraries
- Backend API for dynamic content
- User authentication
- Content upload functionality

## License

MIT