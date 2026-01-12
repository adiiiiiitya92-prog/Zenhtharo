import Link from 'next/link';

export const metadata = {
    title: 'Services | ZenHtharo',
    description: 'Explore our digital marketing services.',
};

const servicesList = [
    {
        title: "SEO Optimization",
        description: "Our SEO strategies are designed to increase visibility and drive organic traffic. We focus on technical SEO, on-page optimization, and high-quality link building.",
        features: ["Keyword Research", "Technical Audits", "Content Strategy", "Link Building"]
    },
    {
        title: "Paid Ads (PPC)",
        description: "Launch targeted campaigns on Google, Facebook, and Instagram. We optimize for highest conversion rates and lowest CPA.",
        features: ["Campaign Setup", "A/B Testing", "Audience Targeting", "ROI Analysis"]
    },
    {
        title: "Social Media Marketing",
        description: "Build a loyal community. We manage your social presence, create engaging content, and interact with your audience.",
        features: ["Content Calendar", "Community Management", "Influencer Marketing", "Analytics Reports"]
    },
    {
        title: "Web Development",
        description: "Custom websites that are fast, secure, and responsive. We use modern stacks like Next.js and MERN.",
        features: ["Custom Design", "E-commerce", "Performance Optimization", "Maintenance"]
    },
    {
        title: "Branding",
        description: "Define your brand's voice and visual identity. We create logos, brand guidelines, and collateral.",
        features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Rebranding"]
    }
];

export default function ServicesPage() {
    return (
        <div className="min-h-screen py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Our <span className="text-royal-blue">Services</span></h1>
                    <p className="text-gray-400">Comprehensive solutions for your digital growth.</p>
                </div>

                <div className="space-y-20">
                    {servicesList.map((service, index) => (
                        <div key={index} className={`flex flex-col md:flex-row gap-10 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                            <div className="flex-1 glass-card p-10 rounded-2xl w-full">
                                <h2 className="text-3xl font-bold mb-4 text-white">{service.title}</h2>
                                <p className="text-gray-300 mb-6 text-lg">{service.description}</p>
                                <ul className="grid grid-cols-2 gap-4">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-gray-400">
                                            <span className="w-2 h-2 bg-neon-blue rounded-full mr-2"></span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex-1 flex justify-center">
                                {/* Placeholder for service illustration */}
                                <div className="w-[300px] h-[300px] bg-gradient-to-tr from-royal-blue to-purple-600 rounded-full blur-[80px] opacity-40"></div>
                                <div className="absolute w-64 h-64 bg-white/5 backdrop-blur-3xl rounded-3xl border border-white/10 flex items-center justify-center">
                                    <span className="text-gray-500">[Illustration]</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <Link href="/contact" className="bg-royal-blue text-white px-8 py-3 rounded-full font-bold hover:bg-blue-600 transition-colors">
                        Get a Custom Quote
                    </Link>
                </div>
            </div>
        </div>
    );
}
