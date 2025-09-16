export const contactUsHTML = 
`<section class="contact-section">
    <h1>Contact Us</h1>
    <p>We'd love to hear from you! Please fill out the form below and we'll get back to you as soon as possible.</p>
    <form class="contact-form" action="https://formspree.io/f/mnnbyevy" method="POST">
        <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" required>
        </div>
        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required>
        </div>
        <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <button type="submit" class="btn-primary">Send Message</button>
    </form>
    <div class="contact-details">
        <h2>Other Ways to Reach Us</h2>
        <ul>
            <li>Email: <a href="mailto:info@lumexweb.com">info@lumex.in</a></li>
            <li>Phone: <a href="tel:+919431429005">+91-9431429005</a></li>
            <li>Address: 16th Cross Road, Bengaluru North, Karnataka 560016, IN</li>
        </ul>
    </div>
</section>`;

