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