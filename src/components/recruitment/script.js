export default {
  name: 'RecruitmentPage',
  data() {
    return {
      pageHeader: {
        title: 'Recruitment Services',
        description: 'Expert talent acquisition and staffing solutions tailored to your organization\'s unique needs.'
      },
      servicesSection: {
        title: 'Our Recruitment Expertise'
      },
      recruitmentServices: [
        {
          id: 1,
          icon: '📝',
          title: 'Contract Staffing',
          description: 'We provide end-to-end contract staffing across industries, customized as per your needs and requirements.'
        },
        {
          id: 2,
          icon: '🔒',
          title: 'Permanent Recruiting',
          description: 'We have years of experience when it comes to permanent workforce supply leading us to be one of the best.'
        },
        {
          id: 3,
          icon: '⚡',
          title: 'On Demand Staffing',
          description: 'Boosted with a large database of potential job candidates, we are swift in completing on demand staffing.'
        },
        {
          id: 4,
          icon: '👨‍👩‍👧‍👦',
          title: 'Volume Hiring',
          description: 'Efficient recruitment processes for large-scale hiring initiatives.'
        },
        {
          id: 5,
          icon: '🌟',
          title: 'Employer Branding',
          description: 'Build and enhance your company\'s reputation as an employer of choice.'
        },
        {
          id: 6,
          icon: '🌍',
          title: 'Employee Deployment',
          description: 'We take the complete ownership when it comes to employee deployment - from onboarding, visa to payroll.'
        }
      ],
      industriesSection: {
        title: 'Industries We Serve'
      },
      industries: [
        {
          id: 1,
          title: 'Technology',
          description: 'Startups to enterprise tech companies, from software development to AI/ML specialists.'
        },
        {
          id: 2,
          title: 'Healthcare',
          description: 'Medical professionals, healthcare IT, and biotechnology talent acquisition.'
        },
        {
          id: 3,
          title: 'Finance',
          description: 'Banking, fintech, investment management, and financial services recruitment.'
        },
        {
          id: 4,
          title: 'Manufacturing',
          description: 'Engineering, operations, and manufacturing technology professionals.'
        },
        {
          id: 5,
          title: 'Retail',
          description: 'E-commerce, retail operations, and customer experience specialists.'
        },
        {
          id: 6,
          title: 'Education',
          description: 'Recruitment for schools, universities, edtech companies, and academic professionals.'
        }
      ],
      processSection: {
        title: 'Our Recruitment Process'
      },
      processSteps: [
        {
          id: 1,
          number: 1,
          title: 'Discovery',
          description: 'We understand your company culture, role requirements, and ideal candidate profile.'
        },
        {
          id: 2,
          number: 2,
          title: 'Sourcing',
          description: 'Leveraging our network and advanced sourcing techniques to identify top talent.'
        },
        {
          id: 3,
          number: 3,
          title: 'Screening',
          description: 'Comprehensive evaluation including technical assessments and cultural fit analysis.'
        },
        {
          id: 4,
          number: 4,
          title: 'Placement',
          description: 'Facilitating interviews, negotiations, and ensuring successful candidate placement.'
        }
      ],
      contactSection: {
        title: 'Ready to Find Your Next Great Hire?',
        description: 'Let\'s discuss your recruitment needs and how we can help you build an exceptional team.',
        buttonText: 'Contact Our Recruitment Team',
        contactInfo: [
          {
            type: 'email',
            label: 'Email',
            value: 'hr@lumex.in',
            link: 'mailto:hr@lumex.in'
          },
          {
            type: 'phone',
            label: 'Phone',
            value: '+91-9431429005',
            link: 'tel:+919431429005'
          }
        ]
      }
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
