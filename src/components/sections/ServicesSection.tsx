"use client";

import { MagicCard } from "@/components/ui/MagicCard";
import { Sparkles, Armchair, BedDouble, Blinds } from "lucide-react";
import { motion } from "framer-motion";

const services = [
    {
        title: "Derinlemesine Halı Yıkama",
        description: "ERA 111 şampuanları ile halılarınızın dokusuna zarar vermeden, derinlemesine temizlik ve hijyen.",
        icon: <Sparkles className="w-6 h-6" />,
        // imageUrl: "/images/service-1.jpg" // Placeholder for now
    },
    {
        title: "Koltuk Yıkama",
        description: "Yerinde koltuk yıkama hizmetimizle, koltuklarınız ilk günkü gibi tertemiz ve ferah.",
        icon: <Armchair className="w-6 h-6" />,
    },
    {
        title: "Yorgan & Battaniye",
        description: "Yorgan ve battaniyeleriniz özel makinelerde, hijyenik koşullarda yıkanır ve kurutulur.",
        icon: <BedDouble className="w-6 h-6" />,
    },
    {
        title: "Stor Perde Yıkama",
        description: "Stor perdeleriniz özenle sökülür, temizlenir ve tekrar yerine monte edilir.",
        icon: <Blinds className="w-6 h-6" />,
    },
];

export const ServicesSection = () => {
    return (
        <section className="py-20 px-4 bg-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-64 h-64 bg-trust-blue/5 rounded-full blur-3xl" />
                <div className="absolute bottom-[-10%] left-[-5%] w-64 h-64 bg-action-red/5 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-dark-text mb-4">
                        Hizmetlerimiz
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Sadece temizlemiyoruz, <span className="text-trust-blue font-semibold">yeniliyoruz.</span> En son teknoloji ve profesyonel ekibimizle hizmetinizdeyiz.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <MagicCard
                                title={service.title}
                                description={service.description}
                                icon={service.icon}
                                className="h-full bg-foam-white/50 border-white/60 hover:border-trust-blue/30"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
