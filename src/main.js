// Main Application Entry Point
import { Router } from './router/router.js';
import { Navigation } from './components/navigation.js';
import { Footer } from './components/footer.js';

class TechRecruitApp {
    constructor() {
        this.router = null;
        this.navigation = null;
        this.footer = null;
        this.init();
    }

    async init() {
        console.log('Initializing TechRecruit Solutions App...');

        try {
            // Wait for DOM to be ready
            await this.waitForDOM();

            // Initialize components
            this.initializeComponents();

            // Set up event listeners
            this.setupEventListeners();

            // Initialize router and load initial page
            await this.router.init();

            console.log('App initialized successfully');
        } catch (error) {
            console.error('Failed to initialize app:', error);
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

    initializeComponents() {
        // Initialize navigation
        this.navigation = new Navigation();

        // Initialize footer
        this.footer = new Footer();

        // Initialize router
        this.router = new Router();
    }

    setupEventListeners() {
        // Handle navigation clicks using event delegation
        document.addEventListener('click', (event) => {
            const routeElement = event.target.closest('[data-route]');
            if (routeElement) {
                event.preventDefault();
                const route = routeElement.getAttribute('data-route');
                if (route) {
                    this.router.navigateTo(route);
                }
            }
        });

        // Handle browser back/forward buttons
        window.addEventListener('popstate', () => {
            const route = this.router.getCurrentRouteFromURL();
            this.router.navigateTo(route, false);
        });

        // Handle form submissions
        document.addEventListener('submit', (event) => {
            if (event.target.id === 'career-form') {
                event.preventDefault();
                this.handleCareerFormSubmission(event.target);
            }
        });
    }

    async handleCareerFormSubmission(form) {
        try {
            const formData = new FormData(form);

            // Import validation module dynamically when needed
            const { FormValidator } = await import('./utils/validation.js');
            const validator = new FormValidator();

            // Validate form
            const validationResult = validator.validateCareerForm(formData);

            if (!validationResult.isValid) {
                validator.displayErrors(validationResult.errors);
                return;
            }

            // Clear any existing errors
            validator.clearErrors();

            // Show loading state
            const submitButton = form.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Submitting...';
            submitButton.disabled = true;

            // Submit to Google Forms (or your preferred endpoint)
            await this.submitToGoogleForms(form, formData);

            // Show success message
            this.showSuccessMessage();

            // Reset form
            form.reset();

        } catch (error) {
            console.error('Form submission error:', error);
            alert('There was an error submitting your application. Please try again.');
        } finally {
            // Reset button state
            const submitButton = form.querySelector('button[type="submit"]');
            if (submitButton) {
                submitButton.textContent = 'Submit Application';
                submitButton.disabled = false;
            }
        }
    }

    async submitToGoogleForms(form, formData) {
        // For Google Forms integration, you would:
        // 1. Create a Google Form
        // 2. Get the form action URL
        // 3. Map field names to Google Forms entry IDs
        // 4. Submit the form data

        // Example implementation:
        try {
            // If using Google Forms, uncomment and modify this:
            // const response = await fetch(form.action, {
            //     method: 'POST',
            //     body: formData,
            //     mode: 'no-cors'
            // });

            // For demonstration, we'll simulate a successful submission
            await new Promise(resolve => setTimeout(resolve, 1500));
            console.log('Form data submitted:', Object.fromEntries(formData));

        } catch (error) {
            console.error('Form submission failed:', error);
            throw error;
        }
    }

    showSuccessMessage() {
        const form = document.getElementById('career-form');
        const successMessage = document.getElementById('success-message');

        if (form && successMessage) {
            form.style.display = 'none';
            successMessage.style.display = 'block';

            // Scroll to success message
            successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });

            // Hide success message after 10 seconds and show form again
            setTimeout(() => {
                successMessage.style.display = 'none';
                form.style.display = 'block';
            }, 10000);
        }
    }
}

// Initialize the application when the script loads
new TechRecruitApp();