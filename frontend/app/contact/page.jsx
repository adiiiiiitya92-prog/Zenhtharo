import ContactForm from '../../components/ContactForm';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

export const metadata = {
    title: 'Contact Us | ZenHtharo',
    description: 'Get in touch with ZenHtharo digital marketing agency.',
};

export default function ContactPage() {
    return (
        <div className="min-h-screen py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact <span className="text-royal-blue">Us</span></h1>
                    <p className="text-gray-400">We'd love to hear about your project.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div className="space-y-8">
                        <div className="glass-card p-8 rounded-2xl">
                            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <FaMapMarkerAlt className="text-neon-blue text-2xl mt-1" />
                                    <div>
                                        <h4 className="font-semibold text-white">Office Location</h4>
                                        <p className="text-gray-400">123 Tech Park, Digital Avenue<br />Innovation City, 560001</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <FaPhone className="text-neon-blue text-2xl mt-1" />
                                    <div>
                                        <h4 className="font-semibold text-white">Phone</h4>
                                        <p className="text-gray-400">+91 98765 43210</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <FaEnvelope className="text-neon-blue text-2xl mt-1" />
                                    <div>
                                        <h4 className="font-semibold text-white">Email</h4>
                                        <p className="text-gray-400">hello@zenhtharo.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 bg-royal-blue/10 rounded-2xl border border-royal-blue/20">
                            <h3 className="text-xl font-bold mb-2">Business Hours</h3>
                            <p className="text-gray-400">Monday - Friday: 9am - 6pm</p>
                            <p className="text-gray-400">Saturday: 10am - 4pm</p>
                            <p className="text-gray-400">Sunday: Closed</p>
                        </div>
                    </div>

                    <div>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
