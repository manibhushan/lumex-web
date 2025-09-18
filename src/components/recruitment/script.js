import recruitmentServicesData from '../../data/components/recruitment-services.json';
import industriesData from '../../data/components/recruitment-industries.json';
import processStepsData from '../../data/components/recruitment-process-steps.json';
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
    }
  },
  
  mounted() {
    // Emit page loaded event
    this.$emit('page-loaded', 'recruitment');
  }
}
