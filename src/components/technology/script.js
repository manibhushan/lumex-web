export default {
  name: 'TechnologySolutionsPage',
  data() {
    return {
      pageHeader: {
        title: 'Technology Solutions Services',
        description: 'Seamless technology system integration and modernization solutions for businesses of all sizes.'
      },
      servicesSection: {
        title: 'Our Tech Expertise'
      },
      techServices: [
        {
          id: 1,
          icon: '🔗',
          title: 'API Integration',
          description: 'Connect disparate systems and applications through robust API integration solutions.'
        },
        {
          id: 2,
          icon: '☁️',
          title: 'Cloud Migration',
          description: 'Migrate your infrastructure to cloud platforms with minimal downtime and maximum efficiency.'
        },
        {
          id: 3,
          icon: '🔄',
          title: 'Legacy System Modernization',
          description: 'Transform outdated systems into modern, scalable, and maintainable solutions.'
        },
        {
          id: 4,
          icon: '📊',
          title: 'Data Integration',
          description: 'Unify data across multiple sources for better insights and decision-making.'
        },
        {
          id: 5,
          icon: '🏗️',
          title: 'System Architecture',
          description: 'Design scalable and resilient system architectures for your growing business needs.'
        },
        {
          id: 6,
          icon: '🔒',
          title: 'Security & Compliance',
          description: 'Ensure your technology solutions meet industry security standards and regulatory compliance.'
        }
      ],
      technologiesSection: {
        title: 'Technologies We Work With'
      },
      techCategories: [
        {
          id: 1,
          title: 'Cloud Platforms',
          technologies: ['AWS', 'Azure', 'Google Cloud', 'Salesforce']
        },
        {
          id: 2,
          title: 'Integration Protocols',
          technologies: ['REST APIs', 'GraphQL', 'SOAP', 'WebSockets']
        },
        {
          id: 3,
          title: 'Architecture Patterns',
          technologies: ['Microservices', 'Event-Driven', 'Service Mesh', 'Serverless']
        },
        {
          id: 4,
          title: 'Container Technologies',
          technologies: ['Docker', 'Kubernetes', 'OpenShift', 'Helm']
        }
      ],
      caseStudiesSection: {
        title: 'Success Stories'
      },
      caseStudies: [
        {
          id: 1,
          title: 'E-commerce Platform Integration',
          description: 'Integrated 15+ third-party services for a major retailer, reducing processing time by 60% and improving customer experience.',
          results: ['60% faster processing', '15+ integrations', 'Zero downtime']
        },
        {
          id: 2,
          title: 'Healthcare System Modernization',
          description: 'Migrated legacy healthcare system to cloud infrastructure, ensuring HIPAA compliance and improving system reliability by 99.9%.',
          results: ['99.9% uptime', 'HIPAA compliant', '50% cost reduction']
        },
        {
          id: 3,
          title: 'Financial Services API Gateway',
          description: 'Implemented secure API gateway for fintech startup, enabling rapid partner integrations and scaling to handle 1M+ transactions daily.',
          results: ['1M+ daily transactions', 'Bank-grade security', '20+ partner APIs']
        },
        {
          id: 4,
          title: 'Manufacturing IoT Integration',
          description: 'Connected factory floor devices to a centralized dashboard, enabling real-time monitoring and predictive maintenance.',
          results: ['Real-time analytics', 'Predictive maintenance', '30% downtime reduction']
        },
        {
          id: 5,
          title: 'Education Platform Data Unification',
          description: 'Unified student data from multiple sources, improving reporting accuracy and enabling personalized learning experiences.',
          results: ['Unified data', 'Personalized learning', 'Improved reporting']
        },
        {
          id: 6,
          title: 'Retail POS System Upgrade',
          description: 'Modernized POS systems for a retail chain, integrating inventory and sales data for seamless operations across 100+ stores.',
          results: ['100+ stores', 'Integrated inventory', 'Seamless operations']
        }
      ],
      processSection: {
        title: 'Our Integration Process'
      },
      processSteps: [
        {
          id: 1,
          number: 1,
          title: 'Assessment',
          description: 'Comprehensive analysis of your current systems, infrastructure, and integration needs.'
        },
        {
          id: 2,
          number: 2,
          title: 'Architecture Design',
          description: 'Create detailed integration architecture and implementation roadmap.'
        },
        {
          id: 3,
          number: 3,
          title: 'Implementation',
          description: 'Agile development and deployment with continuous testing and monitoring.'
        },
        {
          id: 4,
          number: 4,
          title: 'Support & Optimization',
          description: 'Ongoing support, monitoring, and performance optimization for your integrated systems.'
        }
      ],
      contactSection: {
        title: 'Ready to Modernize Your Systems?',
        description: 'Let\'s discuss your integration challenges and create a solution that scales with your business.',
        buttonText: 'Contact Our Integration Team',
        contactInfo: [
          {
            type: 'email',
            label: 'Email',
            value: 'info@lumex.in',
            link: 'mailto:info@lumex.in'
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
    }
  },
  
  mounted() {
    // Emit page loaded event
    this.$emit('page-loaded', 'technology-solutions');
  }
}
