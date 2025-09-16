// Router Module - Handles page navigation and loading
import { homeHTML } from "../components/home";
import { technologySolutionsHTML } from "../components/technology-solutions";
import { recruitmentHTML } from "../components/recruitment";
import { careersHTML } from "../components/careers";
import { contactUsHTML } from "../components/contact-us";

export class Router {
    constructor() {
        this.currentRoute = 'home';
        this.routes = {
            'home': homeHTML,
            'technology-solutions': technologySolutionsHTML,
            'recruitment': recruitmentHTML,
            'careers': careersHTML,
            'contact-us': contactUsHTML
        };
        this.pageContent = document.getElementById('page-content');
    }

    async init() {
        console.log('Initializing router...');

        // Load initial route from URL or default to home
        const initialRoute = this.getCurrentRouteFromURL();
        await this.navigateTo(initialRoute, false);
    }

    getCurrentRouteFromURL() {
        const hash = window.location.hash.replace('#', '');
        return hash && this.routes[hash] ? hash : 'home';
    }

    async navigateTo(route, updateHistory = true) {
        console.log(`Navigating to: ${route}`);

        // Validate route
        if (!this.routes[route]) {
            console.warn(`Invalid route: ${route}, defaulting to home`);
            route = 'home';
        }

        try {
            // Update URL if needed
            if (updateHistory) {
                const newURL = route === 'home' ? '#' : `#${route}`;
                window.history.pushState(null, '', newURL);
            }

            // Load page content
            await this.loadPage(route);

            // Update current route
            this.currentRoute = route;

            // Update navigation active state
            this.updateNavigationState(route);

        } catch (error) {
            console.error(`Failed to navigate to ${route}:`, error);
            // Fallback to home page
            if (route !== 'home') {
                await this.navigateTo('home', false);
            }
        }
    }

    async loadPage(route) {
        if (!this.pageContent) {
            throw new Error('Page content container not found');
        }

        // Show loading state
        this.showLoadingState();

        try {
            const html = this.routes[route];

            // Update page content with fade effect
            await this.updatePageContent(html);

            console.log(`Page ${route} loaded successfully`);

        } catch (error) {
            console.error(`Failed to load page ${route}:`, error);
            this.showErrorState(route);
        }
    }

    showLoadingState() {
        if (this.pageContent) {
            this.pageContent.innerHTML = `
                <div class="loading-state">
                    <div class="loading-spinner"></div>
                    <p>Loading...</p>
                </div>
            `;
        }
    }

    showErrorState(route) {
        if (this.pageContent) {
            this.pageContent.innerHTML = `
                <div class="error-state">
                    <div class="error-content">
                        <h2>Oops! Something went wrong</h2>
                        <p>We couldn't load the ${route} page. Please try again.</p>
                        <button class="btn btn--primary" data-route="home">
                            Return to Home
                        </button>
                    </div>
                </div>
            `;
        }
    }

    async updatePageContent(html) {
        return new Promise((resolve) => {
            if (!this.pageContent) {
                resolve();
                return;
            }

            // Fade out current content
            this.pageContent.style.opacity = '0';

            setTimeout(() => {
                // Update content
                this.pageContent.innerHTML = html;

                // Fade in new content
                this.pageContent.style.opacity = '1';

                // Scroll to top
                window.scrollTo({ top: 0, behavior: 'smooth' });

                resolve();
            }, 150);
        });
    }

    updateNavigationState(activeRoute) {
        // Remove active class from all navigation links
        const navLinks = document.querySelectorAll('.nav__link');
        navLinks.forEach(link => {
            link.classList.remove('nav__link--active');
        });

        // Add active class to current route link
        const activeLink = document.querySelector(`[data-route="${activeRoute}"]`);
        if (activeLink && activeLink.classList.contains('nav__link')) {
            activeLink.classList.add('nav__link--active');
        }
    }

    // Utility method to get current route
    getCurrentRoute() {
        return this.currentRoute;
    }

    // Method to check if a route exists
    routeExists(route) {
        return this.routes.hasOwnProperty(route);
    }
}
