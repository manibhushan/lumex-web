// Navigation Component
export class Navigation {
    constructor() {
        this.container = document.getElementById('navigation-container');
        this.render();
    }

    render() {
        if (!this.container) {
            console.error('Navigation container not found');
            return;
        }

        const navigationHTML = `
            <div class="container">
                <nav class="nav">
                    <div class="nav__brand">
                        <h1 class="nav__logo">Lumex</h1>
                        <p class="nav__tagline">Technology Solutions and Recruitment</p>
                    </div>
                    <ul class="nav__menu">
                        <li class="nav__item">
                            <a href="#home" class="nav__link nav__link--active" data-route="home">
                                Home
                            </a>
                        </li>
                        <li class="nav__item">
                            <a href="#technology-solutions" class="nav__link" data-route="technology-solutions">
                                Technology Solutions
                            </a>
                        </li>
                        <li class="nav__item">
                            <a href="#recruitment" class="nav__link" data-route="recruitment">
                                Recruitment
                            </a>
                        </li>
                        <li class="nav__item">
                            <a href="#careers" class="nav__link" data-route="careers">
                                Careers
                            </a>
                        </li>
                    </ul>
                    <div class="nav__mobile-toggle" id="mobile-menu-toggle">
                        <span class="nav__hamburger"></span>
                        <span class="nav__hamburger"></span>
                        <span class="nav__hamburger"></span>
                    </div>
                </nav>
            </div>
        `;

        this.container.innerHTML = navigationHTML;
        this.setupMobileMenu();
    }

    setupMobileMenu() {
        const mobileToggle = document.getElementById('mobile-menu-toggle');
        const navMenu = document.querySelector('.nav__menu');

        if (mobileToggle && navMenu) {
            mobileToggle.addEventListener('click', () => {
                navMenu.classList.toggle('nav__menu--active');
                mobileToggle.classList.toggle('nav__mobile-toggle--active');
            });

            // Close mobile menu when clicking on a nav link
            navMenu.addEventListener('click', (event) => {
                if (event.target.classList.contains('nav__link')) {
                    navMenu.classList.remove('nav__menu--active');
                    mobileToggle.classList.remove('nav__mobile-toggle--active');
                }
            });

            // Close mobile menu when clicking outside
            document.addEventListener('click', (event) => {
                const isClickInsideNav = this.container.contains(event.target);
                if (!isClickInsideNav && navMenu.classList.contains('nav__menu--active')) {
                    navMenu.classList.remove('nav__menu--active');
                    mobileToggle.classList.remove('nav__mobile-toggle--active');
                }
            });
        }
    }

    // Method to update active navigation state
    setActiveRoute(route) {
        const navLinks = this.container.querySelectorAll('.nav__link');
        navLinks.forEach(link => {
            link.classList.remove('nav__link--active');
            if (link.getAttribute('data-route') === route) {
                link.classList.add('nav__link--active');
            }
        });
    }
}