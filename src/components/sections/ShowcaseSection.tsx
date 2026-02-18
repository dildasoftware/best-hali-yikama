"use client";

import { MagicCard } from "@/components/ui/MagicCard";
import { motion } from "framer-motion";

export const ShowcaseSection = () => {
    return (
        <section className="py-20 px-4 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-dark-text mb-4">
                        Gerçek Sonuçlar
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Sözde değil, gözle görülür temizlik. İşte müşterilerimizin memnuniyetini kazanan işlerimizden bazıları.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Video Showcase Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="row-span-2 col-span-1 md:col-span-2 lg:col-span-2 relative rounded-3xl overflow-hidden shadow-2xl h-[500px]"
                    >
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover"
                        >
                            <source src="/videos/hero-bg.mp4" type="video/mp4" />
                        </video>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
                            <div>
                                <h3 className="text-white text-2xl font-bold mb-2">Derinlemesine Temizlik Teknolojisi</h3>
                                <p className="text-gray-200">Köpüklü yıkama sistemimizle halılarınızın en derin noktalarına ulaşıyoruz.</p>
                            </div>
                        </div>
                        {/* Play Button Overlay (Optional visual cue) */}
                        <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full">
                            <span className="text-white text-xs font-bold px-2">CANLI İZLE</span>
                        </div>
                    </motion.div>

                    {/* Sofa Cleaning Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -8 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="relative rounded-2xl overflow-hidden shadow-xl h-[240px] cursor-pointer"
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-105"
                            style={{ backgroundImage: "url('/images/sofa-wash-ai.jpg')" }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 p-5 z-10">
                            <h3 className="text-white text-xl font-bold mb-1">Koltuk Yıkama</h3>
                            <p className="text-gray-200 text-sm">Lekelere karşı %100 etkili çözüm.</p>
                        </div>
                    </motion.div>

                    {/* Zorlu Lekeler Image Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -8 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="relative rounded-2xl overflow-hidden shadow-xl h-[240px] cursor-pointer"
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-105"
                            style={{ backgroundImage: "url('/images/carpet-dirty.jpg')" }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 p-5 z-10">
                            <h3 className="text-white text-xl font-bold mb-1">Zorlu Lekeler</h3>
                            <p className="text-gray-200 text-sm">Çamur, kahve, yağ... Hiçbiri sorun değil.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
