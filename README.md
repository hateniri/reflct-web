# UPHASH Viewer - 3D Gaussian Splatting Gallery

A Netflix-style web application for showcasing 3D Gaussian Splatting content using the Reflct viewer platform.

## 🚀 Features

- 🎨 Netflix-style responsive gallery interface
- 🔌 Integration with Reflct 3DGS viewer
- 🏢 Multiple scene support per content item
- 📱 Mobile-optimized vertical thumbnails
- 🇯🇵 Japanese category organization
- 🎯 Hide-on-scroll header for better viewer experience
- 🔐 Secure API key management

## 🔧 Setup

### Prerequisites

- A Reflct account with API key (get one at https://app.reflct.app)
- Your own 3D Gaussian Splatting scenes uploaded to Reflct

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/hateniri/reflct-web.git
cd reflct-web
```

2. Create a `config.local.js` file for your API key:
```javascript
// config.local.js
REFLCT_CONFIG.apiKey = 'YOUR_ACTUAL_API_KEY_HERE';
```

3. Open `index.html` in your browser or use a local server:
```bash
python -m http.server 8000
# or
npx serve
```

### Environment Configuration

The project uses a configuration system to protect API keys:

- `config.js` - Main configuration file (safe to commit)
- `config.local.js` - Local override with actual API key (git-ignored)
- `.env.example` - Example environment file for reference

**⚠️ Important:** Never commit your actual API key to the repository!

## 🚀 Deployment

### GitHub Pages with GitHub Actions (Recommended)

1. **Fork or clone** the repository
2. **Create GitHub Secret** for your API key:
   - Go to Settings → Secrets and variables → Actions
   - Add a new secret named `REFLCT_API_KEY` with your API key
3. **Set up GitHub Actions** workflow (example):

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Replace API key
        run: |
          sed -i "s/YOUR_API_KEY_HERE/${{ secrets.REFLCT_API_KEY }}/g" config.js
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./
```

4. **Enable GitHub Pages** in repository settings

### Manual Deployment

For manual deployment without exposing your API key:
1. Build locally with your API key
2. Deploy the static files to your hosting service
3. Ensure your domain is whitelisted in your Reflct dashboard

## 📁 Project Structure

```
reflct-web/
├── index.html          # Main catalog page
├── detail.html         # Individual content viewer page  
├── pricing.html        # Pricing page
├── styles.css          # Main styles
├── script.js           # Catalog functionality
├── detail-viewer.js    # Reflct viewer integration
├── config.js           # Configuration (without API key)
├── config.local.js     # Local config with API key (git-ignored)
├── .env.example        # Environment variable example
├── .gitignore          # Git ignore file
├── assets/
│   └── images/
│       └── uphash_logo_white.png
├── favicon.ico         # Site favicon
└── README.md          # This file
```

## 🎨 Content Categories

- 美術館 (Museums)
- オフィスビル (Office Buildings)
- 建築空間 (Architectural Spaces)
- 公園 (Parks)
- 工場 (Factories)
- 自然 (Nature)
- 商業施設 (Commercial Facilities)
- 屋外空間 (Outdoor Spaces)

## 🔐 Security Best Practices

1. **Never commit API keys** to version control
2. **Use GitHub Secrets** for automated deployments
3. **Whitelist domains** in your Reflct dashboard
4. **Keep `config.local.js`** in `.gitignore`
5. **Rotate API keys** regularly

## 🛠️ Adding New Content

To add new 3D scenes:

1. Upload your 3DGS files to Reflct
2. Get the scene ID from Reflct dashboard
3. Add the scene to `customScenes` in `config.js`:
```javascript
customScenes: {
    'your-scene-name': 'your-scene-id-here'
}
```

4. Update `catalogData` in `script.js` with your content:
```javascript
{ 
    id: 19, 
    title: "Your New Scene",
    category: "カテゴリー",
    views: "1.5K",
    description: "説明文をここに",
    duration: "10分",
    year: "2024",
    spaces: ["空間1", "空間2"],
    tags: ["タグ1", "タグ2"],
    reflctSceneIds: {
        "空間1": "your-scene-name",
        "空間2": "another-scene-id"
    }
}
```

## 🎯 Customization

### Styling

The design uses CSS custom properties for easy theming:

```css
:root {
    --color-black: #0a0a0a;
    --color-accent: #ff0040;
    --gradient-primary: linear-gradient(135deg, #ff0040 0%, #ff3366 50%, #ff6b96 100%);
}
```

### Content Display

- Desktop: 16:9 aspect ratio thumbnails
- Mobile: 2:3 vertical thumbnails for better mobile experience

## 💻 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📞 Support

- UPHASH Support: contact@uphash.co
- Reflct Documentation: https://docs.reflct.app
- GitHub Issues: https://github.com/hateniri/reflct-web/issues

## 📄 License

© 2024 UPHASH. All rights reserved.