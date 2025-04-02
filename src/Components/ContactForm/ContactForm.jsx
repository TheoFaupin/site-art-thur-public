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
        setIsSubmitting(true);
        setSubmitStatus(null);

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
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
            <p className="text-base sm:text-lg md:text-xl font-hepta mb-6">
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
                    ></textarea>
                </div>

                <div className="flex justify-center">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`bg-arthur-burgundy text-white py-3 px-8 rounded ${
                            isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-arthur-burgundy-dark'
                        }`}
                    >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;