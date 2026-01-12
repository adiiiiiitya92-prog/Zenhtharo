"use client";
import Link from 'next/link';
import { useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const links = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Contact', path: '/contact' },
    ];

    const isActive = (path) => pathname === path;

    return (
        <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-royal-blue to-neon-blue text-glow">
                            ZenHtharo
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {links.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.path}
                                    className="relative group px-3 py-2"
                                >
                                    <span className={`text-sm font-medium transition-colors duration-300 relative z-10 ${isActive(link.path)
                                        ? 'text-neon-blue'
                                        : 'text-gray-300 hover:text-white'
                                        }`}
                                    >
                                        {link.name}
                                    </span>
                                    {isActive(link.path) && (
                                        <motion.div
                                            layoutId="navbar-underline"
                                            className="absolute bottom-0 left-0 right-0 h-[2px] bg-neon-blue shadow-neon"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full opacity-50"></span>
                                </Link>
                            ))}
                            <Link href="/contact">
                                <motion.div
                                    whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(65, 105, 225, 0.6)" }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-royal-blue text-white px-6 py-2 rounded-full text-sm font-bold shadow-neon cursor-pointer"
                                >
                                    Get Started
                                </motion.div>
                            </Link>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <HiX className="block h-6 w-6" /> : <HiMenuAlt3 className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-black/95 backdrop-blur-xl absolute top-20 left-0 w-full border-b border-white/10">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                href={link.path}
                                onClick={() => setIsOpen(false)}
                                className={`block px-3 py-2 rounded-md text-base font-medium ${isActive(link.path)
                                    ? 'text-neon-blue bg-white/5'
                                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
