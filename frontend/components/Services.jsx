"use client";
import { FaSearch, FaBullhorn, FaCode, FaPaintBrush, FaChartLine, FaShareAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const services = [
    {
        title: "SEO Optimization",
        description: "Rank higher on Google and drive organic traffic with our data-driven SEO strategies.",
        icon: <FaSearch className="text-4xl text-neon-blue mb-4" />
    },
    {
        title: "Social Media Marketing",
        description: "Engage your audience and build a community across all major social platforms.",
        icon: <FaShareAlt className="text-4xl text-neon-blue mb-4" />
    },
    {
        title: "Meta & Google Ads",
        description: "Maximize ROI with targeted ad campaigns that convert clicks into customers.",
        icon: <FaBullhorn className="text-4xl text-neon-blue mb-4" />
    },
    {
        title: "Website Development",
        description: "Fast, responsive, and SEO-friendly websites built with the latest tech stack.",
        icon: <FaCode className="text-4xl text-neon-blue mb-4" />
    },
    {
        title: "Branding & Design",
        description: "Create a memorable brand identity with premium logos and visual assets.",
        icon: <FaPaintBrush className="text-4xl text-neon-blue mb-4" />
    },
    {
        title: "Content Marketing",
        description: "Compelling content that tells your story and drives engagement.",
        icon: <FaChartLine className="text-4xl text-neon-blue mb-4" />
    },
];

const Services = () => {
    return (
        <section className="py-20 bg-dark-bg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-5xl font-bold mb-4"
                    >
                        Our <span className="text-royal-blue">Services</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-gray-400 max-w-2xl mx-auto"
                    >
                        Full-stack digital solutions tailored to your business goals.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5, type: "spring" }}
                            whileHover={{
                                scale: 1.05,
                                y: -10,
                                backgroundColor: "rgba(255, 255, 255, 0.03)",
                                borderColor: "rgba(65, 105, 225, 0.5)"
                            }}
                            className="glass-card p-8 rounded-2xl border border-white/5 transition-colors duration-300 cursor-pointer group relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-royal-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            <motion.div
                                className="mb-6 relative z-10"
                                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                                transition={{ duration: 0.5 }}
                            >
                                {service.icon}
                            </motion.div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-neon-blue transition-colors relative z-10">{service.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed relative z-10">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
