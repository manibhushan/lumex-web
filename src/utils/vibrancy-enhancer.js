// Enhanced Vibrancy Utilities - Scroll Animations and Effects
// Add this to your main.js or create a separate utility file

export class VibrancyEnhancer {
  constructor() {
    this.initScrollAnimations();
    this.initParallaxEffects();
    this.initHoverEffects();
  }

  // Initialize scroll-triggered animations
  initScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        }
      });
    }, observerOptions);

    // Observe elements with animation classes
    document.querySelectorAll('.animate-on-scroll, .animate-slide-left, .animate-slide-right').forEach((el) => {
      observer.observe(el);
    });
  }

  // Initialize parallax effects
  initParallaxEffects() {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax-element');
      
      parallaxElements.forEach((element) => {
        const speed = element.dataset.speed || 0.5;
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
      });
    });
  }

  // Initialize enhanced hover effects
  initHoverEffects() {
    // Add dynamic glow effects to cards
    document.querySelectorAll('.service-card, .stat-item, .office-card').forEach((card) => {
      card.addEventListener('mouseenter', () => {
        card.style.setProperty('--glow-opacity', '1');
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.setProperty('--glow-opacity', '0');
      });
    });

    // Add ripple effect to buttons
    document.querySelectorAll('.btn').forEach((button) => {
      button.addEventListener('click', (e) => {
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
          position: absolute;
          width: ${size}px;
          height: ${size}px;
          left: ${x}px;
          top: ${y}px;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          transform: scale(0);
          animation: ripple 0.6s linear;
          pointer-events: none;
        `;
        
        button.appendChild(ripple);
        
        setTimeout(() => {
          ripple.remove();
        }, 600);
      });
    });
  }

  // Add staggered animations to grid items
  static staggerGridItems(selector, delay = 100) {
    document.querySelectorAll(selector).forEach((item, index) => {
      item.style.animationDelay = `${index * delay}ms`;
      item.classList.add('animate-on-scroll');
    });
  }

  // Add floating animation to specific elements
  static makeFloating(selector) {
    document.querySelectorAll(selector).forEach((element) => {
      element.classList.add('floating-element');
    });
  }

  // Add text glow effect
  static addTextGlow(selector) {
    document.querySelectorAll(selector).forEach((element) => {
      element.classList.add('text-glow');
    });
  }
}

// CSS for ripple effect (add to your stylesheet)
const rippleCSS = `
@keyframes ripple {
  to {
    transform: scale(4);
    opacity: 0;
  }
}

.btn {
  position: relative;
  overflow: hidden;
}
`;

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new VibrancyEnhancer();
  
  // Add specific enhancements
  VibrancyEnhancer.staggerGridItems('.service-card', 150);
  VibrancyEnhancer.staggerGridItems('.stat-item', 100);
  VibrancyEnhancer.makeFloating('.hero__title, .section-title');
  VibrancyEnhancer.addTextGlow('.hero__title');
});