// Vue Router Configuration - Handles page navigation with Vue components
import HomePage from "../components/home/index.vue";
import TechnologySolutionsPage from "../components/technology/index.vue";
import RecruitmentPage from "../components/recruitment/index.vue";
import CareersPage from "../components/careers/index.vue";
import ContactUs from "../components/contact-us/index.vue";

// Vue Router configuration for component-based routing
export const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage,
        meta: { title: 'Home - Lumex Enterprise Solutions' }
    },
    {
        path: '/technology-solutions',
        name: 'technology-solutions',
        component: TechnologySolutionsPage,
        meta: { title: 'Technology Solutions - Lumex Enterprise Solutions' }
    },
    {
        path: '/recruitment',
        name: 'recruitment',
        component: RecruitmentPage,
        meta: { title: 'Recruitment Services - Lumex Enterprise Solutions' }
    },
    {
        path: '/careers',
        name: 'careers',
        component: CareersPage,
        meta: { title: 'Careers - Lumex Enterprise Solutions' }
    },
    {
        path: '/contact-us',
        name: 'contact-us',
        component: ContactUs,
        meta: { title: 'Contact Us - Lumex Enterprise Solutions' }
    },
    {
        // Catch-all route for 404 pages
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        redirect: '/'
    }
];

// Vue Router factory function
export function createRouter() {
    // This would typically be used with Vue Router
    // Example usage in main Vue app:
    /*
    import { createRouter as createVueRouter, createWebHistory } from 'vue-router'
    import { routes } from './router/router.js'
    
    const router = createVueRouter({
        history: createWebHistory(),
        routes
    })
    */
    
    return {
        routes,
        install: (app) => {
            // Custom router plugin installation
            console.log('Lumex router plugin installed');
        }
    };
}

// Export route names for easier reference
export const routeNames = {
    HOME: 'home',
    TECHNOLOGY_SOLUTIONS: 'technology-solutions',
    RECRUITMENT: 'recruitment',
    CAREERS: 'careers',
    CONTACT_US: 'contact-us'
};

// Export component mapping for dynamic imports
export const componentMap = {
    [routeNames.HOME]: () => import('../components/home/index.vue'),
    [routeNames.TECHNOLOGY_SOLUTIONS]: () => import('../components/technology/index.vue'),
    [routeNames.RECRUITMENT]: () => import('../components/recruitment/index.vue'),
    [routeNames.CAREERS]: () => import('../components/careers/index.vue'),
    [routeNames.CONTACT_US]: () => import('../components/contact-us/index.vue')
};
