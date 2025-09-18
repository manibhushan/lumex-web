# Deployment Guide - Lumex Enterprise Solutions

This guide covers deployment options for the Vue.js-based Lumex website with Vite build system.

## 🌐 Hosting Options

### 1. Netlify (Recommended for Vue.js Projects)

**Why Netlify?**
- Excellent Vue.js and Vite support
- Automatic HTTPS and CDN
- Custom domains and branch previews
- Continuous deployment from Git
- Built-in form handling for Formspree integration

**Steps:**
1. **Build the Project**
   ```bash
   npm run build
   ```

2. **Via Drag & Drop**
   - Go to [netlify.com](https://netlify.com)
   - Create an account
   - Drag the `dist` folder to the deployment area
   - Your site will be live instantly

3. **Via Git (Recommended)**
   - Push your code to GitHub/GitLab/Bitbucket
   - Connect your repository to Netlify
   - Configure build settings:
     - **Build command**: `npm run build`
     - **Publish directory**: `dist`
     - **Node version**: `18` (in Environment variables)
   - Deploy automatically on every commit

**Configuration for SPA Routing:**
Create `public/_redirects` file:
```
/*    /index.html   200
```

### 2. Vercel (Best Performance for Vue.js)

**Why Vercel?**
- Outstanding Vite and Vue.js support
- Global edge network and CDN
- Automatic optimizations and compression
- Preview deployments for every branch

**Steps:**
1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   cd lumex-web
   npm run build  # Build first
   vercel --prod
   ```

3. **Git Integration (Recommended)**
   - Push to GitHub/GitLab/Bitbucket
   - Import project in Vercel dashboard
   - Auto-detects Vue.js/Vite configuration

**Configuration:**
- **Framework preset**: Vite
- **Build command**: `npm run build`
- **Output directory**: `dist`
- **Install command**: `npm install`

### 3. Firebase Hosting

**Why Firebase?**
- Google infrastructure with global CDN
- Excellent Vue.js SPA support
- Easy SSL certificates and custom domains
- Good integration with other Google services

**Steps:**
1. **Build Project**
   ```bash
   npm run build
   ```

2. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

3. **Initialize Project**
   ```bash
   firebase login
   firebase init hosting
   ```

4. **Configure**
   - Select or create Firebase project
   - Set public directory: `dist`
   - Configure as single-page app: **Yes**
   - Set up automatic builds: **Yes**

5. **Deploy**
   ```bash
   firebase deploy
   ```

### 4. GitHub Pages with GitHub Actions

**Why GitHub Pages?**
- Free hosting for public repositories
- Automatic deployment with GitHub Actions
- Custom domains and HTTPS supported

**Steps:**
1. **Create GitHub Actions Workflow**
   Create `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages
   
   on:
     push:
       branches: [ main ]
   
   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         
         - name: Setup Node.js
           uses: actions/setup-node@v4
           with:
             node-version: '18'
             cache: 'npm'
         
         - name: Install dependencies
           run: npm ci
         
         - name: Build
           run: npm run build
         
         - name: Deploy to GitHub Pages
           uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

2. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Add deployment workflow"
   git push origin main
   ```

3. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Select source: **Deploy from branch**
   - Select branch: **gh-pages**
   - Your site will be available at `https://username.github.io/repository-name`

### 5. Traditional Web Hosting

**For shared hosting providers (cPanel, etc.):**

1. **Build for Production**
   ```bash
   npm run build
   ```

2. **Prepare Files**
   ```bash
   # Create a zip of the dist folder contents
   cd dist
   zip -r ../website.zip .
   cd ..
   ```

3. **Upload**
   - Use FTP/SFTP client or hosting control panel
   - Upload contents of `dist` folder to `public_html` or `www` directory
   - **Important**: Upload the contents of `dist`, not the `dist` folder itself

4. **Configure Server for SPA**
   Create `.htaccess` in the upload directory:
   ```apache
   # Enable HTTPS redirect
   RewriteEngine On
   RewriteCond %{HTTPS} off
   RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

   # Handle Vue Router (SPA routing)
   RewriteCond %{REQUEST_FILENAME} !-f
   RewriteCond %{REQUEST_FILENAME} !-d
   RewriteRule . /index.html [L]

   # Enable Gzip compression
   <IfModule mod_deflate.c>
     AddOutputFilterByType DEFLATE text/css application/javascript application/json
   </IfModule>
   ```

## 🔧 Configuration

### Environment-Specific Settings

**Build Commands:**
```bash
# Development
npm run dev        # Start development server on http://localhost:5173

# Production Build
npm run build      # Creates optimized build in 'dist' folder
npm run preview    # Preview production build locally
```

**Form Integration:**
The project uses **Formspree** for form handling:

1. **Career Form Endpoint**: `https://formspree.io/f/xyzdqggy`
2. **Contact Form Endpoint**: `https://formspree.io/f/mnnbyevy`

**To customize for your deployment:**
1. Create your own Formspree account at [formspree.io](https://formspree.io)
2. Set up new forms for contact and careers
3. Update endpoints in:
   - `src/components/contact-us/script.js`
   - `src/components/careers/script.js`

**Analytics (Optional)**
Add to `index.html` before closing `</head>`:
```html
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Performance Optimization

**Vite Build Optimizations (Automatic):**
- Code splitting and tree shaking
- Asset optimization and minification
- CSS extraction and optimization
- Modern JS for supported browsers

**Additional Optimizations:**

1. **Enable Compression**
   ```apache
   # Apache .htaccess - Enhanced compression
   <IfModule mod_deflate.c>
     AddOutputFilterByType DEFLATE text/plain
     AddOutputFilterByType DEFLATE text/html
     AddOutputFilterByType DEFLATE text/xml
     AddOutputFilterByType DEFLATE text/css
     AddOutputFilterByType DEFLATE application/xml
     AddOutputFilterByType DEFLATE application/xhtml+xml
     AddOutputFilterByType DEFLATE application/rss+xml
     AddOutputFilterByType DEFLATE application/javascript
     AddOutputFilterByType DEFLATE application/x-javascript
     AddOutputFilterByType DEFLATE application/json
   </IfModule>
   ```

2. **Cache Headers for Vite Assets**
   ```apache
   # Cache static assets with hashed filenames
   <IfModule mod_expires.c>
     ExpiresActive on
     ExpiresByType text/css "access plus 1 year"
     ExpiresByType application/javascript "access plus 1 year"
     ExpiresByType image/png "access plus 1 year"
     ExpiresByType image/jpg "access plus 1 year"
     ExpiresByType image/jpeg "access plus 1 year"
     ExpiresByType image/svg+xml "access plus 1 year"
     ExpiresByType application/json "access plus 1 week"
   </IfModule>
   ```

3. **Vite Configuration Optimization**
   Already configured in `vite.config.js` for optimal performance.

## 🔒 Security Considerations

1. **HTTPS**
   - Always use HTTPS in production
   - All recommended hosting providers (Netlify, Vercel, Firebase) include free SSL
   - Let's Encrypt is widely supported for traditional hosting

2. **Content Security Policy (Optional)**
   Add to `index.html` for enhanced security:
   ```html
   <meta http-equiv="Content-Security-Policy" 
         content="default-src 'self'; 
                  style-src 'self' 'unsafe-inline'; 
                  script-src 'self'; 
                  connect-src 'self' https://formspree.io;
                  img-src 'self' data:;">
   ```

3. **Form Security**
   - **Formspree** handles security, spam protection, and validation
   - Built-in rate limiting and anti-spam measures
   - CAPTCHA available in Formspree paid plans
   - File upload restrictions configured in validation logic

4. **Environment Variables**
   - Store sensitive configuration in environment variables
   - Never commit API keys or secrets to version control
   - Use `.env.local` for local development secrets

## 📊 Monitoring

### Analytics Setup

1. **Google Analytics**
   - Create Google Analytics account
   - Add tracking code to `index.html`
   - Monitor page views, user behavior

2. **Performance Monitoring**
   - Use browser DevTools
   - Google PageSpeed Insights
   - GTmetrix for detailed analysis

### Error Monitoring

Add basic error logging:
```javascript
// Add to main.js
window.addEventListener('error', (event) => {
  console.error('Global error:', event.error);
  // Send to monitoring service if needed
});
```

## 🚀 Deployment Checklist

**Pre-Deployment Testing:**
- [ ] Run `npm run build` successfully without errors
- [ ] Test `npm run preview` to verify production build
- [ ] Verify all Vue Router navigation works
- [ ] Test form submissions (contact and careers)
- [ ] Check file upload functionality in careers form
- [ ] Validate responsive design on mobile devices
- [ ] Test in multiple browsers (Chrome, Firefox, Safari)
- [ ] Verify all JSON data imports work correctly
- [ ] Check form validation feedback displays properly

**Deployment Configuration:**
- [ ] Update Formspree endpoints if needed
- [ ] Set up analytics tracking (optional)
- [ ] Configure custom domain if applicable
- [ ] Enable HTTPS (automatic with recommended hosts)
- [ ] Set up SPA redirect rules for hosting provider
- [ ] Test contact and careers form integration end-to-end

**Post-Deployment Verification:**
- [ ] Verify site loads at production URL
- [ ] Test all page routes work with direct URLs
- [ ] Confirm forms submit successfully
- [ ] Check browser console for errors
- [ ] Validate site performance with PageSpeed Insights

## 🔄 Updates and Maintenance

**Content Management:**
1. **Static Content Updates**
   - Edit JSON files in `src/data/components/` and `src/data/shared/`
   - No need to touch Vue component code for content changes
   - Rebuild and redeploy: `npm run build`

2. **Component Updates**
   - Modify Vue components in `src/components/`
   - Test with `npm run dev`
   - Build and deploy: `npm run build`

**Development Workflow:**
1. **Local Development**
   ```bash
   npm run dev     # Start development server
   # Make changes and test locally
   npm run build   # Build for production
   npm run preview # Test production build locally
   ```

2. **Version Control Best Practices**
   ```bash
   git add .
   git commit -m "feat: describe your changes"
   git push origin main  # Triggers automatic deployment
   ```

**Regular Maintenance Tasks:**
- [ ] Monitor form submission functionality monthly
- [ ] Check site performance and Core Web Vitals
- [ ] Update npm dependencies: `npm update`
- [ ] Review and update job openings in `src/data/components/job-openings.json`
- [ ] Update company information in `src/data/shared/company-info.json`
- [ ] Test contact forms end-to-end quarterly

## 📞 Troubleshooting

**Common Deployment Issues:**

1. **Build Failures**
   ```bash
   # Clear node_modules and reinstall
   rm -rf node_modules package-lock.json
   npm install
   npm run build
   ```

2. **Vue Router Issues (404s on Direct URLs)**
   - Ensure SPA redirect rules are configured
   - Check hosting provider supports client-side routing
   - Verify `.htaccess` rules for traditional hosting

3. **Form Submission Problems**
   - Verify Formspree endpoints are correct
   - Check browser console for CORS errors
   - Test form validation logic in development
   - Ensure file upload size limits are appropriate

4. **Performance Issues**
   - Run `npm run build` to ensure optimized production build
   - Check Vite configuration for proper optimizations
   - Analyze bundle size: `npm run build -- --analyze`

5. **Environment-Specific Issues**
   ```bash
   # Check if production build works locally
   npm run build
   npm run preview
   # If it works locally but not in production, check hosting configuration
   ```

**Debug Commands:**
```bash
# Check build output
npm run build -- --mode production --debug

# Analyze bundle
npm run build -- --analyze

# Check dependencies
npm ls --depth=0
```

**Support Resources:**
- **Email**: info@lumex.in  
- **Vue.js Docs**: [vuejs.org](https://vuejs.org)
- **Vite Docs**: [vitejs.dev](https://vitejs.dev)
- **Formspree Support**: [formspree.io/help](https://formspree.io/help)
