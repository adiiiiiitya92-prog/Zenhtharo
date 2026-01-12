/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                'royal-blue': '#4169e1',
                'neon-blue': '#00cbd6', // Slightly cyan for correct neon look
                'dark-bg': '#0a0a0a',
                'card-bg': '#111111',
            },
            boxShadow: {
                'neon': '0 0 10px rgba(0, 203, 214, 0.5), 0 0 20px rgba(0, 203, 214, 0.3)',
                'neon-hover': '0 0 20px rgba(0, 203, 214, 0.8), 0 0 40px rgba(0, 203, 214, 0.5)',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #4169e1 0deg, #00cbd6 180deg, #4169e1 360deg)',
            },
        },
    },
    plugins: [],
};
