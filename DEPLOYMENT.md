# Deployment Guide - Lumex-web

This guide covers various deployment options for the Lumex website.

## 🌐 Hosting Options

### 1. Netlify (Recommended for Beginners)

**Why Netlify?**
- Free tier with generous limits
- Automatic HTTPS
- Custom domains
- Continuous deployment from Git
- Form handling capabilities

**Steps:**
1. **Via Drag & Drop**
   - Go to [netlify.com](https://netlify.com)
   - Create an account
   - Drag the entire project folder to the deployment area
   - Your site will be live in seconds

2. **Via Git (Recommended)**
   - Push your code to GitHub/GitLab/Bitbucket
   - Connect your repository to Netlify
   - Set build settings (none needed for this project)
   - Deploy automatically on every commit

**Configuration:**
- Build command: Leave empty
- Publish directory: Leave empty (deploys from root)
- Add custom domain in site settings

### 2. Vercel (Best Performance)

**Why Vercel?**
- Excellent performance and CDN
- Serverless functions support
- Automatic optimizations
- Preview deployments

**Steps:**
1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   cd lumex-web
   vercel
   ```

3. **Follow Prompts**
   - Link to existing project or create new
   - Confirm settings
   - Deploy

**Configuration:**
- Framework preset: Other
- Build command: (leave empty)
- Output directory: (leave empty)

### 3. Firebase Hosting

**Why Firebase?**
- Google infrastructure
- Fast global CDN
- Easy SSL certificates
- Good integration with other Google services

**Steps:**
1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Initialize Project**
   ```bash
   firebase login
   firebase init hosting
   ```

3. **Configure**
   - Select or create Firebase project
   - Set public directory to current directory (.)
   - Configure as single-page app: Yes
   - Don't overwrite index.html

4. **Deploy**
   ```bash
   firebase deploy
   ```

### 4. GitHub Pages

**Why GitHub Pages?**
- Free hosting for public repositories
- Automatic deployment from GitHub
- Custom domains supported

**Steps:**
1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin [your-repo-url]
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to Pages section
   - Select source: Deploy from branch
   - Select branch: main
   - Select folder: / (root)

3. **Configure (Optional)**
   - Add custom domain in settings
   - Enable HTTPS

### 5. Traditional Web Hosting

**For shared hosting providers:**

1. **Prepare Files**
   ```bash
   # Create a zip of all files
   zip -r website.zip .
   ```

2. **Upload**
   - Use FTP/SFTP client or hosting control panel
   - Upload all files to public_html or www directory
   - Maintain folder structure

3. **Configure Server (Optional)**
   For Apache servers, create `.htaccess`:
   ```apache
   # Enable HTTPS redirect
   RewriteEngine On
   RewriteCond %{HTTPS} off
   RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

   # Handle client-side routing
   RewriteCond %{REQUEST_FILENAME} !-f
   RewriteCond %{REQUEST_FILENAME} !-d
   RewriteRule . /index.html [L]
   ```

## 🔧 Configuration

### Environment-Specific Settings

For different environments, you might want to modify:

1. **Google Forms Action URL**
   ```html
   <!-- Development -->
   <form action="#" method="POST">

   <!-- Production -->
   <form action="https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse" method="POST">
   ```

2. **Analytics (Optional)**
   Add to `index.html` before closing `</head>`:
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_TRACKING_ID');
   </script>
   ```

### Performance Optimization

1. **Enable Compression**
   Most hosting providers enable Gzip automatically. For custom servers:
   ```apache
   # Apache .htaccess
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
   </IfModule>
   ```

2. **Cache Headers**
   ```apache
   # Cache static assets
   <IfModule mod_expires.c>
     ExpiresActive on
     ExpiresByType text/css "access plus 1 year"
     ExpiresByType application/javascript "access plus 1 year"
     ExpiresByType image/png "access plus 1 year"
     ExpiresByType image/jpg "access plus 1 year"
     ExpiresByType image/jpeg "access plus 1 year"
   </IfModule>
   ```

## 🔒 Security Considerations

1. **HTTPS**
   - Always use HTTPS in production
   - Most modern hosting providers offer free SSL certificates
   - Let's Encrypt is widely supported

2. **Content Security Policy (Optional)**
   Add to `index.html`:
   ```html
   <meta http-equiv="Content-Security-Policy" content="default-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self';">
   ```

3. **Form Security**
   - Google Forms handles security automatically
   - Consider adding CAPTCHA for additional protection

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

Before deploying:

- [ ] Test all pages load correctly
- [ ] Verify navigation works
- [ ] Test form submission
- [ ] Check mobile responsiveness
- [ ] Validate HTML and CSS
- [ ] Test in multiple browsers
- [ ] Optimize images if any
- [ ] Set up analytics (optional)
- [ ] Configure custom domain
- [ ] Enable HTTPS
- [ ] Test contact form integration

## 🔄 Updates and Maintenance

1. **Content Updates**
   - Edit HTML files directly
   - Redeploy to hosting provider

2. **Feature Updates**
   - Modify JavaScript modules
   - Test thoroughly before deployment
   - Use version control for tracking changes

3. **Regular Maintenance**
   - Check form submissions work
   - Monitor site performance
   - Update contact information as needed
   - Review and update content regularly

## 📞 Troubleshooting

**Common Issues:**

1. **Pages not loading**
   - Check file paths are correct
   - Ensure web server is running
   - Verify ES6 modules are supported

2. **Form not submitting**
   - Check Google Forms integration
   - Verify form action URL
   - Test with browser developer tools

3. **Mobile layout issues**
   - Test responsive design
   - Check viewport meta tag
   - Verify CSS media queries

For additional support, contact: info@lumex.in
