import Link from 'next/link';
import { FaInstagram, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-black border-t border-white/10 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-royal-blue to-neon-blue">
                            ZenHtharo
                        </Link>
                        <p className="mt-4 text-gray-400 text-sm">
                            Elevating brands through performance-driven digital strategies.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-white font-semibold mb-4">Services</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="/services" className="hover:text-neon-blue transition-colors">SEO Optimization</Link></li>
                            <li><Link href="/services" className="hover:text-neon-blue transition-colors">Social Media Marketing</Link></li>
                            <li><Link href="/services" className="hover:text-neon-blue transition-colors">Paid Ads</Link></li>
                            <li><Link href="/services" className="hover:text-neon-blue transition-colors">Web Development</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white font-semibold mb-4">Company</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="/about" className="hover:text-neon-blue transition-colors">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-neon-blue transition-colors">Contact</Link></li>
                            <li><Link href="/privacy" className="hover:text-neon-blue transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white font-semibold mb-4">Connect</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors text-xl"><FaLinkedin /></a>
                            <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors text-xl"><FaInstagram /></a>
                            <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors text-xl"><FaTwitter /></a>
                            <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors text-xl"><FaFacebook /></a>
                        </div>
                        <p className="mt-4 text-gray-500 text-xs">
                            © {new Date().getFullYear()} ZenHtharo. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
