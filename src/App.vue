<template>
  <div id="app">
    <!-- Navigation Component -->
    <NavigationComponent 
      :current-route="currentRouteName"
      @navigate="handleNavigation"
      @nav-item-clicked="handleNavItemClick"
      @mobile-menu-toggled="handleMobileMenuToggle"
    />
    
    <!-- Main Content Area -->
    <main class="main-content">
      <!-- Loading State -->
      <div v-if="isLoading" class="loading-container">
        <div class="loading-spinner"></div>
        <p>Loading...</p>
      </div>
      
      <!-- Vue Router View - This renders the current page component -->
      <RouterView 
        v-else
        @navigate="handleNavigation"
        @page-loaded="handlePageLoad"
        @service-clicked="handleServiceClick"
        @industry-clicked="handleIndustryClick"
        @case-study-clicked="handleCaseStudyClick"
        @process-step-clicked="handleProcessStepClick"
        @contact-clicked="handleContactClick"
        @legal-link-clicked="handleLegalLinkClick"
      />
    </main>
    
    <!-- Footer Component -->
    <FooterComponent 
      @navigate="handleNavigation"
      @legal-link-clicked="handleLegalLinkClick"
    />
  </div>
</template>

<script>
import { ref, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import NavigationComponent from './components/navigation/index.vue'
import FooterComponent from './components/footer/index.vue'
import { routeNames } from './router/router.js'

export default {
  name: 'App',
  components: {
    NavigationComponent,
    FooterComponent
  },
  setup() {
    const route = useRoute()
    const router = useRouter()
    const isLoading = ref(false)

    // Computed property to get current route name
    const currentRouteName = computed(() => {
      return route.name || routeNames.HOME
    })

    // Navigation handler
    const handleNavigation = async (routeName) => {
      try {
        isLoading.value = true
        await router.push({ name: routeName })
      } catch (error) {
        console.error('Navigation error:', error)
      } finally {
        isLoading.value = false
      }
    }

    // Event handlers for analytics and user interactions
    const handleNavItemClick = (item) => {
      console.log('Navigation item clicked:', item.label)
      // Add analytics tracking here
    }

    const handleMobileMenuToggle = (isOpen) => {
      console.log('Mobile menu toggled:', isOpen)
      // Handle mobile menu state if needed
    }

    const handlePageLoad = (pageName) => {
      console.log('Page loaded:', pageName)
      // Add page load analytics here
    }

    const handleServiceClick = (service) => {
      console.log('Service clicked:', service.title)
      // Handle service interaction
    }

    const handleIndustryClick = (industry) => {
      console.log('Industry clicked:', industry.title)
      // Handle industry interaction
    }

    const handleCaseStudyClick = (caseStudy) => {
      console.log('Case study clicked:', caseStudy.title)
      // Handle case study interaction - could open modal
    }

    const handleProcessStepClick = (step) => {
      console.log('Process step clicked:', step.title)
      // Handle process step interaction
    }

    const handleContactClick = () => {
      console.log('Contact button clicked')
      // Navigate to contact page
      handleNavigation(routeNames.CONTACT_US)
    }

    const handleLegalLinkClick = (linkText) => {
      console.log('Legal link clicked:', linkText)
      // Handle legal link clicks - could open modal or navigate to legal pages
    }

    // Watch for route changes to update document title
    watch(route, (newRoute) => {
      if (newRoute.meta?.title) {
        document.title = newRoute.meta.title
      }
    }, { immediate: true })

    return {
      currentRouteName,
      isLoading,
      handleNavigation,
      handleNavItemClick,
      handleMobileMenuToggle,
      handlePageLoad,
      handleServiceClick,
      handleIndustryClick,
      handleCaseStudyClick,
      handleProcessStepClick,
      handleContactClick,
      handleLegalLinkClick
    }
  }
}
</script>

<style>
/* Global App Styles */
#app {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
}

/* Loading State */
.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  padding: 2rem;
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f4f6;
  border-top: 4px solid #667eea;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 1rem;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.loading-container p {
  color: #6b7280;
  font-size: 1.1rem;
}

/* Global Reset */
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  line-height: 1.6;
  color: #333;
}

/* Smooth transitions for route changes */
.router-link-active {
  color: #667eea;
}

/* Page transition animations */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}

/* Focus styles for accessibility */
:focus-visible {
  outline: 2px solid #667eea;
  outline-offset: 2px;
}

/* Responsive typography */
@media (max-width: 768px) {
  body {
    font-size: 14px;
  }
}
</style>