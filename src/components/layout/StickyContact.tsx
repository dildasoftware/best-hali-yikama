"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

export const StickyContact = () => {
    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
            {/* WhatsApp Button */}
            <motion.a
                href="https://wa.me/904543185222"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 hover:shadow-xl transition-colors flex items-center justify-center"
            >
                <MessageCircle className="w-6 h-6" />
            </motion.a>

            {/* Call Button */}
            <motion.a
                href="tel:04543185222"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-action-red text-white p-4 rounded-full shadow-lg hover:bg-red-600 hover:shadow-xl transition-colors flex items-center justify-center animate-pulse"
            >
                <Phone className="w-6 h-6" />
            </motion.a>
        </div>
    );
};
