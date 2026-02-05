"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";

// Before-After verisi - Gerçek müşteri görselleri
const beforeAfterData = [
    {
        id: 1,
        name: "Ahmet K.",
        duration: "6 ay",
        before: "/before-after/before1.png",
        after: "/before-after/after1.png",
    },
    {
        id: 2,
        name: "Mehmet Y.",
        duration: "8 ay",
        before: "/before-after/before2.png",
        after: "/before-after/after2.png",
    },
    {
        id: 3,
        name: "Ayşe S.",
        duration: "4 ay",
        before: "/before-after/before3.png",
        after: "/before-after/after3.png",
    },
];

// Flip Card Component - GPU accelerated
function FlipCard({
    beforeImage,
    afterImage,
    name,
    duration,
    autoFlipDelay = 4000,
}: {
    beforeImage: string;
    afterImage: string;
    name: string;
    duration: string;
    autoFlipDelay?: number;
}) {
    const [isFlipped, setIsFlipped] = React.useState(false);
    const intervalRef = React.useRef<NodeJS.Timeout | null>(null);

    // Otomatik flip
    React.useEffect(() => {
        intervalRef.current = setInterval(() => {
            setIsFlipped(prev => !prev);
        }, autoFlipDelay);

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [autoFlipDelay]);

    // Tıklandığında flip ve timer'ı sıfırla
    const handleClick = () => {
        setIsFlipped(prev => !prev);

        // Timer'ı sıfırla
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        intervalRef.current = setInterval(() => {
            setIsFlipped(prev => !prev);
        }, autoFlipDelay);
    };

    return (
        <div
            className="cursor-pointer group"
            onClick={handleClick}
            style={{ perspective: "1000px" }}
        >
            <div
                className={cn(
                    "relative w-full aspect-[3/4] transition-transform duration-700 ease-in-out",
                    "transform-style-preserve-3d"
                )}
                style={{
                    transformStyle: "preserve-3d",
                    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
            >
                {/* Front - Before */}
                <div
                    className="absolute inset-0 rounded-2xl overflow-hidden border-2 border-gray-200 bg-white shadow-xl"
                    style={{ backfaceVisibility: "hidden" }}
                >
                    <div className="relative w-full h-full bg-white">
                        <Image
                            src={beforeImage}
                            alt="Öncesi"
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        {/* Öncesi Badge */}
                        <div className="absolute top-4 left-4 px-3 py-1.5 bg-gray-800 text-white text-sm font-semibold rounded-full shadow-lg">
                            Öncesi
                        </div>
                        {/* Flip Hint */}
                        <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-black/60 text-white text-xs rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                            Tıkla ve çevir
                        </div>
                    </div>
                    {/* Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                        <h3 className="text-white font-semibold text-lg">{name}</h3>
                        <p className="text-gray-300 text-sm">{duration} sürede dönüşüm</p>
                    </div>
                </div>

                {/* Back - After */}
                <div
                    className="absolute inset-0 rounded-2xl overflow-hidden border-2 border-[#D4A836] bg-white shadow-xl"
                    style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)"
                    }}
                >
                    <div className="relative w-full h-full bg-white">
                        <Image
                            src={afterImage}
                            alt="Sonrası"
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        {/* Sonrası Badge */}
                        <div className="absolute top-4 left-4 px-3 py-1.5 bg-[#D4A836] text-black text-sm font-semibold rounded-full shadow-lg">
                            Sonrası ✨
                        </div>
                        {/* Flip Hint */}
                        <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-black/60 text-white text-xs rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                            Tıkla ve çevir
                        </div>
                    </div>
                    {/* Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                        <h3 className="text-white font-semibold text-lg">{name}</h3>
                        <p className="text-[#D4A836] text-sm font-medium">{duration} sürede dönüşüm 🎉</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function BeforeAfterSection() {
    return (
        <section className="bg-[#0a0a0a] py-20">
            <div className="max-w-6xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Başarı <span className="text-[#D4A836]">Hikayeleri</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Üyelerimizin dönüşümlerine göz atın. Kartlara tıklayarak öncesi ve sonrasını görün!
                    </p>
                </div>

                {/* Before-After Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {beforeAfterData.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                        >
                            <FlipCard
                                beforeImage={item.before}
                                afterImage={item.after}
                                name={item.name}
                                duration={item.duration}
                                autoFlipDelay={4000 + index * 500} // Farklı zamanlarda dönsünler
                            />
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-12">
                    <a
                        href="tel:+905326699357"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-[#D4A836] text-[#D4A836] font-semibold hover:bg-[#D4A836] hover:text-black transition-all"
                    >
                        Siz de Dönüşümünüzü Başlatın
                    </a>
                </div>
            </div>
        </section>
    );
}
