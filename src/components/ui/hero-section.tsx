"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Spor salonu temalı stock görseller
const GYM_IMAGES = [
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=800&fit=crop",
    "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&h=800&fit=crop",
    "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&h=800&fit=crop",
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=800&fit=crop",
    "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&h=800&fit=crop",
    "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=600&h=800&fit=crop",
    "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=600&h=800&fit=crop",
    "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=800&fit=crop",
];

export function HeroSection() {
    const FADE_IN_VARIANTS = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
    };

    const duplicatedImages = [...GYM_IMAGES, ...GYM_IMAGES];

    return (
        <section
            id="hero"
            className={cn(
                "relative w-full min-h-screen overflow-hidden bg-black flex flex-col items-center justify-center text-center px-4 pt-24"
            )}
        >
            {/* Background Logo Watermark */}
            <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
                <motion.img
                    src="/logo.svg"
                    alt=""
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.25, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="w-[400px] md:w-[600px] lg:w-[800px] h-auto -mt-20"
                />
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black z-[1]" />

            {/* Content */}
            <div className="z-10 flex flex-col items-center max-w-4xl">
                {/* Tagline */}
                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={FADE_IN_VARIANTS}
                    className="mb-6 inline-block rounded-full border border-[#D4A836]/50 bg-[#D4A836]/10 px-6 py-2 text-sm font-medium text-[#D4A836] backdrop-blur-sm"
                >
                    2018'den beri güçlü bir topluluk
                </motion.div>

                {/* Main Title */}
                <motion.h1
                    initial="hidden"
                    animate="show"
                    variants={{
                        hidden: {},
                        show: {
                            transition: {
                                staggerChildren: 0.1,
                            },
                        },
                    }}
                    className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight"
                >
                    <motion.span variants={FADE_IN_VARIANTS} className="inline-block">
                        Güçlü Ol,{" "}
                    </motion.span>
                    <motion.span variants={FADE_IN_VARIANTS} className="inline-block text-[#D4A836]">
                        Sağlıklı Kal
                    </motion.span>
                </motion.h1>

                {/* Description */}
                <motion.p
                    initial="hidden"
                    animate="show"
                    variants={FADE_IN_VARIANTS}
                    transition={{ delay: 0.4 }}
                    className="mt-6 max-w-2xl text-lg sm:text-xl text-gray-400"
                >
                    Profesyonel eğitmenlerimiz eşliğinde hedeflerinize ulaşın.
                    Modern ekipmanlar, grup dersleri ve kişiye özel antrenman programları ile
                    sağlıklı yaşamın kapılarını aralayın.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={FADE_IN_VARIANTS}
                    transition={{ delay: 0.5 }}
                    className="mt-8 flex flex-col sm:flex-row gap-4"
                >
                    <motion.a
                        href="tel:+905326699357"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 rounded-full bg-[#D4A836] text-black font-semibold text-lg shadow-lg shadow-[#D4A836]/30 transition-all hover:bg-[#E6B93D] focus:outline-none focus:ring-2 focus:ring-[#D4A836] focus:ring-opacity-75"
                    >
                        Ücretsiz Deneme Dersi
                    </motion.a>
                    <motion.a
                        href="#fiyatlar"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 rounded-full border-2 border-[#D4A836]/50 text-white font-semibold text-lg transition-all hover:border-[#D4A836] hover:bg-[#D4A836]/10"
                    >
                        Fiyatları Gör
                    </motion.a>
                </motion.div>
            </div>

            {/* Animated Image Marquee */}
            <div className="absolute bottom-0 left-0 w-full h-1/3 md:h-2/5 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]">
                <motion.div
                    className="flex gap-4"
                    animate={{
                        x: ["-100%", "0%"],
                        transition: {
                            ease: "linear",
                            duration: 40,
                            repeat: Infinity,
                        },
                    }}
                >
                    {duplicatedImages.map((src, index) => (
                        <div
                            key={index}
                            className="relative aspect-[3/4] h-48 md:h-64 flex-shrink-0"
                            style={{
                                rotate: `${(index % 2 === 0 ? -3 : 3)}deg`,
                            }}
                        >
                            <img
                                src={src}
                                alt={`Spor salonu görsel ${index + 1}`}
                                className="w-full h-full object-cover rounded-2xl shadow-lg border border-[#D4A836]/20"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
