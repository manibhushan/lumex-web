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
      isSubmitting: false,
      showSuccessMessage: false,
      cultureItems: [
        {
          id: 1,
          icon: '🚀',
          title: 'Growth Opportunities',
          description: 'Continuous learning and professional development in a rapidly evolving industry.'
        },
        {
          id: 2,
          icon: '🤝',
          title: 'Collaborative Environment',
          description: 'Work with talented professionals in a supportive and inclusive workplace.'
        },
        {
          id: 3,
          icon: '⚖️',
          title: 'Work-Life Balance',
          description: 'Flexible work arrangements and competitive benefits package.'
        },
        {
          id: 4,
          icon: '💡',
          title: 'Innovation Focus',
          description: 'Work on cutting-edge projects and contribute to innovative solutions.'
        }
      ],
      jobOpenings: [
        {
          id: 1,
          title: 'Senior Recruitment Consultant',
          department: 'Recruitment',
          description: 'Lead talent acquisition initiatives for technical roles. Work with clients to understand their hiring needs and build strong candidate pipelines.',
          requirements: [
            '3+ years of technical recruitment experience',
            'Strong understanding of software development roles',
            'Excellent communication and relationship-building skills'
          ]
        },
        {
          id: 2,
          title: 'Systems Integration Engineer',
          department: 'Technology',
          description: 'Design and implement complex system integrations for enterprise clients. Work with APIs, cloud platforms, and modern architecture patterns.',
          requirements: [
            '5+ years of systems integration experience',
            'Expertise in REST APIs, microservices, and cloud platforms',
            'Experience with Docker, Kubernetes, and CI/CD pipelines'
          ]
        },
        {
          id: 3,
          title: 'Business Development Manager',
          department: 'Sales',
          description: 'Drive growth in both recruitment and integration services. Build relationships with new clients and expand existing accounts.',
          requirements: [
            '3+ years of B2B sales experience',
            'Understanding of recruitment and/or technology services',
            'Track record of meeting and exceeding sales targets'
          ]
        }
      ],
      benefits: [
        {
          id: 1,
          title: 'Health & Wellness',
          description: 'Comprehensive health insurance, dental, vision, and wellness programs.'
        },
        {
          id: 2,
          title: 'Professional Development',
          description: 'Training budget, conference attendance, and certification support.'
        },
        {
          id: 3,
          title: 'Flexible Work',
          description: 'Hybrid work options, flexible hours, and generous PTO policy.'
        },
        {
          id: 4,
          title: 'Financial Benefits',
          description: 'Competitive salary, performance bonuses, and retirement plan matching.'
        }
      ]
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
      const file = event.target.files[0];
      this.formData.resume = file;
      this.errors.resume = '';
    },
    validateForm() {
      let isValid = true;
      this.errors = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        resume: '',
        coverLetter: ''
      };

      // Validate required fields
      if (!this.formData.firstName.trim()) {
        this.errors.firstName = 'First name is required';
        isValid = false;
      }

      if (!this.formData.lastName.trim()) {
        this.errors.lastName = 'Last name is required';
        isValid = false;
      }

      if (!this.formData.email.trim()) {
        this.errors.email = 'Email is required';
        isValid = false;
      } else if (!this.isValidEmail(this.formData.email)) {
        this.errors.email = 'Please enter a valid email address';
        isValid = false;
      }

      if (!this.formData.phone.trim()) {
        this.errors.phone = 'Phone number is required';
        isValid = false;
      }

      if (!this.formData.resume) {
        this.errors.resume = 'Resume is required';
        isValid = false;
      }

      return isValid;
    },
    isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
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
        formDataToSubmit.append('resume', this.formData.resume);
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
      // Reset file input
      const fileInput = document.getElementById('resume');
      if (fileInput) {
        fileInput.value = '';
      }
    }
  }
}