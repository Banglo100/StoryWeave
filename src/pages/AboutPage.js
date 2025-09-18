import React from 'react';

function AboutPage() {
    return (
        <div className="about-page">
            <header className="page-header">
                <h1>About Story Weave</h1>
                <p>A community-driven platform for collaborative storytelling.</p>
            </header>

            <section className="mission-section">
                <h2>Our Mission</h2>
                <p>
                    Story Weave was created to connect writers and readers from all over the world,
                    enabling them to build unique and imaginative stories together, one part at a time.
                    We believe in the power of collaboration and the magic that happens when diverse
                    minds come together to create something new.
                </p>
            </section>

            <section className="how-it-works-section">
                <h2>How It Works</h2>
                <ul>
                    <li>**Start a Story:** Any registered user can start a new story with a title and the first part.</li>
                    <li>**Contribute:** Other writers can submit their ideas for the next part of the story.</li>
                    <li>**Vote:** The community votes on the best contribution to become the next part of the story.</li>
                    <li>**Watch it Grow:** The story continues to grow, part by part, with the community guiding its path.</li>
                </ul>
            </section>

            <section className="contact-section">
                <h2>Contact Us</h2>
                <p>Have questions or feedback? We'd love to hear from you!</p>
                <a href="mailto:support@storyweave.com" className="contact-link">
                    Send us an email
                </a>
            </section>
        </div>
    );
}

export default AboutPage;