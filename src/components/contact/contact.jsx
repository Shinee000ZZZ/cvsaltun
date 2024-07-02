import { useState } from 'react';
import styles from './Contact.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faWhatsapp, faTiktok, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const mailtoLink = `mailto:shineggod@gmail.com?subject=Contact from Portfolio&body=Email: ${email}%0APhone: ${phone}%0AMessage: ${message}`;
        window.location.href = mailtoLink;
    };

    return (
        <div className={styles.container}>
            <form className={styles.contactForm} onSubmit={handleSubmit}>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label>Phone:</label>
                <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />
                <label>Message:</label>
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={5}
                    required
                />
                <button type="submit">Send Message</button>
            </form>
            <footer className={styles.footer}>
                <div className={styles.socialSection}>
                    <div className={styles.socialIcons}>
                        <a href="https://twitter.com/OkeShinee" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="https://wa.me/+6289502632801" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faWhatsapp} />
                        </a>
                        <a href="https://tiktok.com/@oshitergantungfyp" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTiktok} />
                        </a>
                        <a href="https://instagram.com/kesaltunan" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </div>
                </div>
                <div className={styles.copyrightSection}>
                    <p>© 2024 Sultan Syaeful Millah. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Contact;
