import techServicesData from '../../data/components/technology-services.json';
import techCategoriesData from '../../data/components/technology-categories.json';
import caseStudiesData from '../../data/components/technology-case-studies.json';
import processStepsData from '../../data/components/technology-process-steps.json';
import techMetricsData from '../../data/components/technology-metrics.json';
import techTestimonialsData from '../../data/components/technology-testimonials.json';
import techInnovationData from '../../data/components/technology-innovation.json';
import techPartnershipsData from '../../data/components/technology-partnerships.json';
import techBenefitsData from '../../data/components/technology-benefits.json';
import { pageHeaders, sectionTitles, contactSections } from '../../data/shared/page-content.json';

export default {
  name: 'TechnologySolutionsPage',
  data() {
    return {
      pageHeader: pageHeaders.technology,
      servicesSection: {
        title: sectionTitles.techExpertise
      },
      techServices: techServicesData,
      technologiesSection: {
        title: sectionTitles.technologiesWeWorkWith
      },
      techCategories: techCategoriesData,
      caseStudiesSection: {
        title: sectionTitles.successStories
      },
      caseStudies: caseStudiesData,
        processSection: {
        title: sectionTitles.integrationProcess
      },
      processSteps: processStepsData,
      techMetrics: techMetricsData,
      techTestimonials: techTestimonialsData,
      techInnovation: techInnovationData,
      techPartnerships: techPartnershipsData,
      techBenefits: techBenefitsData,
      contactSection: contactSections.technology
    }
  },
  methods: {
    handleServiceClick(service) {
      // Emit service click event for analytics or detailed view
      this.$emit('service-clicked', service);
      console.log('Tech service clicked:', service.title);
    },

    handleCategoryClick(category) {
      // Emit technology category click event
      this.$emit('tech-category-clicked', category);
      console.log('Tech category clicked:', category.title);
    },

    handleTechClick(tech, category) {
      // Emit individual technology click event
      this.$emit('technology-clicked', { technology: tech, category: category.title });
      console.log('Technology clicked:', tech, 'in category:', category.title);
    },

    handleCaseStudyClick(caseStudy) {
      // Emit case study click event for detailed view
      this.$emit('case-study-clicked', caseStudy);
      console.log('Case study clicked:', caseStudy.title);
    },

    handleStepClick(step) {
      // Emit process step click event
      this.$emit('process-step-clicked', step);
      console.log('Process step clicked:', step.title);
    },

    handleContactClick() {
      // Emit contact button click event
      this.$emit('contact-clicked');
      this.$emit('navigate', 'contact-us');
    },

    handleConsultationClick() {
      // Emit consultation button click event
      this.$emit('consultation-clicked');
      this.$emit('navigate', 'contact-us');
    }
  },
  
  mounted() {
    // Emit page loaded event
    this.$emit('page-loaded', 'technology-solutions');
  }
}
