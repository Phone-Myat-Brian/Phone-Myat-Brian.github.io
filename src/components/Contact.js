import React from 'react';
import { ContactContainer, Form } from './Contact.styles';

const Contact = () => {
    return (
        <ContactContainer>
            <h2>Contact</h2>
            <Form>
                <input type="text" name="name" placeholder="Your Name" required />
                <input type="email" name="email" placeholder="Your Email" required />
                <textarea name="message" placeholder="Your Message" required></textarea>
                <button type="submit">Send</button>
            </Form>
        </ContactContainer>
    );
};

export default Contact;
