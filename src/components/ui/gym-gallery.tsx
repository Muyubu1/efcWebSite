"use client";

import { useState, useEffect } from "react";

// Salon görselleri galerisi
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
    const [isMobile, setIsMobile] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        // Mobil cihaz kontrolü
        const checkMobile = () => {
            setIsMobile(window.matchMedia("(hover: none) and (pointer: coarse)").matches);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Mobilde tıklama ile toggle
    const handleClick = (idx: number) => {
        if (isMobile) {
            setActiveIndex(activeIndex === idx ? null : idx);
        }
    };

    // Masaüstünde hover ile aç
    const handleMouseEnter = (idx: number) => {
        if (!isMobile) {
            setActiveIndex(idx);
        }
    };

    // Masaüstünde hover bitince kapat
    const handleMouseLeave = () => {
        if (!isMobile) {
            setActiveIndex(null);
        }
    };

    // Hydration uyumsuzluğunu önlemek için mount kontrolü
    if (!isMounted) {
        return (
            <section id="galeri" className="w-full bg-[#0a0a0a] py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="max-w-3xl text-center mx-auto mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            Salonumuza <span className="text-[#D4A836]">Göz Atın</span>
                        </h2>
                        <p className="text-gray-400 mt-4">
                            Modern ekipmanlarımız ve ferah ortamımızla spor yapmaktan keyif alacaksınız
                        </p>
                    </div>
                    <div className="flex items-center gap-2 h-[300px] md:h-[400px] w-full">
                        {GYM_GALLERY_IMAGES.map((src, idx) => (
                            <div
                                key={idx}
                                className="relative flex-1 rounded-xl overflow-hidden h-full"
                            >
                                <img
                                    className="h-full w-full object-cover object-center"
                                    src={src}
                                    alt={`Spor salonu görünümü ${idx + 1}`}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

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

                {/* Gallery Grid - Web: hover ile genişle, Mobil: tıkla genişle */}
                <div className="flex items-center gap-2 h-[300px] md:h-[400px] w-full">
                    {GYM_GALLERY_IMAGES.map((src, idx) => {
                        const isActive = activeIndex === idx;
                        return (
                            <div
                                key={idx}
                                onClick={() => handleClick(idx)}
                                onMouseEnter={() => handleMouseEnter(idx)}
                                onMouseLeave={handleMouseLeave}
                                style={{
                                    flex: isActive ? 10 : 1,
                                    transition: "flex 0.5s ease-in-out",
                                }}
                                className="relative rounded-xl overflow-hidden h-full cursor-pointer"
                            >
                                <img
                                    className="h-full w-full object-cover object-center transition-transform duration-500"
                                    style={{
                                        transform: isActive ? "scale(1.05)" : "scale(1)",
                                    }}
                                    src={src}
                                    alt={`Spor salonu görünümü ${idx + 1}`}
                                />
                                {/* Gradient Overlay - aktif olunca görünür */}
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300"
                                    style={{ opacity: isActive ? 1 : 0 }}
                                />
                                {/* Altın Border - aktif olunca görünür */}
                                <div
                                    className="absolute inset-0 rounded-xl border-2 transition-all duration-300 pointer-events-none"
                                    style={{
                                        borderColor: isActive ? "rgba(212, 168, 54, 0.5)" : "transparent",
                                    }}
                                />
                            </div>
                        );
                    })}
                </div>

                {/* Mobil için açıklama */}
                {isMobile && (
                    <p className="text-center text-gray-500 text-sm mt-4">
                        Görsele dokunarak büyütebilirsiniz
                    </p>
                )}
            </div>
        </section>
    );
}
