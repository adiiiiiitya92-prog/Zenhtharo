import Hero from '../components/Hero';
import Services from '../components/Services';
import Reviews from '../components/Reviews';
import Link from 'next/link';

export default function Home() {
    return (
        <>
            <Hero />

            {/* About Preview Section */}
            <section className="py-20 bg-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">About <span className="text-royal-blue">ZenHtharo</span></h2>
                    <p className="text-gray-400 max-w-3xl mx-auto mb-10 text-lg">
                        We are a team of visionary creatives and technical experts dedicated to transforming brands. At ZenHtharo, we don't just follow trends; we set them. Our mission is to elevate your digital presence through strategic marketing and innovative design.
                    </p>
                    <Link href="/about" className="text-neon-blue border-b border-neon-blue hover:text-white hover:border-white transition-colors pb-1">
                        Learn More About Us &rarr;
                    </Link>
                </div>
            </section>

            <Services />
            <Reviews />

            {/* Call To Action */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-royal-blue/10"></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-blue to-transparent"></div>

                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">Let’s Grow Your Brand</h2>
                    <p className="text-xl text-gray-300 mb-10">
                        Ready to take your business to the next level? Let's discuss your goals.
                    </p>
                    <Link href="/contact" className="inline-block px-10 py-4 bg-white text-black font-bold text-lg rounded-full hover:bg-neon-blue hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-neon">
                        Contact Us Today
                    </Link>
                </div>
            </section>
        </>
    );
}
