"use client";

import { motion } from "framer-motion";

export const HeroSection = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-foam-white">
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover"
                >
                    <source src="/videos/hero-bg.mp4" type="video/mp4" />
                </video>
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4 pt-20">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-6xl font-bold text-white mb-4"
                >
                    Halılarınızda <span className="text-trust-blue italic">Best</span> Temizlik,{" "}
                    <span className="text-trust-blue italic">Best</span> Hijyen.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl"
                >
                    Giresun ve Bulancak'ın en profesyonel temizlik merkezi. ERA 111 teknolojisiyle
                    derinlemesine hijyen.
                </motion.p>

                <motion.a
                    href="tel:04543185222"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-action-red text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-red-600 transition-colors shadow-lg hover:shadow-xl inline-block"
                >
                    Hemen Ara & Fiyat Al (0454 318 52 22)
                </motion.a>
            </div>
        </section>
    );
};
