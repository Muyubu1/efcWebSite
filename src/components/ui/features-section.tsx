"use client";

import React from "react";
import Image from "next/image";
import { Dumbbell, Users, Heart, Timer, Award, Sparkles } from "lucide-react";

// feature.md template'ine göre - Hizmetler bölümü
const services = [
    {
        title: "Fitness & Ağırlık Antrenmanı",
        description: "Modern ekipmanlarla kişiye özel ağırlık ve dayanıklılık antrenmanları",
        icon: Dumbbell,
        meta: "Fitness",
        image: "/images/services/fitness.png"
    },
    {
        title: "Kadınlara Özel Grup Dersleri",
        description: "Pilates, yoga ve aerobik dersleri ile formda kalın",
        icon: Users,
        meta: "Grup",
        image: "/images/services/group.png"
    },
    {
        title: "Kardiyo & Kondisyon",
        description: "Profesyonel kardiyo ekipmanları ile yağ yakımı ve kondisyon geliştirme",
        icon: Heart,
        meta: "Kardiyo",
        image: "/images/services/cardio.png"
    },
    {
        title: "Kişisel Antrenman",
        description: "Deneyimli antrenörlerimizle birebir özel antrenman seansları",
        icon: Timer,
        meta: "PT",
        image: "/images/services/personal.png"
    },
    {
        title: "Beslenme Danışmanlığı",
        description: "Hedeflerinize uygun kişiselleştirilmiş beslenme programları",
        icon: Sparkles,
        meta: "Diyet",
        image: "/images/services/nutrition.png"
    },
];

const spans = [
    "md:col-span-4 md:row-span-2",
    "md:col-span-2 md:row-span-1",
    "md:col-span-2 md:row-span-1",
    "md:col-span-3 md:row-span-1",
    "md:col-span-3 md:row-span-1",
];

function BentoCard({
    span = "",
    title,
    description,
    icon: Icon,
    meta,
    image
}: {
    span?: string;
    title: string;
    description: string;
    icon: React.ElementType;
    meta: string;
    image: string;
}) {
    return (
        <article
            className={`group relative overflow-hidden rounded-2xl border border-[#D4A836]/20 p-6 transition-all duration-300 hover:border-[#D4A836]/50 ${span}`}
        >
            {/* Background Image */}
            <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
            />

            {/* Dark Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/50 transition-all duration-300 group-hover:from-black/95 group-hover:via-black/75 group-hover:to-black/60" />

            {/* Content */}
            <div className="relative z-10">
                <header className="mb-4 flex items-start justify-between">
                    <div className="p-3 rounded-xl bg-[#D4A836]/20 backdrop-blur-sm text-[#D4A836] border border-[#D4A836]/30">
                        <Icon className="w-6 h-6" />
                    </div>
                    {meta && (
                        <span className="rounded-full border border-[#D4A836]/40 bg-[#D4A836]/20 backdrop-blur-sm px-3 py-1 text-[10px] uppercase tracking-wide text-[#D4A836] font-semibold">
                            {meta}
                        </span>
                    )}
                </header>
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 drop-shadow-lg">
                    {title}
                </h3>
                <p className="text-sm text-gray-200 drop-shadow-md">{description}</p>
            </div>

            {/* Hover glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#D4A836]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20" />
        </article>
    );
}

export function FeaturesSection() {
    return (
        <section id="hizmetler" className="min-h-screen w-full relative bg-black py-20">
            {/* Background gradient */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    background: "radial-gradient(ellipse at 50% 0%, #D4A836/10 0%, transparent 50%)",
                }}
            />

            <div className="relative mx-auto max-w-6xl px-4">
                {/* Header */}
                <header className="mb-12 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white">
                        Hizmetlerimiz
                    </h2>
                    <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                        Profesyonel ekibimiz ve modern ekipmanlarımızla size en iyi spor deneyimini sunuyoruz
                    </p>
                </header>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-6 auto-rows-[minmax(150px,auto)]">
                    {services.map((service, i) => (
                        <BentoCard
                            key={i}
                            span={spans[i]}
                            title={service.title}
                            description={service.description}
                            icon={service.icon}
                            meta={service.meta}
                            image={service.image}
                        />
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-12 text-center">
                    <a
                        href="#fiyatlar"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#D4A836] text-black font-semibold text-lg hover:bg-[#E6B93D] transition-colors"
                    >
                        <Award className="w-5 h-5" />
                        Hemen Üye Ol
                    </a>
                </div>
            </div>
        </section>
    );
}
