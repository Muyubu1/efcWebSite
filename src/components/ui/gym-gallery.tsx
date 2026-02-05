"use client";

import { useState, useEffect } from "react";

// heroAltına.md template'ine göre - Salon görselleri galerisi
const GYM_GALLERY_IMAGES = [
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&h=800&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&h=800&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&h=800&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&h=800&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&h=800&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&h=800&w=800&auto=format&fit=crop",
];

export function GymGallery() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Mobilde tıklama ile toggle
    const handleClick = (idx: number) => {
        // Sadece touch cihazlarda tıklama ile çalışsın
        if (window.matchMedia("(hover: none)").matches) {
            setActiveIndex(activeIndex === idx ? null : idx);
        }
    };

    // Masaüstünde hover ile aç
    const handleMouseEnter = (idx: number) => {
        if (window.matchMedia("(hover: hover)").matches) {
            setActiveIndex(idx);
        }
    };

    // Masaüstünde hover bitince kapat
    const handleMouseLeave = () => {
        if (window.matchMedia("(hover: hover)").matches) {
            setActiveIndex(null);
        }
    };

    return (
        <section id="galeri" className="w-full bg-[#0a0a0a] py-20">
            <div className="max-w-6xl mx-auto px-4">
                {/* Header */}
                <div className="max-w-3xl text-center mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Salonumuza <span className="text-[#D4A836]">Göz Atın</span>
                    </h2>
                    <p className="text-gray-400 mt-4">
                        Modern ekipmanlarımız ve ferah ortamımızla spor yapmaktan keyif alacaksınız
                    </p>
                </div>

                {/* Gallery Grid */}
                <div className="flex items-center gap-2 h-[300px] md:h-[400px] w-full">
                    {GYM_GALLERY_IMAGES.map((src, idx) => {
                        const isActive = isMounted && activeIndex === idx;
                        return (
                            <div
                                key={idx}
                                onClick={() => handleClick(idx)}
                                onMouseEnter={() => handleMouseEnter(idx)}
                                onMouseLeave={handleMouseLeave}
                                className={`relative group flex-grow transition-all rounded-xl overflow-hidden h-full duration-500 cursor-pointer ${isActive ? "flex-[10]" : "flex-1"
                                    }`}
                            >
                                <img
                                    className={`h-full w-full object-cover object-center transition-transform duration-500 ${isActive ? "scale-110" : ""
                                        }`}
                                    src={src}
                                    alt={`Spor salonu görünümü ${idx + 1}`}
                                />
                                {/* Overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-0"
                                    }`} />
                                {/* Border */}
                                <div className={`absolute inset-0 border-2 rounded-xl transition-all duration-300 ${isActive ? "border-[#D4A836]/50" : "border-[#D4A836]/0"
                                    }`} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
