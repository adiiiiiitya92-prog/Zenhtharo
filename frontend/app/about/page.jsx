export const metadata = {
    title: 'About Us | ZenHtharo',
    description: 'Learn about our mission, vision, and team at ZenHtharo.',
};

export default function AboutPage() {
    return (
        <div className="min-h-screen pt-10 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Story Section */}
                <section className="mb-20">
                    <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">About <span className="text-royal-blue">ZenHtharo</span></h1>
                    <div className="glass-card p-10 rounded-2xl">
                        <h2 className="text-2xl font-bold mb-4 text-white">Our Story</h2>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Founded with a passion for digital excellence, ZenHtharo began as a small collective of creatives and strategists.
                            We recognized a gap in the market for a digital agency that truly bridges the gap between stunning creative design
                            and hard-hitting performance marketing.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            Today, we are a full-stack digital partner for brands across the globe, helping them navigate the complex digital landscape
                            and achieve measurable growth.
                        </p>
                    </div>
                </section>

                {/* Mission & Vision */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    <div className="p-8 border border-royal-blue/30 rounded-2xl bg-gradient-to-br from-black to-gray-900">
                        <h3 className="text-2xl font-bold mb-4 text-neon-blue">Our Mission</h3>
                        <p className="text-gray-400">
                            To empower businesses with innovative digital solutions that drive real results. We strive to be the catalyst for our clients' success.
                        </p>
                    </div>
                    <div className="p-8 border border-royal-blue/30 rounded-2xl bg-gradient-to-br from-black to-gray-900">
                        <h3 className="text-2xl font-bold mb-4 text-neon-blue">Our Vision</h3>
                        <p className="text-gray-400">
                            To be the leading digital performance agency known for creativity, integrity, and transformative growth strategies.
                        </p>
                    </div>
                </div>

                {/* Team Section */}
                <section>
                    <h2 className="text-3xl font-bold mb-10 text-center">Meet The <span className="text-royal-blue">Team</span></h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Dummy Team Members */}
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="bg-white/5 rounded-xl overflow-hidden hover:bg-white/10 transition-colors">
                                <div className="h-64 bg-gray-800 w-full flex items-center justify-center text-gray-600">
                                    [Team Member Photo]
                                </div>
                                <div className="p-6">
                                    <h4 className="text-xl font-bold text-white mb-1">Jane Doe {item}</h4>
                                    <p className="text-royal-blue text-sm mb-4">Senior Strategist</p>
                                    <p className="text-gray-400 text-sm">
                                        Expert in digital transformation and brand strategy with over 10 years of experience.
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

            </div>
        </div>
    );
}
