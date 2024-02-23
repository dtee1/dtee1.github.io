import React from 'react';
import './Contact.css'; // Import the CSS file

const Contact = () => {
    return (
        <div name="contact" className="contact-container">
            <div className="contact-content">
                <div className="contact-header">
                    <p className="contact-title">Contact</p>
                    <p className="contact-description">Send me a message</p>
                </div>
                <div className="contact-form-container">
                    <form action="https://getform.io/f/4857079c-8686-43eb-b021-7fae1222671b" method="POST" className="contact-form">
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="Name"
                            className="contact-input"
                        />
                        <input 
                            type="text" 
                            name="email" 
                            placeholder="Email"
                            className="contact-input"
                        />
                        <textarea
                            name="message" 
                            rows="1"
                            className="contact-textarea"
                        ></textarea>
                        <button className="contact-button">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;