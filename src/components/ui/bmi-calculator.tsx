"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, Activity } from "lucide-react";

// form.md template'ine göre - VKİ Hesaplayıcı
export function BMICalculator() {
    const [height, setHeight] = useState<string>("");
    const [weight, setWeight] = useState<string>("");
    const [result, setResult] = useState<{ bmi: number; category: string; color: string } | null>(null);

    const calculateBMI = () => {
        const h = parseFloat(height) / 100; // cm to m
        const w = parseFloat(weight);

        if (h > 0 && w > 0) {
            const bmi = w / (h * h);
            let category = "";
            let color = "";

            if (bmi < 18.5) {
                category = "Zayıf";
                color = "#60A5FA"; // Blue
            } else if (bmi < 25) {
                category = "Normal";
                color = "#34D399"; // Green
            } else if (bmi < 30) {
                category = "Fazla Kilolu";
                color = "#FBBF24"; // Yellow
            } else {
                category = "Obez";
                color = "#F87171"; // Red
            }

            setResult({ bmi: Math.round(bmi * 10) / 10, category, color });
        }
    };

    const resetForm = () => {
        setHeight("");
        setWeight("");
        setResult(null);
    };

    return (
        <section className="bg-black py-20">
            <div className="max-w-4xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="rounded-3xl border border-[#D4A836]/30 bg-gradient-to-br from-black via-[#0a0a0a] to-black p-8 md:p-12"
                >
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-4 rounded-2xl bg-[#D4A836]/10 text-[#D4A836]">
                            <Calculator className="w-8 h-8" />
                        </div>
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-white">
                                VKİ Hesaplayıcı
                            </h2>
                            <p className="text-gray-400">Vücut Kitle Endeksinizi hesaplayın</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Form */}
                        <div className="space-y-6">
                            {/* Boy */}
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Boy (cm)
                                </label>
                                <input
                                    type="number"
                                    value={height}
                                    onChange={(e) => setHeight(e.target.value)}
                                    placeholder="175"
                                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-[#D4A836]/30 text-white placeholder-gray-500 focus:outline-none focus:border-[#D4A836] transition-colors"
                                />
                            </div>

                            {/* Kilo */}
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Kilo (kg)
                                </label>
                                <input
                                    type="number"
                                    value={weight}
                                    onChange={(e) => setWeight(e.target.value)}
                                    placeholder="70"
                                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-[#D4A836]/30 text-white placeholder-gray-500 focus:outline-none focus:border-[#D4A836] transition-colors"
                                />
                            </div>

                            {/* Buttons */}
                            <div className="flex gap-4">
                                <button
                                    onClick={calculateBMI}
                                    className="flex-1 py-3 rounded-xl bg-[#D4A836] text-black font-semibold hover:bg-[#E6B93D] transition-colors"
                                >
                                    Hesapla
                                </button>
                                <button
                                    onClick={resetForm}
                                    className="px-6 py-3 rounded-xl border border-[#D4A836]/30 text-gray-300 hover:border-[#D4A836] transition-colors"
                                >
                                    Sıfırla
                                </button>
                            </div>
                        </div>

                        {/* Result */}
                        <div className="flex items-center justify-center">
                            {result ? (
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className="text-center"
                                >
                                    <div
                                        className="w-40 h-40 rounded-full flex flex-col items-center justify-center border-4 mb-4"
                                        style={{ borderColor: result.color }}
                                    >
                                        <span className="text-4xl font-bold text-white">{result.bmi}</span>
                                        <span className="text-sm text-gray-400">VKİ</span>
                                    </div>
                                    <div
                                        className="inline-block px-4 py-2 rounded-full font-semibold"
                                        style={{ backgroundColor: result.color + '20', color: result.color }}
                                    >
                                        {result.category}
                                    </div>
                                </motion.div>
                            ) : (
                                <div className="text-center text-gray-500">
                                    <Activity className="w-16 h-16 mx-auto mb-4 opacity-30" />
                                    <p>Boy ve kilonuzu girerek<br />VKİ değerinizi öğrenin</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* BMI Categories */}
                    <div className="mt-8 pt-8 border-t border-[#D4A836]/10">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-[#60A5FA]" />
                                <span className="text-gray-400">Zayıf: &lt;18.5</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-[#34D399]" />
                                <span className="text-gray-400">Normal: 18.5-24.9</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-[#FBBF24]" />
                                <span className="text-gray-400">Fazla Kilolu: 25-29.9</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-[#F87171]" />
                                <span className="text-gray-400">Obez: ≥30</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
