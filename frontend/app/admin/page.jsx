"use client";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEdit, FaTrash, FaCheck, FaTimes } from 'react-icons/fa';

export default function AdminDashboard() {
    const [activeTab, setActiveTab] = useState('contacts');
    const [contacts, setContacts] = useState([]);

    // Reviews State
    const [reviews, setReviews] = useState([]);
    const [reviewForm, setReviewForm] = useState({ name: '', rating: 5, review: '', image: '' });
    const [editingReviewId, setEditingReviewId] = useState(null);

    // Services State
    const [services, setServices] = useState([]);
    const [serviceForm, setServiceForm] = useState({ title: '', description: '', icon: 'FaCode', image: '' });
    const [editingServiceId, setEditingServiceId] = useState(null);

    // Auth State
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        if (password === 'admin123') setIsLoggedIn(true);
        else alert('Invalid password');
    };

    useEffect(() => {
        if (isLoggedIn) {
            fetchContacts();
            fetchReviews();
            fetchServices();
        }
    }, [isLoggedIn]);

    const fetchContacts = async () => {
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/contact`);
            setContacts(res.data);
        } catch (err) { console.error(err); }
    };

    // --- REVIEWS LOGIC ---
    const fetchReviews = async () => {
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/reviews`);
            setReviews(res.data);
        } catch (err) { console.error(err); }
    };

    const handleReviewSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editingReviewId) {
                await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/api/reviews/${editingReviewId}`, reviewForm);
                setEditingReviewId(null);
            } else {
                await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/reviews`, reviewForm);
            }
            setReviewForm({ name: '', rating: 5, review: '', image: '' });
            fetchReviews();
        } catch (err) { alert('Error saving review'); }
    };

    const handleDeleteReview = async (id) => {
        if (!window.confirm('Are you sure you want to delete this review?')) return;
        try {
            await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/reviews/${id}`);
            fetchReviews();
        } catch (err) { alert('Error deleting review'); }
    };

    const startEditReview = (review) => {
        setReviewForm({
            name: review.name,
            rating: review.rating,
            review: review.review,
            image: review.image || ''
        });
        setEditingReviewId(review._id);
    };

    const cancelEditReview = () => {
        setReviewForm({ name: '', rating: 5, review: '', image: '' });
        setEditingReviewId(null);
    };


    // --- SERVICES LOGIC ---
    const fetchServices = async () => {
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/services`);
            setServices(res.data);
        } catch (err) { console.error(err); }
    };

    const handleServiceSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editingServiceId) {
                await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/api/services/${editingServiceId}`, serviceForm);
                setEditingServiceId(null);
            } else {
                await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/services`, serviceForm);
            }
            setServiceForm({ title: '', description: '', icon: 'FaCode', image: '' });
            fetchServices();
        } catch (err) { alert('Error saving service'); }
    };

    const handleDeleteService = async (id) => {
        if (!window.confirm('Are you sure you want to delete this service?')) return;
        try {
            await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/services/${id}`);
            fetchServices();
        } catch (err) { alert('Error deleting service'); }
    };

    const startEditService = (service) => {
        setServiceForm({
            title: service.title,
            description: service.description,
            icon: service.icon,
            image: service.image || ''
        });
        setEditingServiceId(service._id);
    };

    const cancelEditService = () => {
        setServiceForm({ title: '', description: '', icon: 'FaCode', image: '' });
        setEditingServiceId(null);
    };

    if (!isLoggedIn) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <form onSubmit={handleLogin} className="glass-card p-10 rounded-2xl border border-white/10">
                    <h2 className="text-2xl font-bold mb-6 text-white text-center">Admin Login</h2>
                    <input
                        type="password"
                        placeholder="Password (admin123)"
                        className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-2 text-white mb-4"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className="w-full bg-royal-blue py-2 rounded-lg text-white font-bold">Login</button>
                </form>
            </div>
        );
    }

    return (
        <div className="min-h-screen py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

                {/* Tabs */}
                <div className="flex space-x-4 mb-8 border-b border-gray-700 pb-1">
                    <button
                        onClick={() => setActiveTab('contacts')}
                        className={`pb-2 px-4 ${activeTab === 'contacts' ? 'text-neon-blue border-b-2 border-neon-blue' : 'text-gray-400'}`}
                    >
                        Contacts
                    </button>
                    <button
                        onClick={() => setActiveTab('reviews')}
                        className={`pb-2 px-4 ${activeTab === 'reviews' ? 'text-neon-blue border-b-2 border-neon-blue' : 'text-gray-400'}`}
                    >
                        Reviews
                    </button>
                    <button
                        onClick={() => setActiveTab('services')}
                        className={`pb-2 px-4 ${activeTab === 'services' ? 'text-neon-blue border-b-2 border-neon-blue' : 'text-gray-400'}`}
                    >
                        Services
                    </button>
                </div>

                {/* --- CONTACTS TAB --- */}
                {activeTab === 'contacts' && (
                    <div>
                        <h2 className="text-xl font-bold mb-4">Lead Submissions</h2>
                        <div className="grid gap-4">
                            {contacts.map((contact) => (
                                <div key={contact._id} className="bg-white/5 p-4 rounded-lg">
                                    <div className="flex justify-between">
                                        <h3 className="font-bold text-white">{contact.name}</h3>
                                        <span className="text-gray-500 text-sm">{new Date(contact.date).toLocaleDateString()}</span>
                                    </div>
                                    <p className="text-royal-blue text-sm">{contact.email} | {contact.phone}</p>
                                    <p className="text-gray-400 text-sm mt-1">Business: {contact.business}</p>
                                    <p className="mt-2 text-gray-300">{contact.message}</p>
                                </div>
                            ))}
                            {contacts.length === 0 && <p className="text-gray-500">No contacts yet.</p>}
                        </div>
                    </div>
                )}

                {/* --- REVIEWS TAB --- */}
                {activeTab === 'reviews' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-xl font-bold">{editingReviewId ? 'Edit Review' : 'Add Review'}</h2>
                                {editingReviewId && (
                                    <button onClick={cancelEditReview} className="text-sm text-gray-400 hover:text-white flex items-center gap-1">
                                        <FaTimes /> Cancel
                                    </button>
                                )}
                            </div>
                            <form onSubmit={handleReviewSubmit} className="space-y-4 bg-white/5 p-6 rounded-lg border border-white/10">
                                <input
                                    type="text" placeholder="Client Name" className="w-full bg-black border border-gray-700 rounded p-2 text-white"
                                    value={reviewForm.name} onChange={(e) => setReviewForm({ ...reviewForm, name: e.target.value })}
                                />
                                <input
                                    type="number" max="5" min="1" placeholder="Rating (1-5)" className="w-full bg-black border border-gray-700 rounded p-2 text-white"
                                    value={reviewForm.rating} onChange={(e) => setReviewForm({ ...reviewForm, rating: e.target.value })}
                                />
                                <textarea
                                    placeholder="Review Text" className="w-full bg-black border border-gray-700 rounded p-2 text-white min-h-[100px]"
                                    value={reviewForm.review} onChange={(e) => setReviewForm({ ...reviewForm, review: e.target.value })}
                                />
                                <input
                                    type="text" placeholder="Image URL (Optional)" className="w-full bg-black border border-gray-700 rounded p-2 text-white"
                                    value={reviewForm.image} onChange={(e) => setReviewForm({ ...reviewForm, image: e.target.value })}
                                />
                                <button className={`text-black font-bold py-2 px-4 rounded w-full transition-colors ${editingReviewId ? 'bg-yellow-500 hover:bg-yellow-400' : 'bg-neon-blue hover:bg-cyan-400'}`}>
                                    {editingReviewId ? 'Update Review' : 'Add Review'}
                                </button>
                            </form>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold mb-4">Existing Reviews</h2>
                            <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                                {reviews.map((r) => (
                                    <div key={r._id} className={`bg-white/5 p-4 rounded-lg border transition-all ${editingReviewId === r._id ? 'border-yellow-500 bg-yellow-500/10' : 'border-transparent hover:border-white/20'}`}>
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h4 className="font-bold">{r.name}</h4>
                                                <span className="text-yellow-400 text-sm">{r.rating} ★</span>
                                            </div>
                                            <div className="flex gap-3">
                                                <button onClick={() => startEditReview(r)} className="text-gray-400 hover:text-yellow-400 transition-colors" title="Edit">
                                                    <FaEdit />
                                                </button>
                                                <button onClick={() => handleDeleteReview(r._id)} className="text-gray-400 hover:text-red-500 transition-colors" title="Delete">
                                                    <FaTrash />
                                                </button>
                                            </div>
                                        </div>
                                        <p className="text-gray-400 text-sm mt-2">{r.review}</p>
                                        {r.image && <img src={r.image} alt={r.name} className="w-10 h-10 rounded-full mt-2 object-cover" />}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* --- SERVICES TAB --- */}
                {activeTab === 'services' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-xl font-bold">{editingServiceId ? 'Edit Service' : 'Add Service'}</h2>
                                {editingServiceId && (
                                    <button onClick={cancelEditService} className="text-sm text-gray-400 hover:text-white flex items-center gap-1">
                                        <FaTimes /> Cancel
                                    </button>
                                )}
                            </div>
                            <form onSubmit={handleServiceSubmit} className="space-y-4 bg-white/5 p-6 rounded-lg border border-white/10">
                                <input
                                    type="text" placeholder="Service Title" className="w-full bg-black border border-gray-700 rounded p-2 text-white"
                                    value={serviceForm.title} onChange={(e) => setServiceForm({ ...serviceForm, title: e.target.value })}
                                />
                                <input
                                    type="text" placeholder="Icon Name (e.g. FaCode)" className="w-full bg-black border border-gray-700 rounded p-2 text-white"
                                    value={serviceForm.icon} onChange={(e) => setServiceForm({ ...serviceForm, icon: e.target.value })}
                                />
                                <textarea
                                    placeholder="Description" className="w-full bg-black border border-gray-700 rounded p-2 text-white min-h-[100px]"
                                    value={serviceForm.description} onChange={(e) => setServiceForm({ ...serviceForm, description: e.target.value })}
                                />
                                <input
                                    type="text" placeholder="Main Image URL (Optional)" className="w-full bg-black border border-gray-700 rounded p-2 text-white"
                                    value={serviceForm.image} onChange={(e) => setServiceForm({ ...serviceForm, image: e.target.value })}
                                />
                                <button className={`text-black font-bold py-2 px-4 rounded w-full transition-colors ${editingServiceId ? 'bg-yellow-500 hover:bg-yellow-400' : 'bg-neon-blue hover:bg-cyan-400'}`}>
                                    {editingServiceId ? 'Update Service' : 'Add Service'}
                                </button>
                            </form>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold mb-4">Existing Services</h2>
                            <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                                {services.map((s) => (
                                    <div key={s._id} className={`bg-white/5 p-4 rounded-lg border transition-all ${editingServiceId === s._id ? 'border-yellow-500 bg-yellow-500/10' : 'border-transparent hover:border-white/20'}`}>
                                        <div className="flex justify-between items-start">
                                            <h4 className="font-bold">{s.title}</h4>
                                            <div className="flex gap-3">
                                                <button onClick={() => startEditService(s)} className="text-gray-400 hover:text-yellow-400 transition-colors" title="Edit">
                                                    <FaEdit />
                                                </button>
                                                <button onClick={() => handleDeleteService(s._id)} className="text-gray-400 hover:text-red-500 transition-colors" title="Delete">
                                                    <FaTrash />
                                                </button>
                                            </div>
                                        </div>
                                        <p className="text-gray-400 text-sm mt-1">{s.description}</p>
                                        <div className="text-xs text-royal-blue mt-2 flex items-center gap-2">
                                            <span>Icon: {s.icon}</span>
                                            {s.image && <span>• Has Image</span>}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}
