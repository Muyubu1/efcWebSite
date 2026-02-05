"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

// Google Yorumları - Gerçek yorumlar
const googleReviews = [
    {
        id: 1,
        name: "Musap",
        date: "5 ay önce",
        rating: 5,
        text: "Çok güzel ve ferah bir salon, hocalar çok iyi çok samimiler...",
        avatar: "M"
    },
    {
        id: 2,
        name: "Faruk K.",
        date: "11 ay önce",
        rating: 5,
        text: "Severek gittiğim temiz güzel Bi mekan spor salonunun çalışanları ilgili güler yüzlü müşteri odaklı tavsiye ederim",
        avatar: "F"
    },
    {
        id: 3,
        name: "Omer K.",
        date: "1 yıl önce",
        rating: 5,
        text: "Bölgenin en iyi salonu daha ne olsun",
        avatar: "O"
    },
    {
        id: 4,
        name: "Serkan S.",
        date: "3 ay önce",
        rating: 5,
        text: "3 katlı ve harika tesis",
        avatar: "S"
    },
    {
        id: 5,
        name: "Enes K.",
        date: "1 yıl önce",
        rating: 5,
        text: "Parasını gerçekten fazlasıyla hak eden temiz ve disiplinli bir yer",
        avatar: "E"
    },
    {
        id: 6,
        name: "Sakallı F.",
        date: "3 yıl önce",
        rating: 5,
        text: "Emre Şahin, 2. Kademe Fitness Hocası, güler yüzü, salonda programı uygulamada ciddiyeti ve işyerinin temizliği ile gönül rahatlığıyla spor yapabileceğiniz mekan. Teşekkürler Emre hocam teşekkürler.",
        avatar: "S"
    },
];

export function GoogleReviews() {
    // Google Maps URL - Yorumlar sayfası
    const googleMapsUrl = "https://www.google.com/maps/place/EMRE+F%C4%B0T+CLUB+SPOR+SALONU/@40.8333072,29.3758095,17z/data=!4m8!3m7!1s0x14cadff09f6cbec5:0x88ad78193a8a865f!8m2!3d40.8333032!4d29.3783898!9m1!1b1!16s%2Fg%2F11pclhgzcf?entry=ttu";

    return (
        <section id="yorumlar" className="bg-gradient-to-b from-black via-[#0a0a0a] to-black py-20">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    {/* Google Badge */}
                    <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 mb-6">
                        <svg className="w-6 h-6" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                        </svg>
                        <span className="text-white font-medium">Google Yorumları</span>
                        <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                        </div>
                        <span className="text-[#D4A836] font-bold">5.0</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Üyelerimiz <span className="text-[#D4A836]">Ne Diyor?</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Google üzerinden gerçek üyelerimizin değerlendirmeleri
                    </p>
                </motion.div>

                {/* Reviews Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {googleReviews.map((review, index) => (
                        <motion.div
                            key={review.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative group"
                        >
                            <div className="h-full p-6 rounded-2xl bg-gradient-to-br from-[#111111] to-[#0a0a0a] border border-gray-800 hover:border-[#D4A836]/30 transition-all duration-300">
                                {/* Quote Icon */}
                                <Quote className="absolute top-4 right-4 w-8 h-8 text-[#D4A836]/20" />

                                {/* Header */}
                                <div className="flex items-center gap-4 mb-4">
                                    {/* Avatar */}
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D4A836] to-[#B8941F] flex items-center justify-center text-black font-bold text-lg">
                                        {review.avatar}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white">{review.name}</h4>
                                        <p className="text-sm text-gray-500">{review.date}</p>
                                    </div>
                                </div>

                                {/* Stars */}
                                <div className="flex gap-1 mb-4">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>

                                {/* Review Text */}
                                <p className="text-gray-300 leading-relaxed">
                                    &ldquo;{review.text}&rdquo;
                                </p>

                                {/* Google Icon */}
                                <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-800">
                                    <svg className="w-4 h-4" viewBox="0 0 24 24">
                                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                    </svg>
                                    <span className="text-xs text-gray-500">Google&apos;da paylaşıldı</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA - View All Reviews */}
                <motion.div
                    className="text-center mt-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    <a
                        href={googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-gray-100 transition-colors hover:scale-105 transform duration-300"
                    >
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                        </svg>
                        Tüm Google Yorumlarını Gör
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
