# Lumex Enterprise Solutions - Vue.js Website

A modern, responsive website for Lumex Enterprise Solutions, built with Vue.js 3 and Vite, featuring modular architecture and comprehensive form handling.

## 🚀 Features

- **Vue.js 3**: Modern reactive framework with Composition API support
- **Vite Development**: Lightning-fast development server and hot module replacement
- **Component Architecture**: Reusable Vue components with organized structure
- **Single Page Application**: Smooth Vue Router-based navigation
- **Modular Data Management**: JSON-based static content with organized data structure
- **Advanced Form Validation**: Centralized validation utilities with real-time feedback
- **Formspree Integration**: Professional form submission handling
- **Mobile Responsive**: Optimized for all device sizes with mobile-first design
- **CSS Architecture**: Modular CSS with component-specific stylesheets
- **File Upload Support**: Resume/document upload with validation

## 📁 Project Structure

```
lumex-web/
├── index.html                      # Main entry point
├── package.json                    # Dependencies and scripts
├── vite.config.js                  # Vite configuration
├── public/                         # Static assets
│   └── css/                        # CSS stylesheets
│       ├── style.css              # Global styles and CSS variables
│       └── components/            # Component-specific CSS
│           ├── navigation.css      # Navigation styling
│           ├── hero.css           # Hero section styling
│           ├── footer.css         # Footer styling
│           └── careers.css        # Careers page styling
├── src/                           # Source code
│   ├── main.js                    # Application entry point
│   ├── App.vue                    # Root Vue component
│   ├── style.css                  # CSS imports
│   ├── components/                # Vue components
│   │   ├── home/
│   │   │   ├── index.vue          # Home page component
│   │   │   └── script.js          # Component logic
│   │   ├── recruitment/
│   │   │   ├── index.vue          # Recruitment page component
│   │   │   └── script.js          # Component logic
│   │   ├── technology/
│   │   │   ├── index.vue          # Technology solutions component
│   │   │   └── script.js          # Component logic
│   │   ├── careers/
│   │   │   ├── index.vue          # Careers page component
│   │   │   └── script.js          # Component logic
│   │   ├── contact-us/
│   │   │   ├── index.vue          # Contact page component
│   │   │   └── script.js          # Component logic
│   │   ├── navigation/
│   │   │   ├── index.vue          # Navigation component
│   │   │   └── script.js          # Navigation logic
│   │   └── footer/
│   │       ├── index.vue          # Footer component
│   │       └── script.js          # Footer logic
│   ├── data/                      # Static content data
│   │   ├── components/            # Component-specific data organized by page
│   │   │   ├── careers/           # Career page data files
│   │   │   │   ├── careers-benefits.json
│   │   │   │   ├── careers-culture-items.json
│   │   │   │   ├── careers-growth.json
│   │   │   │   ├── careers-statistics.json
│   │   │   │   ├── careers-teams.json
│   │   │   │   ├── careers-testimonials.json
│   │   │   │   └── job-openings.json
│   │   │   ├── contact-us/        # Contact page data files
│   │   │   │   ├── contact-faq.json
│   │   │   │   ├── contact-form-alternatives.json
│   │   │   │   ├── contact-methods.json
│   │   │   │   ├── office-locations.json
│   │   │   │   └── response-commitments.json
│   │   │   ├── home/              # Home page data files
│   │   │   │   ├── home-company-overview.json
│   │   │   │   ├── home-core-values.json
│   │   │   │   ├── home-hero-content.json
│   │   │   │   ├── home-industries.json
│   │   │   │   ├── home-process-steps.json
│   │   │   │   ├── home-services.json
│   │   │   │   ├── home-stats.json
│   │   │   │   ├── home-tech-stack.json
│   │   │   │   └── home-testimonials.json
│   │   │   ├── recruitment/       # Recruitment page data files
│   │   │   │   ├── recruitment-candidate-experience.json
│   │   │   │   ├── recruitment-challenges.json
│   │   │   │   ├── recruitment-industries.json
│   │   │   │   ├── recruitment-metrics.json
│   │   │   │   ├── recruitment-process-steps.json
│   │   │   │   ├── recruitment-services.json
│   │   │   │   ├── recruitment-specialized-roles.json
│   │   │   │   ├── recruitment-tech-stack.json
│   │   │   │   └── recruitment-testimonials.json
│   │   │   └── technology/        # Technology page data files
│   │   │       ├── technology-benefits.json
│   │   │       ├── technology-case-studies.json
│   │   │       ├── technology-categories.json
│   │   │       ├── technology-innovation.json
│   │   │       ├── technology-metrics.json
│   │   │       ├── technology-partnerships.json
│   │   │       ├── technology-process-steps.json
│   │   │       ├── technology-services.json
│   │   │       └── technology-testimonials.json
│   │   └── shared/                # Shared data across components
│   │       ├── company-info.json  # Company information
│   │       ├── contact-info.json  # Contact details
│   │       ├── page-content.json  # Common page content
│   │       ├── navigation/        # Navigation-related data
│   │       │   └── navigation-items.json # Navigation menu items
│   │       └── footer/            # Footer-related data
│   │           ├── footer-links.json # Footer navigation links
│   │           └── social-links.json # Social media links
│   ├── router/                    # Vue Router configuration
│   │   ├── router.js             # Route definitions
│   │   └── vue-router.js         # Router setup
│   └── utils/                     # Utility functions
│       └── validation.js          # Form validation utilities
├── STATIC-CONTENT-REFACTORING.md # Refactoring documentation
└── README.md                      # This file
```

## 🛠️ Getting Started

### Prerequisites

- **Node.js** (version 16.0.0 or higher)
- **npm** or **yarn** package manager
- Modern web browser with ES6 support

