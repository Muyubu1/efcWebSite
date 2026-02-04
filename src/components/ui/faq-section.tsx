"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

// SSS verisi
const faqData = [
    {
        question: "Spor salonuna gelirken yanımda ne getirmem gerekiyor?",
        answer: "Rahat spor kıyafetleri, temiz spor ayakkabısı ve havlu getirmenizi öneririz. Soyunma odalarımızda duş imkanı mevcuttur, şampuan ve sabun sağlanmaktadır."
    },
    {
        question: "Üyelik iptali nasıl yapılır?",
        answer: "Üyelik iptali için resepsiyonumuza başvurabilir veya bizi arayabilirsiniz. İptal işlemi, talep tarihinden itibaren ilgili dönem sonunda gerçekleşir."
    },
    {
        question: "Otopark imkanı var mı?",
        answer: "Evet, salonumuzun önünde ücretsiz otopark imkanı bulunmaktadır. Ayrıca yakın çevrede ücretsiz park alanları da mevcuttur."
    },
    {
        question: "Kişisel antrenör hizmeti nasıl çalışıyor?",
        answer: "Kişisel antrenman seansları, deneyimli antrenörlerimiz tarafından size özel olarak hazırlanır. Seans başına veya paket olarak satın alabilirsiniz. İlk görüşme ücretsizdir."
    },
    {
        question: "Kadınlara özel alan veya saatler var mı?",
        answer: "Evet, kadınlara özel grup derslerimiz mevcuttur. Pilates, yoga ve aerobik gibi dersler kadın eğitmenlerimiz tarafından verilmektedir."
    },
    {
        question: "Üyelik dondurma işlemi yapılabiliyor mu?",
        answer: "Evet, sağlık raporu veya uzun süreli seyahat gibi geçerli sebeplerle üyeliğinizi belirli bir süre dondurabilirsiniz. Detaylar için resepsiyonla iletişime geçin."
    },
    {
        question: "Çalışma saatleriniz nedir?",
        answer: "Hafta içi 06:00 - 23:00, Cumartesi 08:00 - 20:00, Pazar 09:00 - 18:00 saatleri arasında hizmet vermekteyiz."
    },
];

function AccordionItem({
    question,
    answer,
    isOpen,
    onClick
}: {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
}) {
    return (
        <div className="border-b border-[#D4A836]/20">
            <button
                onClick={onClick}
                className="w-full py-5 flex items-center justify-between text-left group"
            >
                <span className="text-white font-medium pr-4 group-hover:text-[#D4A836] transition-colors">
                    {question}
                </span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className={`flex-shrink-0 ${isOpen ? 'text-[#D4A836]' : 'text-gray-400'}`}
                >
                    <ChevronDown className="w-5 h-5" />
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                    >
                        <p className="pb-5 text-gray-400 leading-relaxed">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="bg-[#0a0a0a] py-20">
            <div className="max-w-3xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4A836]/10 text-[#D4A836] text-sm font-medium mb-4">
                        <HelpCircle className="w-4 h-4" />
                        Sıkça Sorulan Sorular
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Merak Ettikleriniz
                    </h2>
                    <p className="text-gray-400">
                        Aklınıza takılan soruların cevaplarını burada bulabilirsiniz
                    </p>
                </div>

                {/* Accordion */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="rounded-2xl border border-[#D4A836]/20 bg-black/40 px-6"
                >
                    {faqData.map((item, index) => (
                        <AccordionItem
                            key={index}
                            question={item.question}
                            answer={item.answer}
                            isOpen={openIndex === index}
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        />
                    ))}
                </motion.div>

                {/* CTA */}
                <div className="text-center mt-10">
                    <p className="text-gray-400 mb-4">Başka sorunuz mu var?</p>
                    <a
                        href="tel:+905326699357"
                        className="inline-flex items-center gap-2 text-[#D4A836] font-medium hover:underline"
                    >
                        Bize ulaşın: 0532 669 93 57
                    </a>
                </div>
            </div>
        </section>
    );
}
