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
      contactInfo: {
        email: 'info@lumex.in',
        phone: '+919431429005',
        phoneDisplay: '+91-9431429005',
        address: '16th Cross Road, Bengaluru North, Karnataka 560016, IN'
      }
    }
  },
  methods: {
    validateForm() {
      let isValid = true;
      this.errors = {
        name: '',
        email: '',
        message: ''
      };

      // Validate name
      if (!this.formData.name.trim()) {
        this.errors.name = 'Name is required';
        isValid = false;
      }

      // Validate email
      if (!this.formData.email.trim()) {
        this.errors.email = 'Email is required';
        isValid = false;
      } else if (!this.isValidEmail(this.formData.email)) {
        this.errors.email = 'Please enter a valid email address';
        isValid = false;
      }

      // Validate message
      if (!this.formData.message.trim()) {
        this.errors.message = 'Message is required';
        isValid = false;
      }

      return isValid;
    },

    isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
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
    }
  }
}