### Installation

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd lumex-web
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000` (or the port shown in terminal)

### Available Scripts

- **`npm run dev`** - Start development server with hot reload
- **`npm run build`** - Build for production
- **`npm run preview`** - Preview production build locally
- **`npm run format`** - Format code with Prettier
- **`npm run test`** - Run validation tests

## 🌐 Deployment

### Build for Production

```bash
npm run build
# Output will be in the 'dist' directory
```

### Static Hosting (Recommended)

**Netlify**
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Configure redirects for SPA routing

**Vercel**
1. Connect your GitHub repository
2. Vercel will automatically detect Vite and build
3. Automatic deployments on every push

**Traditional Web Hosting**
1. Build the project: `npm run build`
2. Upload the `dist` folder contents to your web server
3. Configure server for SPA routing (redirect all routes to `index.html`)

### Form Integration

The project uses **Formspree** for form submissions:

**Career Form:**
- Endpoint: `https://formspree.io/f/xyzdqggy`
- Supports file uploads (resume)
- Configured in `src/components/careers/script.js`

**Contact Form:**
- Endpoint: `https://formspree.io/f/mnnbyevy`
- Basic contact form submission
- Configured in `src/components/contact-us/script.js`

**To customize forms:**
1. Create your Formspree account
2. Set up new forms
3. Update the endpoint URLs in the respective script files

## 🔧 Customization

### Styling
- **Global Styles**: Modify `public/css/style.css` for global variables and base styles
- **Component Styles**: Update component-specific CSS in `public/css/components/`
- **CSS Variables**: Defined in `:root` for consistent theming
- **Responsive Design**: Mobile-first approach with breakpoints at 640px, 768px, 1024px

### Content Management
All static content is now externalized into JSON files for easy management:

**Company Information:**
- Edit `src/data/shared/company-info.json` for branding
- Update `src/data/shared/contact-info.json` for contact details

**Page Content:**
- **Home**: `src/data/components/home/home-*.json`
- **Technology**: `src/data/components/technology/technology-*.json`  
- **Recruitment**: `src/data/components/recruitment/recruitment-*.json`
- **Careers**: `src/data/components/careers/careers-*.json` and job openings
- **Contact**: `src/data/components/contact-us/contact-*.json` and office locations

**Navigation & Links:**
- Navigation menu: `src/data/shared/navigation/navigation-items.json`
- Footer links: `src/data/shared/footer/footer-links.json`
- Social media: `src/data/shared/footer/social-links.json`

### Adding New Components
1. Create component directory in `src/components/[component-name]/`
2. Add `index.vue` and `script.js` files
3. Create corresponding CSS file in `public/css/components/`
4. Add route to `src/router/router.js`
5. Update navigation if needed

### Adding New Pages
1. Create Vue component in `src/components/[page-name]/`
2. Add route definition to `src/router/router.js`
3. Import component in router configuration
4. Add navigation link to `src/data/shared/navigation/navigation-items.json`

## 🏗️ Architecture

### Vue.js Component System
- **Framework**: Vue.js 3 with Composition API
- **Components**: Organized in `src/components/` with modular structure
- **Routing**: Vue Router for SPA navigation and route management
- **State Management**: Component-level reactive state with data imports

### Data Architecture  
- **Separation of Concerns**: Static content externalized from component logic
- **JSON Data Files**: Organized in `src/data/components/` and `src/data/shared/`
- **Modular Imports**: Components import only needed data
- **Maintainability**: Content updates without touching component code

### Utility Systems
- **Form Validation**: Centralized `utils/validation.js` with FormValidator class
- **Real-time Feedback**: Live validation with error messaging
- **File Upload**: Integrated file type and size validation

### Development Workflow
- **Vite Dev Server**: Hot module replacement for fast development
- **Component Hot Reload**: Instant updates during development
- **Build Optimization**: Production builds with asset optimization
- **CSS Architecture**: Component-scoped styles with global variables

## 📱 Browser Support

- **Chrome/Edge**: Full support (latest versions)
- **Firefox**: Full support (latest versions)  
- **Safari**: Full support (Safari 14+)
- **Mobile Browsers**: iOS Safari, Chrome Mobile
- **Internet Explorer**: Not supported (Vue.js 3 requires modern browsers)

## 🤝 Contributing

1. **Fork the project** and clone locally
2. **Install dependencies**: `npm install`
3. **Create a feature branch**: `git checkout -b feature/your-feature`
4. **Start development server**: `npm run dev`
5. **Make your changes** and test thoroughly
6. **Follow code style**: Run `npm run format` before committing
7. **Build and test**: `npm run build` to ensure production build works
8. **Submit a pull request** with clear description of changes

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For questions or support:
- **Email**: info@lumex.in
- **Phone**: +1 (555) 123-4567
- **Website**: [lumex.in](https://lumex.in)

### Development Support
- **Documentation**: Vue.js 3 docs at [vuejs.org](https://vuejs.org)
- **Vite**: Build tool docs at [vitejs.dev](https://vitejs.dev)
- **Issues**: Report bugs or request features via GitHub Issues

## 🔄 Version History

### v2.0.0 - Vue.js Migration & Data Architecture
- **Vue.js 3**: Migrated from vanilla JavaScript to Vue.js framework
- **Vite Build System**: Modern development server and build optimization
- **Modular Data**: Externalized all static content to JSON files
- **Centralized Validation**: Unified form validation system with real-time feedback
- **Enhanced Forms**: Formspree integration with file upload support
- **Improved Architecture**: Component-based structure with better maintainability

### v1.0.0 - Initial Release
- Complete website with 4 pages (Home, Technology, Recruitment, Careers)
- Mobile-responsive design with modern CSS
- Contact and career forms
- ES6 module system
