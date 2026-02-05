"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, MessageCircle, ChevronRight } from "lucide-react";

// VKİ Hesaplayıcı - Görsel referansa göre tasarlandı
export function BMICalculator() {
    const [gender, setGender] = useState<"female" | "male">("male");
    const [height, setHeight] = useState<number>(170);
    const [weight, setWeight] = useState<number>(70);
    const [heightInput, setHeightInput] = useState<string>("170");
    const [weightInput, setWeightInput] = useState<string>("70");
    const [bmi, setBmi] = useState<number>(0);
    const [idealWeightMin, setIdealWeightMin] = useState<number>(0);
    const [idealWeightMax, setIdealWeightMax] = useState<number>(0);

    const phoneNumber = "905326699357";

    // VKİ kategorileri - cinsiyete göre farklı eşikler
    const getBMICategory = (bmi: number, gender: "female" | "male") => {
        // Erkeklerde kas kütlesi daha fazla olduğundan eşikler biraz farklı
        if (gender === "male") {
            if (bmi < 18.5) return { text: "Zayıf", color: "#60A5FA" };
            if (bmi < 25) return { text: "İdeal", color: "#34D399" };
            if (bmi < 30) return { text: "Kilolu", color: "#FBBF24" };
            return { text: "Obez", color: "#F87171" };
        } else {
            // Kadınlarda ideal aralık biraz daha düşük
            if (bmi < 18.5) return { text: "Zayıf", color: "#60A5FA" };
            if (bmi < 24) return { text: "İdeal", color: "#34D399" };
            if (bmi < 29) return { text: "Kilolu", color: "#FBBF24" };
            return { text: "Obez", color: "#F87171" };
        }
    };

    // VKİ hesaplama - cinsiyete göre ideal kilo farklı
    useEffect(() => {
        const heightInMeters = height / 100;
        const calculatedBmi = weight / (heightInMeters * heightInMeters);
        setBmi(Math.round(calculatedBmi * 100) / 100);

        // İdeal kilo aralığı - cinsiyete göre farklı
        let minBmi: number, maxBmi: number;
        if (gender === "male") {
            // Erkeklerde ideal VKİ aralığı: 20-25
            minBmi = 20;
            maxBmi = 25;
        } else {
            // Kadınlarda ideal VKİ aralığı: 18.5-24
            minBmi = 18.5;
            maxBmi = 24;
        }

        const minWeight = minBmi * heightInMeters * heightInMeters;
        const maxWeight = maxBmi * heightInMeters * heightInMeters;
        setIdealWeightMin(Math.round(minWeight * 100) / 100);
        setIdealWeightMax(Math.round(maxWeight * 100) / 100);
    }, [height, weight, gender]);

    const category = getBMICategory(bmi, gender);

    // WhatsApp mesajı
    const getWhatsAppMessage = () => {
        return `Merhaba, VKİ hesaplamam sonucu ${bmi} kg/m² çıktı (${category.text}). Koçluk hizmeti hakkında bilgi almak istiyorum.`;
    };

    // Boy blur - doğrulama ve değer atama
    const validateAndSetHeight = () => {
        let numValue = parseInt(heightInput) || 170;
        if (numValue < 100) numValue = 100;
        if (numValue > 220) numValue = 220;
        setHeight(numValue);
        setHeightInput(numValue.toString());
    };

    // Kilo blur - doğrulama ve değer atama
    const validateAndSetWeight = () => {
        let numValue = parseInt(weightInput) || 70;
        if (numValue < 30) numValue = 30;
        if (numValue > 200) numValue = 200;
        setWeight(numValue);
        setWeightInput(numValue.toString());
    };

    return (
        <section id="vki-hesaplama" className="bg-black py-20">
            <div className="max-w-6xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="rounded-3xl border border-[#D4A836]/30 bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a] p-8 md:p-12 overflow-hidden"
                >
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-10">
                        <div className="p-4 rounded-2xl bg-[#D4A836]/10 text-[#D4A836]">
                            <Calculator className="w-8 h-8" />
                        </div>
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-white">
                                VKİ Hesaplayıcı
                            </h2>
                            <p className="text-gray-400">Vücut Kitle İndeksinizi hesaplayın</p>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Sol Taraf - Form */}
                        <div className="space-y-8">
                            {/* Cinsiyet Seçimi */}
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-4">
                                    Cinsiyet
                                </label>
                                <div className="flex gap-4">
                                    {/* Kadın */}
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => setGender("female")}
                                        className={`relative flex-1 rounded-2xl border-2 overflow-hidden transition-all duration-300 ${gender === "female"
                                            ? "border-[#D4A836] shadow-lg shadow-[#D4A836]/20"
                                            : "border-gray-700 hover:border-gray-600"
                                            }`}
                                    >
                                        <div className="relative aspect-[3/4] bg-transparent flex items-end justify-center overflow-hidden">
                                            {/* Kadın görseli */}
                                            <div className={`relative w-full h-full transition-all duration-300 ${gender === "female" ? "opacity-100 grayscale-0" : "opacity-60 grayscale"}`}>
                                                <Image
                                                    src="/images/kadin-manken.png"
                                                    alt="Kadın"
                                                    fill
                                                    className="object-contain object-bottom"
                                                    sizes="(max-width: 768px) 50vw, 200px"
                                                />
                                            </div>
                                            {/* Seçim işareti */}
                                            {gender === "female" && (
                                                <motion.div
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    className="absolute top-3 right-3 w-6 h-6 rounded-full bg-[#D4A836] flex items-center justify-center"
                                                >
                                                    <div className="w-3 h-3 rounded-full bg-black" />
                                                </motion.div>
                                            )}
                                        </div>
                                        <div className={`py-3 text-center font-medium ${gender === "female" ? "bg-[#D4A836]/20 text-[#D4A836]" : "bg-gray-800 text-gray-400"
                                            }`}>
                                            Kadın
                                        </div>
                                    </motion.button>

                                    {/* Erkek */}
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => setGender("male")}
                                        className={`relative flex-1 rounded-2xl border-2 overflow-hidden transition-all duration-300 ${gender === "male"
                                            ? "border-[#D4A836] shadow-lg shadow-[#D4A836]/20"
                                            : "border-gray-700 hover:border-gray-600"
                                            }`}
                                    >
                                        <div className="relative aspect-[3/4] bg-transparent flex items-end justify-center overflow-hidden">
                                            {/* Erkek görseli */}
                                            <div className={`relative w-full h-full transition-all duration-300 ${gender === "male" ? "opacity-100 grayscale-0" : "opacity-60 grayscale"}`}>
                                                <Image
                                                    src="/images/erkek-manken.png"
                                                    alt="Erkek"
                                                    fill
                                                    className="object-contain object-bottom"
                                                    sizes="(max-width: 768px) 50vw, 200px"
                                                />
                                            </div>
                                            {/* Seçim işareti */}
                                            {gender === "male" && (
                                                <motion.div
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    className="absolute top-3 right-3 w-6 h-6 rounded-full bg-[#D4A836] flex items-center justify-center"
                                                >
                                                    <div className="w-3 h-3 rounded-full bg-black" />
                                                </motion.div>
                                            )}
                                        </div>
                                        <div className={`py-3 text-center font-medium ${gender === "male" ? "bg-[#D4A836]/20 text-[#D4A836]" : "bg-gray-800 text-gray-400"
                                            }`}>
                                            Erkek
                                        </div>
                                    </motion.button>
                                </div>
                            </div>

                            {/* Boy Slider + Input */}
                            <div>
                                <div className="flex justify-between items-center mb-3">
                                    <label className="text-sm font-medium text-gray-300">Boy</label>
                                    <div className="px-2 py-1 rounded-xl bg-[#D4A836]/10 border border-[#D4A836]/30 flex items-center">
                                        <input
                                            type="text"
                                            inputMode="numeric"
                                            pattern="[0-9]*"
                                            value={heightInput}
                                            onChange={(e) => setHeightInput(e.target.value)}
                                            onBlur={validateAndSetHeight}
                                            onKeyDown={(e) => e.key === "Enter" && e.currentTarget.blur()}
                                            className="w-14 text-lg font-bold text-white bg-transparent border-none outline-none text-center"
                                        />
                                        <span className="text-sm text-gray-400 ml-1">cm</span>
                                    </div>
                                </div>
                                <div className="relative">
                                    <input
                                        type="range"
                                        min="100"
                                        max="220"
                                        value={height}
                                        onChange={(e) => {
                                            const val = Number(e.target.value);
                                            setHeight(val);
                                            setHeightInput(val.toString());
                                        }}
                                        className="w-full h-3 rounded-full appearance-none cursor-pointer bg-gray-700"
                                        style={{
                                            background: `linear-gradient(to right, #D4A836 0%, #D4A836 ${((height - 100) / 120) * 100}%, #374151 ${((height - 100) / 120) * 100}%, #374151 100%)`
                                        }}
                                    />
                                    <div className="flex justify-between text-xs text-gray-500 mt-2">
                                        <span>100 cm</span>
                                        <span>220 cm</span>
                                    </div>
                                </div>
                            </div>

                            {/* Kilo Slider + Input */}
                            <div>
                                <div className="flex justify-between items-center mb-3">
                                    <label className="text-sm font-medium text-gray-300">Kilo</label>
                                    <div className="px-2 py-1 rounded-xl bg-[#D4A836]/10 border border-[#D4A836]/30 flex items-center">
                                        <input
                                            type="text"
                                            inputMode="numeric"
                                            pattern="[0-9]*"
                                            value={weightInput}
                                            onChange={(e) => setWeightInput(e.target.value)}
                                            onBlur={validateAndSetWeight}
                                            onKeyDown={(e) => e.key === "Enter" && e.currentTarget.blur()}
                                            className="w-14 text-lg font-bold text-white bg-transparent border-none outline-none text-center"
                                        />
                                        <span className="text-sm text-gray-400 ml-1">kg</span>
                                    </div>
                                </div>
                                <div className="relative">
                                    <input
                                        type="range"
                                        min="30"
                                        max="200"
                                        value={weight}
                                        onChange={(e) => {
                                            const val = Number(e.target.value);
                                            setWeight(val);
                                            setWeightInput(val.toString());
                                        }}
                                        className="w-full h-3 rounded-full appearance-none cursor-pointer bg-gray-700"
                                        style={{
                                            background: `linear-gradient(to right, #D4A836 0%, #D4A836 ${((weight - 30) / 170) * 100}%, #374151 ${((weight - 30) / 170) * 100}%, #374151 100%)`
                                        }}
                                    />
                                    <div className="flex justify-between text-xs text-gray-500 mt-2">
                                        <span>30 kg</span>
                                        <span>200 kg</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sağ Taraf - Sonuç */}
                        <div className="flex flex-col justify-center">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={bmi}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                    className="space-y-6"
                                >
                                    {/* VKİ Sonucu */}
                                    <div className="text-center lg:text-left">
                                        <p className="text-sm text-gray-400 mb-1">VKİ</p>
                                        <div className="flex items-baseline gap-2 justify-center lg:justify-start">
                                            <span
                                                className="text-5xl md:text-6xl font-bold"
                                                style={{ color: category.color }}
                                            >
                                                {bmi.toFixed(2)}
                                            </span>
                                            <span className="text-lg text-gray-400">kg/m²</span>
                                        </div>
                                    </div>

                                    {/* Kategori Listesi */}
                                    <div className="space-y-2 p-4 rounded-2xl bg-black/50 border border-gray-800">
                                        <div className={`flex items-center gap-2 ${bmi < 18.5 ? 'text-[#60A5FA]' : 'text-gray-500'}`}>
                                            <ChevronRight className={`w-4 h-4 ${bmi < 18.5 ? 'opacity-100' : 'opacity-0'}`} />
                                            <span>18,5&apos;den az: Zayıf</span>
                                        </div>
                                        <div className={`flex items-center gap-2 ${bmi >= 18.5 && bmi < 25 ? 'text-[#34D399]' : 'text-gray-500'}`}>
                                            <ChevronRight className={`w-4 h-4 ${bmi >= 18.5 && bmi < 25 ? 'opacity-100' : 'opacity-0'}`} />
                                            <span>18,5 - 24,9: İdeal</span>
                                        </div>
                                        <div className={`flex items-center gap-2 ${bmi >= 25 && bmi < 30 ? 'text-[#FBBF24]' : 'text-gray-500'}`}>
                                            <ChevronRight className={`w-4 h-4 ${bmi >= 25 && bmi < 30 ? 'opacity-100' : 'opacity-0'}`} />
                                            <span>25 - 29,9: Kilolu</span>
                                        </div>
                                        <div className={`flex items-center gap-2 ${bmi >= 30 ? 'text-[#F87171]' : 'text-gray-500'}`}>
                                            <ChevronRight className={`w-4 h-4 ${bmi >= 30 ? 'opacity-100' : 'opacity-0'}`} />
                                            <span>30&apos;dan fazla: Obez</span>
                                        </div>
                                    </div>

                                    {/* İdeal Kilo Aralığı */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="p-4 rounded-xl bg-[#D4A836]/5 border border-[#D4A836]/20">
                                            <p className="text-xs text-gray-400 mb-1">İdeal Kilo Alt Sınır</p>
                                            <p className="text-xl font-bold text-white">{idealWeightMin}</p>
                                        </div>
                                        <div className="p-4 rounded-xl bg-[#D4A836]/5 border border-[#D4A836]/20">
                                            <p className="text-xs text-gray-400 mb-1">İdeal Kilo Üst Sınır</p>
                                            <p className="text-xl font-bold text-white">{idealWeightMax}</p>
                                        </div>
                                    </div>

                                    {/* Koçluk Hizmeti CTA */}
                                    <div className="p-6 rounded-2xl bg-gradient-to-br from-[#D4A836]/10 to-transparent border border-[#D4A836]/30">
                                        <h3 className="text-xl font-bold text-white mb-2">
                                            Hedeflerinize Beraber Ulaşalım!
                                        </h3>
                                        <p className="text-sm text-gray-400 mb-4">
                                            VKİ sonucunuz sağlığınız ve bedeninizi daha iyi anlamanızı sağlar.
                                            Bu sonuçları bizim antrenör ve diyetisyen ekibimizle paylaşabilirsiniz.
                                        </p>
                                        <motion.a
                                            href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(getWhatsAppMessage())}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-[#F87171] text-white font-semibold text-lg hover:bg-[#EF4444] transition-colors"
                                        >
                                            <MessageCircle className="w-5 h-5" />
                                            Koçluk Hizmeti Al
                                        </motion.a>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </motion.div>
            </div>

        </section>
    );
}
