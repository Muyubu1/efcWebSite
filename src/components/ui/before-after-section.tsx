"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { ChevronUp, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

// Before-After verisi (dikey format)
const beforeAfterData = [
    {
        id: 1,
        name: "Ahmet K.",
        duration: "6 ay",
        before: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=600&fit=crop",
        after: "https://images.unsplash.com/photo-1583454155184-870a1f63be09?w=400&h=600&fit=crop",
    },
    {
        id: 2,
        name: "Mehmet Y.",
        duration: "8 ay",
        before: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=600&fit=crop",
        after: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=600&fit=crop",
    },
    {
        id: 3,
        name: "Ayşe S.",
        duration: "4 ay",
        before: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=600&fit=crop",
        after: "https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?w=400&h=600&fit=crop",
    },
];

// Dikey slider component
function VerticalComparisonSlider({
    beforeImage,
    afterImage,
    className,
}: {
    beforeImage: string;
    afterImage: string;
    className?: string;
}) {
    const [sliderPosition, setSliderPosition] = React.useState(50);
    const [isDragging, setIsDragging] = React.useState(false);
    const containerRef = React.useRef<HTMLDivElement>(null);
    const autoAnimateRef = React.useRef<NodeJS.Timeout | null>(null);

    // Otomatik animasyon
    React.useEffect(() => {
        let direction = 1;
        autoAnimateRef.current = setInterval(() => {
            if (!isDragging) {
                setSliderPosition((prev) => {
                    if (prev >= 80) direction = -1;
                    if (prev <= 20) direction = 1;
                    return prev + direction * 0.5;
                });
            }
        }, 50);

        return () => {
            if (autoAnimateRef.current) clearInterval(autoAnimateRef.current);
        };
    }, [isDragging]);

    const handleMove = (clientY: number) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const y = clientY - rect.top;
        let newPosition = (y / rect.height) * 100;
        newPosition = Math.max(5, Math.min(95, newPosition));
        setSliderPosition(newPosition);
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (!isDragging) return;
        handleMove(e.clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
        if (!isDragging) return;
        handleMove(e.touches[0].clientY);
    };

    React.useEffect(() => {
        if (isDragging) {
            document.addEventListener("mousemove", handleMouseMove);
            document.addEventListener("touchmove", handleTouchMove);
            document.addEventListener("mouseup", () => setIsDragging(false));
            document.addEventListener("touchend", () => setIsDragging(false));
        }
        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("touchmove", handleTouchMove);
        };
    }, [isDragging]);

    return (
        <div
            ref={containerRef}
            className={cn("relative overflow-hidden select-none group cursor-ns-resize", className)}
            onMouseDown={() => setIsDragging(true)}
            onTouchStart={() => setIsDragging(true)}
        >
            {/* After Image (bottom layer) */}
            <img
                src={afterImage}
                alt="Sonrası"
                className="absolute inset-0 w-full h-full object-cover"
                draggable={false}
            />

            {/* Before Image (top layer, clipped) */}
            <div
                className="absolute inset-0 w-full h-full overflow-hidden"
                style={{ clipPath: `polygon(0 0, 100% 0, 100% ${sliderPosition}%, 0 ${sliderPosition}%)` }}
            >
                <img
                    src={beforeImage}
                    alt="Öncesi"
                    className="w-full h-full object-cover"
                    draggable={false}
                />
                {/* Before label */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 rounded-full text-xs text-white font-medium">
                    Öncesi
                </div>
            </div>

            {/* After label */}
            <div className="absolute bottom-4 left-4 px-3 py-1 bg-[#D4A836]/80 rounded-full text-xs text-black font-medium">
                Sonrası
            </div>

            {/* Slider Handle */}
            <div
                className="absolute left-0 w-full h-1 bg-[#D4A836]"
                style={{ top: `calc(${sliderPosition}% - 2px)` }}
            >
                <div
                    className={cn(
                        "absolute left-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 flex items-center justify-center rounded-full bg-[#D4A836] shadow-lg",
                        "transition-transform duration-200",
                        isDragging && "scale-110"
                    )}
                >
                    <div className="flex flex-col items-center text-black">
                        <ChevronUp className="h-4 w-4 -mb-1" />
                        <ChevronDown className="h-4 w-4 -mt-1" />
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
                        Üyelerimizin dönüşümlerine göz atın. Sizin hikayeniz de burada olabilir!
                    </p>
                </div>

                {/* Before-After Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {beforeAfterData.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="rounded-2xl overflow-hidden border border-[#D4A836]/20 bg-black/40">
                                {/* Slider */}
                                <VerticalComparisonSlider
                                    beforeImage={item.before}
                                    afterImage={item.after}
                                    className="aspect-[3/4] rounded-t-2xl"
                                />

                                {/* Info */}
                                <div className="p-4 text-center">
                                    <h3 className="text-white font-semibold">{item.name}</h3>
                                    <p className="text-[#D4A836] text-sm">{item.duration} sürede</p>
                                </div>
                            </div>
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
