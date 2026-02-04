"use client";

import React from "react";
import { Dumbbell, Users, Heart, Timer, Award, Sparkles } from "lucide-react";

// feature.md template'ine göre - Hizmetler bölümü
const services = [
    {
        title: "Fitness & Ağırlık Antrenmanı",
        description: "Modern ekipmanlarla kişiye özel ağırlık ve dayanıklılık antrenmanları",
        icon: Dumbbell,
        meta: "Fitness"
    },
    {
        title: "Kadınlara Özel Grup Dersleri",
        description: "Pilates, yoga ve aerobik dersleri ile formda kalın",
        icon: Users,
        meta: "Grup"
    },
    {
        title: "Kardiyo & Kondisyon",
        description: "Profesyonel kardiyo ekipmanları ile yağ yakımı ve kondisyon geliştirme",
        icon: Heart,
        meta: "Kardiyo"
    },
    {
        title: "Kişisel Antrenman",
        description: "Deneyimli antrenörlerimizle birebir özel antrenman seansları",
        icon: Timer,
        meta: "PT"
    },
    {
        title: "Beslenme Danışmanlığı",
        description: "Hedeflerinize uygun kişiselleştirilmiş beslenme programları",
        icon: Sparkles,
        meta: "Diyet"
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
    meta
}: {
    span?: string;
    title: string;
    description: string;
    icon: React.ElementType;
    meta: string;
}) {
    return (
        <article
            className={`group relative overflow-hidden rounded-2xl border border-[#D4A836]/20 bg-black/40 p-6 transition-all duration-300 hover:border-[#D4A836]/50 hover:bg-black/60 ${span}`}
        >
            <header className="mb-4 flex items-start justify-between">
                <div className="p-3 rounded-xl bg-[#D4A836]/10 text-[#D4A836]">
                    <Icon className="w-6 h-6" />
                </div>
                {meta && (
                    <span className="rounded-full border border-[#D4A836]/30 bg-[#D4A836]/10 px-3 py-1 text-[10px] uppercase tracking-wide text-[#D4A836]">
                        {meta}
                    </span>
                )}
            </header>
            <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                {title}
            </h3>
            <p className="text-sm text-gray-400">{description}</p>

            {/* Hover glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#D4A836]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
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
                        />
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-12 text-center">
                    <a
                        href="tel:+905326699357"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#D4A836] text-black font-semibold text-lg hover:bg-[#E6B93D] transition-colors"
                    >
                        <Award className="w-5 h-5" />
                        Ücretsiz Deneme Dersi Al
                    </a>
                </div>
            </div>
        </section>
    );
}
