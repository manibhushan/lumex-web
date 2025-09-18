// Vue Router Setup - Complete routing configuration for Vue 3
import { createRouter, createWebHistory } from 'vue-router'
import { routes, routeNames } from './router.js'

// Create Vue Router instance
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Scroll to top on route change, or restore saved position
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

// Global navigation guards
router.beforeEach((to, from, next) => {
  // Update page title
  if (to.meta?.title) {
    document.title = to.meta.title
  }
  
  // Log navigation for debugging
  console.log(`Navigating from ${from.name || 'initial'} to ${to.name}`)
  
  // Continue navigation
  next()
})

router.afterEach((to, from) => {
  // Analytics tracking could go here
  console.log(`Navigation completed: ${to.name}`)
})

// Error handling
router.onError((error) => {
  console.error('Router error:', error)
})

export default router

// Helper functions for programmatic navigation
export const navigationHelpers = {
  // Navigate to home page
  goHome() {
    return router.push({ name: routeNames.HOME })
  },
  
  // Navigate to technology solutions
  goToTechSolutions() {
    return router.push({ name: routeNames.TECHNOLOGY_SOLUTIONS })
  },
  
  // Navigate to recruitment
  goToRecruitment() {
    return router.push({ name: routeNames.RECRUITMENT })
  },
  
  // Navigate to careers
  goToCareers() {
    return router.push({ name: routeNames.CAREERS })
  },
  
  // Navigate to contact us
  goToContact() {
    return router.push({ name: routeNames.CONTACT_US })
  },
  
  // Navigate to any route by name
  goToRoute(routeName, params = {}, query = {}) {
    return router.push({ name: routeName, params, query })
  },
  
  // Navigate back in history
  goBack() {
    return router.back()
  },
  
  // Navigate forward in history
  goForward() {
    return router.forward()
  }
}

// Route information helpers
export const routeHelpers = {
  // Get current route name
  getCurrentRouteName() {
    return router.currentRoute.value.name
  },
  
  // Get current route path
  getCurrentRoutePath() {
    return router.currentRoute.value.path
  },
  
  // Check if current route matches
  isCurrentRoute(routeName) {
    return router.currentRoute.value.name === routeName
  },
  
  // Get route by name
  getRouteByName(routeName) {
    return router.getRoutes().find(route => route.name === routeName)
  }
}