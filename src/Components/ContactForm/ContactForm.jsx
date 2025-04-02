import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const form = useRef();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Early return - form submission disabled for now
        return;

        // The rest of the function will not execute
        setIsSubmitting(true);
        setSubmitStatus(null);

        // Replace these with your actual EmailJS service, template, and user IDs
        emailjs.sendForm(
            'YOUR_SERVICE_ID',
            'YOUR_TEMPLATE_ID',
            form.current,
            'YOUR_PUBLIC_KEY'
        )
            .then((result) => {
                console.log('Email sent successfully:', result.text);
                setFormData({ name: '', email: '', message: '' });
                setSubmitStatus('success');
            })
            .catch((error) => {
                console.error('Failed to send email:', error.text);
                setSubmitStatus('error');
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <div className="w-full max-w-md">
            <p className="text-responsive-body mb-6">
                Got a question or proposal, or just want to say hello? Go ahead.
            </p>

            {submitStatus === 'success' && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                    Message sent successfully! I'll get back to you soon.
                </div>
            )}

            {submitStatus === 'error' && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                    Failed to send message. Please try again later.
                </div>
            )}

            <form ref={form} onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                        className="w-full p-3 border border-gray-300 rounded bg-white"
                        required
                        disabled
                    />
                </div>

                <div>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        className="w-full p-3 border border-gray-300 rounded bg-white"
                        required
                        disabled
                    />
                </div>

                <div>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Message"
                        rows="6"
                        className="w-full p-3 border border-gray-300 rounded bg-white resize-none"
                        required
                        disabled
                    ></textarea>
                </div>

                <div className="flex justify-center">
                    <button
                        type="submit"
                        disabled={true}
                        className="bg-arthur-burgundy text-white py-3 px-8 rounded opacity-70 cursor-not-allowed"
                    >
                        Coming Soon
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;