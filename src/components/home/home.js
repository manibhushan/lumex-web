import heroContentData from '../../data/components/home-hero-content.json';
import companyOverviewData from '../../data/components/home-company-overview.json';
import servicesData from '../../data/components/home-services.json';
import coreValuesData from '../../data/components/home-core-values.json';
import successStatsData from '../../data/components/home-stats.json';
import processStepsData from '../../data/components/home-process-steps.json';
import industriesData from '../../data/components/home-industries.json';
import techStackData from '../../data/components/home-tech-stack.json';
import testimonialsData from '../../data/components/home-testimonials.json';
import { sectionTitles } from '../../data/shared/page-content.json';

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
    }
  },
  
  // Lifecycle hooks
  mounted() {
    // Emit event when component is loaded
    this.$emit('page-loaded', 'home');
  }
}