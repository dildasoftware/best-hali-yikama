"use client";

import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";
import { motion } from "framer-motion";

interface MagicSliderProps {
    beforeImage: string;
    afterImage: string;
    label?: string;
}

export const MagicSlider = ({ beforeImage, afterImage, label = "Sihirli Dokunuş" }: MagicSliderProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50"
        >
            <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 bg-black/50 text-white px-4 py-1 rounded-full text-sm backdrop-blur-sm font-semibold">
                {label}
            </div>

            <ReactCompareSlider
                itemOne={<ReactCompareSliderImage src={beforeImage} alt="Kirli Halı" />}
                itemTwo={<ReactCompareSliderImage src={afterImage} alt="Temiz Halı" />}
                className="h-[400px] md:h-[600px] w-full"
                style={{ height: "400px" }} // Default height fallback
            />

            <div className="absolute bottom-4 left-4 z-10 bg-red-600/80 text-white px-3 py-1 rounded text-xs font-bold">ÖNCESİ</div>
            <div className="absolute bottom-4 right-4 z-10 bg-green-600/80 text-white px-3 py-1 rounded text-xs font-bold">SONRASI</div>
        </motion.div>
    );
};
