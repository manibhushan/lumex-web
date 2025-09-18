// Main Vue Application Entry Point
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/vue-router.js'
import './style.css'

// Create Vue application instance
const app = createApp(App)

// Install Vue Router
app.use(router)

// Global error handler
app.config.errorHandler = (error, instance, info) => {
  console.error('Global Vue error:', error)
  console.error('Component instance:', instance)
  console.error('Error info:', info)
}

// Global properties (accessible in all components)
app.config.globalProperties.$appName = 'Lumex Enterprise Solutions'
app.config.globalProperties.$version = '1.0.0'
app.config.globalProperties.$apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'https://api.lumex.in'

// Performance monitoring (optional)
if (import.meta.env.DEV) {
  app.config.performance = true
}

class VueLumexApp {
    constructor() {
        this.vueApp = app;
        this.router = router;
        this.init();
    }

    async init() {
        console.log('Initializing Lumex Vue App...');

        try {
            // Wait for DOM to be ready
            await this.waitForDOM();

            // Mount Vue application
            this.mountVueApp();

            console.log('✅ Lumex Vue Application initialized successfully');
        } catch (error) {
            console.error('Failed to initialize Vue app:', error);
        }
    }

    waitForDOM() {
        return new Promise((resolve) => {
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', resolve);
            } else {
                resolve();
            }
        });
    }

    mountVueApp() {
        // Mount the Vue application
        this.vueApp.mount('#app');
        
        // Store references for debugging
        if (import.meta.env.DEV) {
            window.__LUMEX_APP__ = this.vueApp;
            window.__LUMEX_ROUTER__ = this.router;
        }
    }
}

// Initialize the Vue application
new VueLumexApp();

// Export for external use
export default app;