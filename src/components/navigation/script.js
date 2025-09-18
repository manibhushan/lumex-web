export default {
  name: 'NavigationComponent',
  props: {
    currentRoute: {
      type: String,
      default: 'home'
    }
  },
  data() {
    return {
      isMobileMenuOpen: false,
      brandInfo: {
        name: 'Lumex',
        tagline: 'Bridging Talent and Technology'
      },
      navigationItems: [
        {
          id: 1,
          label: 'Home',
          href: '#home',
          route: 'home'
        },
        {
          id: 2,
          label: 'Recruitment',
          href: '#recruitment',
          route: 'recruitment'
        },
        {
          id: 3,
          label: 'Technology Solutions',
          href: '#technology-solutions',
          route: 'technology-solutions'
        },
        {
          id: 4,
          label: 'Careers',
          href: '#careers',
          route: 'careers'
        },
        {
          id: 5,
          label: 'Contact Us',
          href: '#contact-us',
          route: 'contact-us'
        }
      ]
    }
  },
  computed: {
    activeRoute() {
      return this.currentRoute;
    }
  },
  methods: {
    handleNavClick(item, event) {
      event.preventDefault();
      
      // Close mobile menu if open
      this.isMobileMenuOpen = false;
      
      // Emit navigation event to parent
      this.$emit('navigate', item.route);
      
      // Emit specific item click event for analytics
      this.$emit('nav-item-clicked', item);
    },
    
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
      
      // Emit mobile menu toggle event
      this.$emit('mobile-menu-toggled', this.isMobileMenuOpen);
    },
    
    closeMobileMenu() {
      if (this.isMobileMenuOpen) {
        this.isMobileMenuOpen = false;
        this.$emit('mobile-menu-closed');
      }
    },
    
    setActiveRoute(route) {
      // Method to programmatically set active route
      this.$emit('update:currentRoute', route);
    },
    
    handleOutsideClick(event) {
      // Check if click is outside the navigation component
      if (!this.$el.contains(event.target) && this.isMobileMenuOpen) {
        this.closeMobileMenu();
      }
    }
  },
  
  mounted() {
    // Add click outside listener for mobile menu
    document.addEventListener('click', this.handleOutsideClick);
    
    // Emit component mounted event
    this.$emit('navigation-mounted');
  },
  
  beforeUnmount() {
    // Clean up event listener
    document.removeEventListener('click', this.handleOutsideClick);
  },
  
  watch: {
    // Watch for route changes from parent
    currentRoute(newRoute) {
      // Emit route change event
      this.$emit('route-changed', newRoute);
    }
  }
}
