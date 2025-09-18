import companyInfoData from '../../data/shared/company-info.json';
import contactInfoData from '../../data/shared/contact-info.json';
import socialLinksData from '../../data/shared/social-links.json';
import footerLinksData from '../../data/shared/footer-links.json';

export default {
  name: 'FooterComponent',
  data() {
    return {
      companyInfo: {
        name: companyInfoData.name,
        description: companyInfoData.description
      },
      contactInfo: {
        ...contactInfoData,
        address: contactInfoData.address.replace(', ', '<br>')
      },
      socialLinks: socialLinksData,
      services: footerLinksData.services,
      companyLinks: footerLinksData.companyLinks,
      legalLinks: footerLinksData.legalLinks
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