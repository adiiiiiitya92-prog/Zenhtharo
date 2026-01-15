"use client";
import { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import axios from 'axios';
import { motion } from 'framer-motion';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const res = await axios.get('https://zentharo-backend.onrender.com/api/reviews');
                setReviews(res.data);
            } catch (error) {
                console.error("Error fetching reviews", error);
                // Fallback or empty state
                setReviews([
                    { _id: '1', name: 'John Doe', rating: 5, review: 'Amazing service! Zentharo transformed our online presence.', date: new Date() },
                    { _id: '2', name: 'Jane Smith', rating: 5, review: 'Professional and results-driven. Highly recommend.', date: new Date() },
                    { _id: '3', name: 'Tech Corp', rating: 4, review: 'Great SEO results within months.', date: new Date() },
                ]);
            } finally {
                setLoading(false);
            }
        };

        fetchReviews();
    }, []);

    // Duplicate reviews for infinite scroll effect
    const carouselReviews = [...reviews, ...reviews, ...reviews];

    return (
        <section className="py-20 bg-black relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-neon-blue/10 rounded-full blur-[100px] opacity-30 z-0"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12">
                <div className="text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-4"
                    >
                        Client <span className="text-neon-blue">Testimonials</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400"
                    >
                        See what our partners say about us.
                    </motion.p>
                </div>
            </div>

            {loading ? (
                <div className="text-center text-white">Loading...</div>
            ) : (
                <div className="relative w-full overflow-hidden">
                    {/* Gradient Masks */}
                    <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-black to-transparent z-10"></div>
                    <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-black to-transparent z-10"></div>

                    <motion.div
                        className="flex gap-8 w-max px-4"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 40,
                            ease: "linear",
                        }}
                    >
                        {[...reviews, ...reviews, ...reviews, ...reviews].map((review, index) => (
                            <motion.div
                                key={`${review._id}-${index}`}
                                className="glass-card p-6 rounded-2xl border-l-4 border-royal-blue w-[350px] flex-shrink-0 cursor-pointer"
                                whileHover={{ scale: 1.05, y: -10, borderColor: '#00cbd6', boxShadow: '0 0 20px rgba(0, 203, 214, 0.2)' }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="flex mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} className={i < review.rating ? "text-yellow-400" : "text-gray-600"} />
                                    ))}
                                </div>
                                <p className="text-gray-300 italic mb-6 line-clamp-4">"{review.review}"</p>
                                <div>
                                    <h4 className="font-bold text-white text-lg">{review.name}</h4>
                                    <span className="text-gray-500 text-xs">{new Date(review.date).toLocaleDateString()}</span>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            )}
        </section>
    );
};

export default Reviews;
