"use client";

import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

// PricingCards.md template'ine göre - Üyelik paketleri
const plans = [
    {
        name: "Aylık",
        price: "₺1.500",
        period: "/ay",
        features: [
            "Tüm ekipmanlara erişim",
            "Soyunma odası kullanımı",
            "Grup derslerine katılım",
        ],
        isPopular: false,
        rotation: -3,
    },
    {
        name: "3 Aylık",
        price: "₺3.900",
        period: "/3 ay",
        features: [
            "Tüm ekipmanlara erişim",
            "Soyunma odası kullanımı",
            "Grup derslerine katılım",
            "1 Kişisel antrenman seansı",
        ],
        isPopular: false,
        rotation: -1,
    },
    {
        name: "6 Aylık",
        price: "₺6.900",
        period: "/6 ay",
        features: [
            "Tüm ekipmanlara erişim",
            "Soyunma odası kullanımı",
            "Sınırsız grup dersleri",
            "3 Kişisel antrenman seansı",
            "Beslenme danışmanlığı",
        ],
        isPopular: true,
        rotation: 0,
    },
    {
        name: "Yıllık",
        price: "₺11.900",
        period: "/yıl",
        features: [
            "Tüm ekipmanlara erişim",
            "VIP soyunma odası",
            "Sınırsız grup dersleri",
            "6 Kişisel antrenman seansı",
            "Beslenme danışmanlığı",
            "Misafir getirme hakkı",
        ],
        isPopular: false,
        rotation: 3,
    },
];

export function PricingSection() {
    return (
        <section id="fiyatlar" className="relative bg-black py-24 overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-black to-[#0a0a0a]" />

            <div className="relative max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Üyelik <span className="text-[#D4A836]">Paketleri</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Size uygun paketi seçin, hemen spor yapmaya başlayın
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-4">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: plan.isPopular ? -20 : 0 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", duration: 0.6, delay: index * 0.1 }}
                            className={`relative w-full md:w-72 rounded-2xl border backdrop-blur-md transition-transform hover:scale-105 
                ${plan.isPopular
                                    ? 'z-20 md:w-80 border-[#D4A836] bg-gradient-to-b from-[#D4A836]/20 to-black/60 shadow-lg shadow-[#D4A836]/20'
                                    : 'z-10 border-[#D4A836]/30 bg-black/40'
                                }`}
                            style={{ rotate: `${plan.rotation}deg` }}
                        >
                            {/* Popular Badge */}
                            {plan.isPopular && (
                                <motion.div
                                    animate={{ y: [0, -4, 0] }}
                                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                                    className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1 rounded-full bg-[#D4A836] px-4 py-1 text-xs font-bold text-black shadow-lg"
                                >
                                    <Star className="w-3 h-3 fill-current" />
                                    En Popüler
                                </motion.div>
                            )}

                            <div className={`p-8 ${plan.isPopular ? 'pt-10' : ''}`}>
                                {/* Plan Name */}
                                <div className={`text-lg font-bold mb-2 ${plan.isPopular ? 'text-[#D4A836]' : 'text-[#D4A836]'}`}>
                                    {plan.name}
                                </div>

                                {/* Price */}
                                <div className="mb-6">
                                    <span className={`text-4xl font-black ${plan.isPopular ? 'text-white' : 'text-white'}`}>
                                        {plan.price}
                                    </span>
                                    <span className="text-gray-400 text-sm">{plan.period}</span>
                                </div>

                                {/* Features */}
                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                                            <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${plan.isPopular ? 'text-[#D4A836]' : 'text-[#D4A836]/70'}`} />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA Button */}
                                <a
                                    href="tel:+905326699357"
                                    className={`block w-full py-3 rounded-xl font-semibold text-center transition-all
                    ${plan.isPopular
                                            ? 'bg-[#D4A836] text-black hover:bg-[#E6B93D]'
                                            : 'bg-white/10 text-white hover:bg-[#D4A836] hover:text-black'
                                        }`}
                                >
                                    {plan.isPopular ? 'Hemen Başla' : 'Seç'}
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Note */}
                <p className="text-center text-gray-500 text-sm mt-12">
                    Tüm üyeliklerde ilk ders <span className="text-[#D4A836]">ücretsiz deneme</span> hakkı bulunmaktadır
                </p>
            </div>
        </section>
    );
}
