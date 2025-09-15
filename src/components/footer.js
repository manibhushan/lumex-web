// Footer Component
export class Footer {
    constructor() {
        this.container = document.getElementById('footer-container');
        this.render();
    }

    render() {
        if (!this.container) {
            console.error('Footer container not found');
            return;
        }

        const footerHTML = `
            <div class="container">
                <div class="footer">
                    <div class="footer__content">
                        <div class="footer__section">
                            <h3 class="footer__title">Lumex Enterprise Solutions</h3>
                            <p class="footer__description">
                                Bridging the gap between exceptional talent and innovative technology. 
                                Your trusted partner for recruitment and systems integration.
                            </p>
                            <div class="footer__social">
                                <a href="https://www.linkedin.com/company/lumex-enterprise-solutions/" target="_blank" class="footer__social-link" aria-label="LinkedIn">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                    </svg>
                                </a>
                                <a href="#" class="footer__social-link" aria-label="Twitter">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div class="footer__section">
                            <h4 class="footer__section-title">Services</h4>
                            <ul class="footer__links">
                            <li><a href="#technology-solutions" class="footer__link" data-route="technology-solutions">API Integration</a></li>
                            <li><a href="#technology-solutions" class="footer__link" data-route="technology-solutions">Cloud Migration</a></li>
                            <li><a href="#technology-solutions" class="footer__link" data-route="technology-solutions">System Modernization</a></li>
                                <li><a href="#recruitment" class="footer__link" data-route="recruitment">Executive Search</a></li>
                                <li><a href="#recruitment" class="footer__link" data-route="recruitment">Technical Recruitment</a></li>
                            </ul>
                        </div>

                        <div class="footer__section">
                            <h4 class="footer__section-title">Company</h4>
                            <ul class="footer__links">
                                <li><a href="#home" class="footer__link" data-route="home">About Us</a></li>
                                <li><a href="#careers" class="footer__link" data-route="careers">Careers</a></li>
                                <li><a href="#" class="footer__link">Blog</a></li>
                                <li><a href="#" class="footer__link">Case Studies</a></li>
                                <li><a href="#" class="footer__link">Contact</a></li>
                            </ul>
                        </div>

                        <div class="footer__section">
                            <h4 class="footer__section-title">Contact Info</h4>
                            <div class="footer__contact">
                                <div class="footer__contact-item">
                                    <strong>Email:</strong><br>
                                    <a href="mailto:info@lumex.in" class="footer__link">
                                        info@lumex.in
                                    </a>
                                </div>
                                <div class="footer__contact-item">
                                    <strong>Phone:</strong><br>
                                    <a href="tel:+919431429005" class="footer__link">
                                        +91-9431429005
                                    </a>
                                </div>
                                <div class="footer__contact-item">
                                    <strong>Address:</strong><br>
                                    16th Cross Road, Bengaluru North<br>
                                    Karnataka 560016, IN
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="footer__bottom">
                        <div class="footer__bottom-content">
                            <p class="footer__copyright">
                                © 2025 Lumex. All rights reserved.
                            </p>
                            <div class="footer__legal">
                                <a href="#" class="footer__legal-link">Privacy Policy</a>
                                <a href="#" class="footer__legal-link">Terms of Service</a>
                                <a href="#" class="footer__legal-link">Cookie Policy</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        this.container.innerHTML = footerHTML;
    }
}
