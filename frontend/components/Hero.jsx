"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-royal-blue/20 rounded-full blur-[100px] opacity-50 z-0"></div>

            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
                >
                    ZenHtharo <span className="block text-transparent bg-clip-text bg-gradient-to-r from-royal-blue to-neon-blue mt-2">Elevate Your Digital Presence</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
                >
                    A performance-driven digital marketing agency committed to scaling your brand through data-backed strategies and premium design.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <Link href="/contact">
                        <motion.div
                            whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(65, 105, 225, 0.8)" }}
                            whileTap={{ scale: 0.95 }}
                            className="px-10 py-5 bg-royal-blue text-white rounded-full font-bold text-lg shadow-neon cursor-pointer relative overflow-hidden group"
                        >
                            <span className="relative z-10">Get a Free Consultation</span>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </motion.div>
                    </Link>
                    <Link href="/services">
                        <motion.div
                            whileHover={{ scale: 1.05, borderColor: "#00cbd6", boxShadow: "0 0 20px rgba(0, 203, 214, 0.2)" }}
                            whileTap={{ scale: 0.95 }}
                            className="px-10 py-5 bg-transparent border border-white/20 text-white rounded-full font-semibold cursor-pointer backdrop-blur-sm flex items-center gap-2 group"
                        >
                            View Our Services
                            <motion.span
                                animate={{ x: [0, 5, 0] }}
                                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                            >
                                →
                            </motion.span>
                        </motion.div>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
