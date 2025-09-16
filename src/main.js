// Main Application Entry Point
import { Router } from './router/router.js';
import { Navigation } from './components/navigation.js';
import { Footer } from './components/footer.js';

class LumexApp {
    constructor() {
        this.router = null;
        this.navigation = null;
        this.footer = null;
        this.init();
    }

    async init() {
        console.log('Initializing Lumex App...');

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
                this.handleCareerFormSubmission(event);
            } else if (event.target.id === 'contact-form') {
                event.preventDefault();
                this.handleContactFormSubmission(event);
            }
        });
    }

    async handleFormSubmission(event, { validate, successMessage, loadingText, resetButtonText }) {
        try {

            const form = event.target;
            // Ensure all form fields have 'name' attributes and are not disabled
            // Also, make sure the submit button triggering this handler has type="submit"
            const formData = new FormData(form);

            // Import validation module dynamically when needed
            const { FormValidator } = await import('./utils/validation.js');
            const validator = new FormValidator();

            // Validate form
            const validationResult = validate(validator, formData);

            if (!validationResult.isValid) {
                validator.displayErrors(validationResult.errors);
                return;
            }

            // Clear any existing errors
            validator.clearErrors();

            // Show loading state
            const submitButton = form.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.textContent = loadingText;
            submitButton.disabled = true;

            // Show success message
            this.showSuccessMessageForForm(successMessage);

            // Reset form
            form.reset();

        } catch (error) {
            console.error('Form submission error:', error);
            alert('There was an error submitting the form. Please try again.');
        } finally {
            // Reset button state
            const submitButton = event.target.querySelector('button[type="submit"]');
            if (submitButton) {
                submitButton.textContent = resetButtonText;
                submitButton.disabled = false;
            }
        }
    }

    async handleCareerFormSubmission(event) {
        await this.handleFormSubmission(event, {
            validate: (validator, formData) => validator.validateCareerForm(formData),
            successMessage: 'Submitted Successfully',
            loadingText: 'Submitting...',
            resetButtonText: 'Submit Application'
        });
    }

    async handleContactFormSubmission(event) {
        await this.handleFormSubmission(event, {
            validate: (validator, formData) => validator.validateContactForm(formData),
            successMessage: 'Submitted Successfully',
            loadingText: 'Sending...',
            resetButtonText: 'Send Message'
        });
    }

    showSuccessMessageForForm(formId, messageId, timeout = 10000) {
        const form = document.getElementById(formId);
        const successMessage = document.getElementById(messageId);

        if (form && successMessage) {
            form.style.display = 'none';
            successMessage.style.display = 'block';

            // Scroll to success message
            successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });

            // Hide success message after timeout and show form again
            setTimeout(() => {
                successMessage.style.display = 'none';
                form.style.display = 'block';
            }, timeout);
        }
    }

    showCareerSuccessMessage() {
        this.showSuccessMessageForForm('career-form', 'success-message');
    }

    showContactSuccessMessage() {
        this.showSuccessMessageForForm('contact-form', 'contact-success-message');
    }
}

// Initialize the application when the script loads
new LumexApp();