export default {
  name: 'FooterComponent',
  data() {
    return {
      companyInfo: {
        name: 'Lumex Enterprise Solutions',
        description: 'Bridging the gap between exceptional talent and innovative technology. Your trusted partner for recruitment and systems integration.'
      },
      contactInfo: {
        email: 'info@lumex.in',
        phone: '+919431429005',
        phoneDisplay: '+91-9431429005',
        address: '16th Cross Road, Bengaluru North<br>Karnataka 560016, IN'
      },
      socialLinks: [
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/company/lumex-enterprise-solutions/',
          iconPath: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'
        },
        {
          name: 'Twitter',
          url: '#',
          iconPath: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z'
        }
      ],
      services: [
        {
          name: 'API Integration',
          href: '#technology-solutions',
          route: 'technology-solutions'
        },
        {
          name: 'Cloud Migration',
          href: '#technology-solutions',
          route: 'technology-solutions'
        },
        {
          name: 'System Modernization',
          href: '#technology-solutions',
          route: 'technology-solutions'
        },
        {
          name: 'Executive Search',
          href: '#recruitment',
          route: 'recruitment'
        },
        {
          name: 'Technical Recruitment',
          href: '#recruitment',
          route: 'recruitment'
        }
      ],
      companyLinks: [
        {
          name: 'About Us',
          href: '#home',
          route: 'home'
        },
        {
          name: 'Careers',
          href: '#careers',
          route: 'careers'
        },
        {
          name: 'Blog',
          href: '#',
          route: null
        },
        {
          name: 'Case Studies',
          href: '#',
          route: null
        },
        {
          name: 'Contact',
          href: '#contact',
          route: 'contact'
        }
      ],
      legalLinks: [
        {
          name: 'Privacy Policy',
          href: '#'
        },
        {
          name: 'Terms of Service',
          href: '#'
        },
        {
          name: 'Cookie Policy',
          href: '#'
        }
      ]
    }
  },
  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  },
  methods: {
    handleLinkClick(event) {
      const route = event.target.getAttribute('data-route');
      if (route) {
        // Emit event for parent component to handle routing
        this.$emit('navigate', route);
        
        // If using Vue Router, you could do:
        // this.$router.push({ name: route });
        
        event.preventDefault();
      }
    },
    handleLegalLinkClick(event) {
      const href = event.target.getAttribute('href');
      if (href === '#') {
        // Handle legal links that don't have actual URLs yet
        console.log('Legal link clicked:', event.target.textContent);
        event.preventDefault();
        
        // You could emit an event or show a modal here
        this.$emit('legal-link-clicked', event.target.textContent);
      }
    }
  }
}