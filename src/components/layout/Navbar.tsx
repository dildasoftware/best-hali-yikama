"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";

const navLinks = [
    { label: "Ana Sayfa", href: "#hero" },
    { label: "Sihirli Dokunuş", href: "#magic" },
    { label: "Galeri", href: "#showcase" },
    { label: "Hizmetler", href: "#services" },
    { label: "İletişim", href: "#footer" },
];

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (href: string) => {
        setMenuOpen(false);
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? "bg-white/95 backdrop-blur-md shadow-lg"
                    : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                {/* Logo / Marka */}
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() => handleNavClick("#hero")}
                >
                    <div className="flex flex-col leading-tight">
                        <span className={`text-xl font-black tracking-tight transition-colors ${scrolled ? "text-trust-blue" : "text-white"}`}>
                            best
                        </span>
                        <span className={`text-xs font-semibold -mt-1 transition-colors ${scrolled ? "text-action-red" : "text-red-300"}`}>
                            HALI YIKAMA
                        </span>
                    </div>
                </motion.div>

                {/* Desktop Nav Links */}
                <nav className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <button
                            key={link.href}
                            onClick={() => handleNavClick(link.href)}
                            className={`text-sm font-medium transition-colors hover:text-trust-blue ${scrolled ? "text-dark-text" : "text-white/90"
                                }`}
                        >
                            {link.label}
                        </button>
                    ))}
                </nav>

                {/* CTA Button */}
                <motion.a
                    href="tel:04543185222"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="hidden md:flex items-center gap-2 bg-action-red text-white px-4 py-2 rounded-full text-sm font-semibold shadow hover:bg-red-600 transition-colors"
                >
                    <Phone className="w-4 h-4" />
                    0454 318 52 22
                </motion.a>

                {/* Mobile Menu Button */}
                <button
                    className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? "text-dark-text" : "text-white"}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Menüyü Aç"
                >
                    {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-gray-100 shadow-lg"
                    >
                        <div className="px-4 py-4 flex flex-col gap-3">
                            {navLinks.map((link) => (
                                <button
                                    key={link.href}
                                    onClick={() => handleNavClick(link.href)}
                                    className="text-left text-dark-text font-medium py-2 border-b border-gray-100 hover:text-trust-blue transition-colors"
                                >
                                    {link.label}
                                </button>
                            ))}
                            <a
                                href="tel:04543185222"
                                className="flex items-center justify-center gap-2 bg-action-red text-white px-4 py-3 rounded-full font-semibold mt-2"
                            >
                                <Phone className="w-4 h-4" />
                                Hemen Ara: 0454 318 52 22
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};
