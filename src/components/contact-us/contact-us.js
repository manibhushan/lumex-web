import contactInfoData from '../../data/shared/contact-info.json';
import { FormValidator } from '../../utils/validation.js';

export default {
  name: 'ContactUs',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: ''
      },
      errors: {
        name: '',
        email: '',
        message: ''
      },
      isSubmitting: false,
      showSuccessMessage: false,
      showErrorMessage: false,
      contactInfo: contactInfoData,
      validator: new FormValidator()
    }
  },
  methods: {
    validateForm() {
      // Create FormData object for validation utility
      const formData = new FormData();
      formData.append('name', this.formData.name);
      formData.append('email', this.formData.email);
      formData.append('message', this.formData.message);

      // Use validation utility
      const validationResult = this.validator.validateContactForm(formData);
      
      console.log('Validation result:', validationResult); // Debug log

      // Update component errors state - ensure reactivity
      Object.keys(this.errors).forEach(key => {
        this.errors[key] = validationResult.errors[key] || '';
      });

      console.log('Updated errors:', this.errors); // Debug log

      return validationResult.isValid;
    },

    async handleSubmit() {
      // Reset messages
      this.showSuccessMessage = false;
      this.showErrorMessage = false;

      if (!this.validateForm()) {
        return;
      }

      this.isSubmitting = true;

      try {
        const formData = new FormData();
        formData.append('name', this.formData.name);
        formData.append('email', this.formData.email);
        formData.append('message', this.formData.message);

        const response = await fetch('https://formspree.io/f/mnnbyevy', {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          this.showSuccessMessage = true;
          this.resetForm();
          
          // Hide success message after 8 seconds
          setTimeout(() => {
            this.showSuccessMessage = false;
          }, 8000);
        } else {
          throw new Error('Form submission failed');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        this.showErrorMessage = true;
        
        // Hide error message after 8 seconds
        setTimeout(() => {
          this.showErrorMessage = false;
        }, 8000);
      } finally {
        this.isSubmitting = false;
      }
    },

    resetForm() {
      this.formData = {
        name: '',
        email: '',
        message: ''
      };
      this.errors = {
        name: '',
        email: '',
        message: ''
      };
      
      // Clear validation errors using utility
      this.validator.clearErrors();
    },

    clearFieldError(fieldName) {
      // Clear the error for this specific field when user starts typing
      if (this.errors[fieldName]) {
        this.errors[fieldName] = '';
      }
    }
  },
  
  mounted() {
    // Set up real-time validation when component is mounted
    const formElement = this.$el.querySelector('form');
    if (formElement) {
      this.validator.setupRealTimeValidation(formElement, 'contact');
      
      // Listen for error-cleared events to update Vue state
      formElement.addEventListener('error-cleared', (event) => {
        const fieldName = event.detail.fieldName;
        if (this.errors[fieldName]) {
          this.errors[fieldName] = '';
        }
      });
    }
  },
  
  beforeUnmount() {
    // Clean up any event listeners if needed
    if (this.validator) {
      this.validator.clearErrors();
    }
  }
}