import heroContentData from '../../data/components/home/home-hero-content.json';
import companyOverviewData from '../../data/components/home/home-company-overview.json';
import servicesData from '../../data/components/home/home-services.json';
import coreValuesData from '../../data/components/home/home-core-values.json';
import successStatsData from '../../data/components/home/home-stats.json';
import processStepsData from '../../data/components/home/home-process-steps.json';
import industriesData from '../../data/components/home/home-industries.json';
import techStackData from '../../data/components/home/home-tech-stack.json';
import testimonialsData from '../../data/components/home/home-testimonials.json';
import { sectionTitles } from '../../data/shared/page-content.json';
import VibrancyEnhancer from '../../utils/vibrancy-enhancer.js';

export default {
  name: 'HomePage',
  data() {
    return {
      heroContent: heroContentData,
      companyOverview: companyOverviewData,
      services: servicesData,
      successStats: successStatsData,
      processSteps: processStepsData,
      industries: industriesData,
      techStack: techStackData,
      testimonials: testimonialsData,
      valuesSection: {
        title: sectionTitles.valuesSection
      },
      coreValues: coreValuesData
    }
  },
  methods: {
    handleNavigation(route) {
      // Emit event for parent component to handle routing
      this.$emit('navigate', route);
      
      // If using Vue Router, you could also do:
      // this.$router.push({ name: route });
    },
    
    // Method to handle service card interactions
    handleServiceClick(service) {
      this.$emit('service-selected', service);
      this.handleNavigation(service.route);
    },

    // Method to handle value item interactions (for analytics, etc.)
    handleValueClick(value) {
      this.$emit('value-viewed', value);
    },
    
    // Initialize all vibrancy enhancement effects
    initializeVibrancyEffects() {
      // Wait for DOM to be fully rendered
      this.$nextTick(() => {
        try {
          // Create particle systems for hero section
          VibrancyEnhancer.createParticleSystem('.hero.particle-container', 25);
          
          // Add ripple effect to buttons
          VibrancyEnhancer.addRippleEffect('.vibrant-button');
          
          // Initialize scroll-based effects
          VibrancyEnhancer.initScrollBasedEffects();
          
          // Create mesh gradients for sections
          VibrancyEnhancer.createMeshGradient('.bg-mesh-gradient');
          
          // Initialize scroll-triggered animations
          this.initScrollAnimations();
          
        } catch (error) {
          console.warn('Vibrancy enhancement initialization failed:', error);
        }
      });
    },
    
    // Initialize scroll-triggered animations
    initScrollAnimations() {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible');
          }
        });
      }, observerOptions);
      
      // Observe all animated elements
      document.querySelectorAll('.animate-on-scroll').forEach((element) => {
        observer.observe(element);
      });
      
      // Fallback: Make sections visible after 2 seconds if not already animated
      setTimeout(() => {
        document.querySelectorAll('.animate-on-scroll:not(.animate-visible)').forEach((element) => {
          element.classList.add('animate-visible');
        });
      }, 2000);
    }
  },
  
  // Lifecycle hooks
  mounted() {
    // Emit event when component is loaded
    this.$emit('page-loaded', 'home');
    
    // Initialize vibrancy enhancements
    this.initializeVibrancyEffects();
  }
}