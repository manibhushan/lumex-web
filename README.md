# TechRecruit Solutions - Modular Website

A modern, responsive website for TechRecruit Solutions, built with vanilla JavaScript using modular architecture principles.

## 🚀 Features

- **Modern Design**: Clean, professional design with responsive layout
- **Modular Architecture**: Component-based structure with ES6 modules
- **Single Page Application**: Smooth navigation without page reloads
- **Form Integration**: Google Forms integration for career applications
- **Mobile Responsive**: Optimized for all device sizes
- **SEO Friendly**: Clean HTML structure and semantic markup

## 📁 Project Structure

```
recruitment-tech-integration/
├── index.html                 # Main entry point
├── pages/                     # Individual page content
│   ├── home.html
│   ├── recruitment.html
│   ├── integration.html
│   └── careers.html
├── assets/
│   ├── css/
│   │   └── style.css         # Main stylesheet
│   └── js/
│       ├── main.js           # Application entry point
│       ├── router/
│       │   └── router.js     # Page routing logic
│       ├── components/
│       │   ├── navigation.js # Navigation component
│       │   └── footer.js     # Footer component
│       └── utils/
│           ├── validation.js # Form validation
│           └── helpers.js    # Utility functions
└── README.md                 # This file
```

## 🛠️ Getting Started

### Prerequisites

- Modern web browser with ES6 module support
- Local web server (for development)

### Installation

1. **Download/Clone the project**
   ```bash
   # If using git
   git clone [repository-url]
   cd recruitment-tech-integration
   ```

2. **Start a local web server**

   **Option 1: Using Python**
   ```bash
   python -m http.server 8000
   ```

   **Option 2: Using Node.js (with live-server)**
   ```bash
   npx live-server
   ```

   **Option 3: Using VS Code Live Server extension**
   - Install the Live Server extension
   - Right-click on `index.html` and select "Open with Live Server"

3. **Open in browser**
   Navigate to `http://localhost:8000` (or the port shown by your server)

## 🌐 Deployment

### Static Hosting (Recommended)

**Netlify (Free)**
1. Create a Netlify account
2. Drag and drop the project folder to Netlify
3. Your site will be deployed automatically

**Vercel (Free)**
1. Install Vercel CLI: `npm install -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts

**Traditional Web Hosting**
1. Upload all files to your web hosting provider
2. Ensure `index.html` is in the root directory
3. Configure your server to handle client-side routing (optional)

### Google Forms Integration

To enable career form submissions:

1. **Create a Google Form**
   - Go to [forms.google.com](https://forms.google.com)
   - Create a new form with fields matching the career form

2. **Get Form Details**
   - Click "Send" → "Link" to get the form URL
   - Extract the form ID from the URL
   - Inspect each field to get the `entry.` IDs

3. **Update the Form**
   - In `pages/careers.html`, update the form `action` attribute
   - Replace `entry.123456789` placeholders with actual entry IDs

## 🔧 Customization

### Styling
- Modify colors and design in `assets/css/style.css`
- CSS custom properties (variables) are defined at the top of the file
- Responsive breakpoints: 640px, 768px, 1024px

### Content
- Update company information in page HTML files
- Modify navigation links in `assets/js/components/navigation.js`
- Update contact information in `assets/js/components/footer.js`

### Adding New Pages
1. Create a new HTML file in the `pages/` directory
2. Add the route to `assets/js/router/router.js`
3. Add navigation link to `assets/js/components/navigation.js`

## 🏗️ Architecture

### Component System
- **Router**: Handles page navigation and loading
- **Navigation**: Header navigation with mobile support
- **Footer**: Site footer with links and contact info
- **Validation**: Form validation with real-time feedback
- **Helpers**: Utility functions for common operations

### ES6 Modules
- Uses native ES6 import/export
- Dynamic imports for performance optimization
- No build process required

### State Management
- Minimal state management through URL routing
- Component state managed locally
- Event delegation for efficient event handling

## 📱 Browser Support

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- Internet Explorer: Not supported (ES6 modules required)

## 🤝 Contributing

1. Fork the project
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For questions or support:
- Email: info@techrecruitsolutions.com
- Phone: +1 (555) 123-4567

## 🔄 Version History

- **v1.0.0** - Initial release with modular architecture
  - Complete website with 4 pages
  - Mobile-responsive design
  - Google Forms integration
  - ES6 module system
