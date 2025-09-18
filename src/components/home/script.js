export default {
  name: 'HomePage',
  data() {
    return {
      heroContent: {
        title: 'Connecting Exceptional Talent with Innovative Technology',
        description: 'We specialize in connecting exceptional talent with innovative companies while seamlessly integrating advanced technology systems to drive business success',
        primaryButton: 'Explore Recruitment',
        secondaryButton: 'Explore Tech Solutions'
      },
      companyOverview: {
        title: 'About Lumex',
        description: `Lumex Enterprise Solutions(Lumex) Pvt. Ltd. a software company built to connect two of the biggest gaps in today's digital landscape which is Tech Solutions and Tech Recruitment.
        <br/>
        <br/>
        Why both? Because businesses today don't just need better tools, they need the right people to drive them. We bring a dual-edge approach: solve integration problems with cutting-edge tech and solve talent gaps with precision hiring.`
      },
      services: [
        {
          id: 1,
          icon: '👥',
          title: 'Tech Recruitment',
          description: 'We don\'t just build systems; we help build the teams behind them. Our specialized recruitment services focus on placing top integration, cloud, and backend talent.',
          route: 'recruitment'
        },
        {
          id: 2,
          icon: '🔗',
          title: 'Technology Solutions',
          description: 'We develop smart, scalable solutions that help businesses streamline operations, connect platforms, and enable true digital transformation.',
          route: 'technology-solutions'
        }
      ],
      valuesSection: {
        title: 'Our Core Values'
      },
      coreValues: [
        {
          id: 1,
          title: 'Excellence',
          description: 'We strive for excellence in every project, delivering solutions that exceed expectations.'
        },
        {
          id: 2,
          title: 'Innovation',
          description: 'We embrace cutting-edge technologies and innovative approaches to solve complex challenges.'
        },
        {
          id: 3,
          title: 'Partnership',
          description: 'We build long-term partnerships with our clients, understanding their unique needs and goals.'
        },
        {
          id: 4,
          title: 'Integrity',
          description: 'We act with honesty and transparency, maintaining the highest ethical standards in all our interactions.'
        },
        {
          id: 5,
          title: 'Customer Focus',
          description: 'We put our clients at the center of everything we do, delivering solutions tailored to their success.'
        },
        {
          id: 6,
          title: 'Collaboration',
          description: 'We believe in teamwork and open communication to achieve shared goals and drive collective success.'
        }
      ]
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