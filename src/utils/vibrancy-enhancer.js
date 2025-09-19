// Enhanced Vibrancy Utilities - Scroll Animations and Effects
// Add this to your main.js or create a separate utility file

const VibrancyEnhancer = {
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
  },

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
  },

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
  },

  // Add staggered animations to grid items
  staggerGridItems(selector, delay = 100) {
    document.querySelectorAll(selector).forEach((item, index) => {
      item.style.animationDelay = `${index * delay}ms`;
      item.classList.add('animate-on-scroll');
    });
  },

  // Add floating animation to specific elements
  makeFloating(selector) {
    document.querySelectorAll(selector).forEach((element) => {
      element.classList.add('floating-element');
    });
  },

  // Add text glow effect
  addTextGlow(selector) {
    document.querySelectorAll(selector).forEach((element) => {
      element.classList.add('text-glow');
    });
  },

  // Advanced Background Effects
  applyDynamicBackground(selector, backgroundType = 'layered-tech') {
    document.querySelectorAll(selector).forEach((element) => {
      element.classList.add(`bg-${backgroundType}`);
    });
  },

  // Particle System
  createParticleSystem(container, particleCount = 20) {
    const containerElement = document.querySelector(container);
    if (!containerElement) return;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.cssText = `
        position: absolute;
        width: ${Math.random() * 4 + 2}px;
        height: ${Math.random() * 4 + 2}px;
        background: rgba(102, 126, 234, ${Math.random() * 0.3 + 0.1});
        border-radius: 50%;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation: particleFloat ${Math.random() * 10 + 8}s ease-in-out infinite;
        animation-delay: ${Math.random() * 5}s;
        z-index: 0;
      `;
      containerElement.appendChild(particle);
    }
  },

  // Advanced Mesh Gradient Generator
  createMeshGradient(selector, colors = ['#667eea', '#764ba2', '#f093fb']) {
    document.querySelectorAll(selector).forEach((element) => {
      const gradients = colors.map((color, index) => 
        `radial-gradient(circle at ${Math.random() * 100}% ${Math.random() * 100}%, ${color}33 0%, transparent 50%)`
      ).join(', ');
      
      element.style.background = `${gradients}, var(--gradient-cosmic)`;
      element.style.backgroundSize = '300% 300%';
      element.style.animation = 'meshGradient 20s ease infinite';
    });
  },

  // Interactive Background Changer
  makeBackgroundInteractive(selector) {
    const backgrounds = [
      'bg-dots',
      'bg-circuit', 
      'bg-hexagon',
      'bg-waves',
      'bg-mesh-gradient'
    ];
    
    document.querySelectorAll(selector).forEach((element) => {
      let currentBg = 0;
      
      element.addEventListener('click', () => {
        // Remove previous background
        backgrounds.forEach(bg => element.classList.remove(bg));
        
        // Add new background
        currentBg = (currentBg + 1) % backgrounds.length;
        element.classList.add(backgrounds[currentBg]);
      });
    });
  },

  // Scroll-based Background Intensity
  initScrollBasedEffects() {
    window.addEventListener('scroll', () => {
      const scrollPercent = window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight);
      
      // Adjust background intensity based on scroll
      document.querySelectorAll('.bg-layered-tech, .bg-mesh-gradient').forEach((element) => {
        const intensity = 0.5 + (scrollPercent * 0.5);
        element.style.opacity = intensity;
      });
    });
  }
};

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  VibrancyEnhancer.initScrollAnimations();
  VibrancyEnhancer.initParallaxEffects();
  VibrancyEnhancer.initHoverEffects();
  
  // Add specific enhancements
  VibrancyEnhancer.staggerGridItems('.service-card', 150);
  VibrancyEnhancer.staggerGridItems('.stat-item', 100);
  VibrancyEnhancer.makeFloating('.hero__title, .section-title');
  VibrancyEnhancer.addTextGlow('.hero__title');
});

// Export for module usage
export default VibrancyEnhancer;