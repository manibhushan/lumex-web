import recruitmentServicesData from '../../data/components/recruitment/recruitment-services.json';
import industriesData from '../../data/components/recruitment/recruitment-industries.json';
import processStepsData from '../../data/components/recruitment/recruitment-process-steps.json';
import specializedRolesData from '../../data/components/recruitment/recruitment-specialized-roles.json';
import metricsData from '../../data/components/recruitment/recruitment-metrics.json';
import testimonialsData from '../../data/components/recruitment/recruitment-testimonials.json';
import challengesData from '../../data/components/recruitment/recruitment-challenges.json';
import candidateExperienceData from '../../data/components/recruitment/recruitment-candidate-experience.json';
import techStackData from '../../data/components/recruitment/recruitment-tech-stack.json';
import { pageHeaders, sectionTitles, contactSections } from '../../data/shared/page-content.json';

export default {
  name: 'RecruitmentPage',
  data() {
    return {
      pageHeader: pageHeaders.recruitment,
      servicesSection: {
        title: sectionTitles.recruitmentExpertise
      },
      recruitmentServices: recruitmentServicesData,
      industriesSection: {
        title: sectionTitles.industriesWeServe
      },
      industries: industriesData,
      processSection: {
        title: sectionTitles.recruitmentProcess
      },
      processSteps: processStepsData,
      specializedRoles: specializedRolesData,
      recruitmentMetrics: metricsData,
      clientTestimonials: testimonialsData,
      hiringChallenges: challengesData,
      candidateExperience: candidateExperienceData,
      recruitmentTech: techStackData,
      contactSection: contactSections.recruitment
    }
  },
  methods: {
    handleServiceClick(service) {
      // Emit service click event for analytics or detailed view
      this.$emit('service-clicked', service);
      
      // Could trigger a modal or navigation to service details
      console.log('Service clicked:', service.title);
    },

    handleIndustryClick(industry) {
      // Emit industry click event
      this.$emit('industry-clicked', industry);
      
      // Could show industry-specific case studies or information
      console.log('Industry clicked:', industry.title);
    },

    handleStepClick(step) {
      // Emit process step click event
      this.$emit('process-step-clicked', step);
      
      // Could expand details or show more information about the step
      console.log('Process step clicked:', step.title);
    },

    handleContactClick() {
      // Emit contact button click event
      this.$emit('contact-clicked');
      
      // Could navigate to contact page or open contact modal
      this.$emit('navigate', 'contact-us');
    },

    handleCareersClick() {
      // Emit careers button click event
      this.$emit('careers-clicked');
      
      // Navigate to careers page
      this.$emit('navigate', 'careers');
    }
  },
  
  mounted() {
    // Emit page loaded event
    this.$emit('page-loaded', 'recruitment');
  }
}
