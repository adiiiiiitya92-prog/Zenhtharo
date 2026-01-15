"use client";
import { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        business: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        try {
            await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/contact`, formData);
            setStatus('success');
            setFormData({ name: '', email: '', phone: '', business: '', message: '' });
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    return (
        <div className="glass-card p-8 rounded-2xl w-full max-w-lg mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center">Get In Touch</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Full Name</label>
                    <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-colors"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Email Address</label>
                    <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-colors"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Phone Number</label>
                    <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-colors"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Business Name</label>
                    <input
                        type="text"
                        name="business"
                        value={formData.business}
                        onChange={handleChange}
                        className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-colors"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                    <textarea
                        name="message"
                        required
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-colors"
                    ></textarea>
                </div>

                <motion.button
                    type="submit"
                    disabled={status === 'sending'}
                    whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(65, 105, 225, 0.5)" }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="w-full bg-royal-blue text-white py-3 rounded-lg font-bold shadow-neon disabled:opacity-50 relative overflow-hidden group"
                >
                    <span className="relative z-10">{status === 'sending' ? 'Sending...' : 'Send Message'}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                </motion.button>

                {status === 'success' && (
                    <p className="text-green-400 text-center text-sm">Message sent successfully!</p>
                )}
                {status === 'error' && (
                    <p className="text-red-400 text-center text-sm">Something went wrong. Please try again.</p>
                )}
            </form>
        </div>
    );
};

export default ContactForm;
