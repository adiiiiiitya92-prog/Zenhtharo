import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./globals.css";

export const metadata = {
    title: "ZenHtharo | Digital Marketing Agency",
    description: "ZenHtharo is a performance-driven digital marketing agency specializing in SEO, Social Media, and Web Development.",
    openGraph: {
        title: "ZenHtharo | Elevate Your Digital Presence",
        description: "Expert digital marketing services to grow your brand.",
        type: "website",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="bg-dark-bg text-white selection:bg-neon-blue selection:text-black">
                <Navbar />
                <main className="min-h-screen pt-20">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
