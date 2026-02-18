"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface MagicCardProps {
    title: string;
    description: string;
    icon?: React.ReactNode;
    imageUrl?: string;
    className?: string;
    onClick?: () => void;
}

export const MagicCard = ({
    title,
    description,
    icon,
    imageUrl,
    className,
    onClick,
}: MagicCardProps) => {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={onClick}
            className={cn(
                "group relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-md shadow-lg transition-all hover:bg-white/20 hover:shadow-2xl cursor-pointer",
                className
            )}
        >
            {/* Background Image Effect */}
            {imageUrl && (
                <div
                    className="absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-20"
                    style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                />
            )}

            <div className="relative z-10 flex flex-col gap-4">
                {icon && (
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-trust-blue/10 text-trust-blue transition-colors group-hover:bg-trust-blue group-hover:text-white">
                        {icon}
                    </div>
                )}

                <div>
                    <h3 className="mb-2 text-xl font-bold text-dark-text group-hover:text-trust-blue transition-colors">
                        {title}
                    </h3>
                    <p className="text-sm text-gray-600 group-hover:text-gray-800">
                        {description}
                    </p>
                </div>
            </div>

            {/* Shine Effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </motion.div>
    );
};
