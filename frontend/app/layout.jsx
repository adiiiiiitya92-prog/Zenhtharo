import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./globals.css";

export const metadata = {
    title: {
        default: "Zentharo | Digital Marketing & Web Development Agency",
        template: "%s | Zentharo"
    },
    description: "Zentharo is a premier digital marketing agency specializing in SEO, Social Media Marketing, Web Development, and Performance Growth. Elevate your brand today.",
    keywords: ["Digital Marketing", "SEO", "Web Development", "Social Media Marketing", "Zentharo", "Marketing Agency", "Growth Hacking"],
    openGraph: {
        title: "Zentharo | Elevate Your Digital Presence",
        description: "Expert digital marketing services to grow your brand. SEO, Web Dev, and detailed analytics.",
        url: "https://zentharo-backend.onrender.com",
        siteName: "Zentharo",
        type: "website",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "Zentharo | Digital Marketing Agency",
        description: "Transform your digital presence with Zentharo.",
    },
    robots: {
        index: true,
        follow: true,
    }
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
