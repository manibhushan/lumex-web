import jobOpeningsData from '../../data/components/job-openings.json';
import cultureItemsData from '../../data/components/careers-culture-items.json';
import benefitsData from '../../data/components/careers-benefits.json';
import careerStatsData from '../../data/components/careers-statistics.json';
import employeeTestimonialsData from '../../data/components/careers-testimonials.json';
import careerGrowthData from '../../data/components/careers-growth.json';
import teamsData from '../../data/components/careers-teams.json';
import { FormValidator } from '../../utils/validation.js';

export default {
  name: 'CareersPage',
  data() {
    return {
      formData: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        resume: null,
        coverLetter: ''
      },
      errors: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        resume: '',
        coverLetter: ''
      },
      formTouched: {
        firstName: false,
        lastName: false,
        email: false,
        phone: false,
        resume: false,
        coverLetter: false
      },
      isSubmitting: false,
      showSuccessMessage: false,
      cultureItems: cultureItemsData,
      jobOpenings: jobOpeningsData,
      benefits: benefitsData,
      careerStats: careerStatsData,
      employeeTestimonials: employeeTestimonialsData,
      careerGrowth: careerGrowthData,
      teams: teamsData,
      validator: new FormValidator()
    }
  },
  methods: {
    scrollToApplication() {
      const applicationSection = document.getElementById('application');
      if (applicationSection) {
        applicationSection.scrollIntoView({ behavior: 'smooth' });
      }
    },
    handleFileUpload(event) {
      const file = event.target.files[0] || null;
      this.formData.resume = file;
      this.markFieldTouched('resume');
      this.clearFieldError('resume');
      
      // Clear any previous error styling
      if (file) {
        event.target.classList.remove('form-input--error');
      }
    },
    validateForm() {
      // Mark all fields as touched for form submission validation
      Object.keys(this.formTouched).forEach(field => {
        this.formTouched[field] = true;
      });

      // Create FormData object for validation utility
      const formData = new FormData();
      formData.append('firstName', this.formData.firstName);
      formData.append('lastName', this.formData.lastName);
      formData.append('email', this.formData.email);
      formData.append('phone', this.formData.phone);
      formData.append('resume', this.formData.resume);
      formData.append('coverLetter', this.formData.coverLetter);

      // Use validation utility
      const validationResult = this.validator.validateCareerForm(formData);
      
      // Update component errors state
      this.errors = {
        firstName: validationResult.errors.firstName || '',
        lastName: validationResult.errors.lastName || '',
        email: validationResult.errors.email || '',
        phone: validationResult.errors.phone || '',
        resume: validationResult.errors.resume || '',
        coverLetter: validationResult.errors.coverLetter || ''
      };

      return validationResult.isValid;
    },
    async handleSubmit(event) {
      if (!this.validateForm()) {
        return;
      }

      this.isSubmitting = true;

      try {
        // Create FormData object to handle file upload
        const formDataToSubmit = new FormData();
        formDataToSubmit.append('firstName', this.formData.firstName);
        formDataToSubmit.append('lastName', this.formData.lastName);
        formDataToSubmit.append('email', this.formData.email);
        formDataToSubmit.append('phone', this.formData.phone);
        // formDataToSubmit.append('resume', this.formData.resume);
        formDataToSubmit.append('coverLetter', this.formData.coverLetter);

        // Submit to Formspree
        const response = await fetch('https://formspree.io/f/xyzdqggy', {
          method: 'POST',
          body: formDataToSubmit,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          this.showSuccessMessage = true;
          this.resetForm();
          // Hide success message after 10 seconds
          setTimeout(() => {
            this.showSuccessMessage = false;
          }, 10000);
        } else {
          throw new Error('Form submission failed');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('There was an error submitting your application. Please try again.');
      } finally {
        this.isSubmitting = false;
      }
    },
    resetForm() {
      this.formData = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        resume: null,
        coverLetter: ''
      };
      this.errors = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        resume: '',
        coverLetter: ''
      };
      this.formTouched = {
        firstName: false,
        lastName: false,
        email: false,
        phone: false,
        resume: false,
        coverLetter: false
      };
      
      // Reset file input
      const fileInput = document.getElementById('resume');
      if (fileInput) {
        fileInput.value = '';
      }
      
      // Clear validation errors using utility
      this.validator.clearErrors();
    }
  },
  
  mounted() {
    // Set up real-time validation when component is mounted
    const formElement = this.$el.querySelector('form');
    if (formElement) {
      this.validator.setupRealTimeValidation(formElement);
    }
  },
  
  beforeUnmount() {
    // Clean up any event listeners if needed
    if (this.validator) {
      this.validator.clearErrors();
    }
  }
}