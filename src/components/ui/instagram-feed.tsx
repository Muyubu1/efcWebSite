"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, ChevronDown, ChevronUp } from "lucide-react";

// Gerçek Instagram gönderileri - oEmbed ile embed
// İlk 6'sı mevcut linkler, sonraki 9'u kullanıcının eklediği yeni linkler
const instagramPosts = [
    // Mevcut 6 link
    {
        id: 1,
        url: "https://www.instagram.com/p/DAlNUzqMB19/",
        type: "post",
    },
    {
        id: 2,
        url: "https://www.instagram.com/p/C8cM1dqsWFr/",
        type: "post",
    },
    {
        id: 3,
        url: "https://www.instagram.com/p/DQokxBRjTYX/",
        type: "post",
    },
    {
        id: 4,
        url: "https://www.instagram.com/reel/DQmTfK8jVha/",
        type: "reel",
    },
    {
        id: 5,
        url: "https://www.instagram.com/reel/DQM9A3-jbXI/",
        type: "reel",
    },
    {
        id: 6,
        url: "https://www.instagram.com/reel/DQMsPcijTqV/",
        type: "reel",
    },
    // Yeni eklenen 9 link
    {
        id: 7,
        url: "https://www.instagram.com/p/DQMNSstjDKc/",
        type: "post",
    },
    {
        id: 8,
        url: "https://www.instagram.com/reel/DFurSmdql1W/",
        type: "reel",
    },
    {
        id: 9,
        url: "https://www.instagram.com/p/DD1DDpRqtRE/",
        type: "post",
    },
    {
        id: 10,
        url: "https://www.instagram.com/p/DDuwHehqlf8/",
        type: "post",
    },
    {
        id: 11,
        url: "https://www.instagram.com/reel/DDMnLjKqmeG/",
        type: "reel",
    },
    {
        id: 12,
        url: "https://www.instagram.com/p/DDH2LEmoNGe/",
        type: "post",
    },
    {
        id: 13,
        url: "https://www.instagram.com/p/DDHCQGKqsUq/",
        type: "post",
    },
    {
        id: 14,
        url: "https://www.instagram.com/reel/DDFwaf1qqb3/",
        type: "reel",
    },
    {
        id: 15,
        url: "https://www.instagram.com/reel/DBYUdabK4-h/",
        type: "reel",
    },
];

// Declare global window type for Instagram embed
declare global {
    interface Window {
        instgrm?: {
            Embeds: {
                process: () => void;
            };
        };
    }
}

export function InstagramFeed() {
    const [visibleCount, setVisibleCount] = useState(6);
    const visiblePosts = instagramPosts.slice(0, visibleCount);
    const hasMore = visibleCount < instagramPosts.length;

    const handleShowMore = () => {
        setVisibleCount(prev => Math.min(prev + 3, instagramPosts.length));
    };

    const handleShowLess = () => {
        setVisibleCount(6);
    };

    useEffect(() => {
        // Instagram embed script'ini yükle
        const loadInstagramEmbed = () => {
            if (window.instgrm) {
                window.instgrm.Embeds.process();
            } else {
                const script = document.createElement("script");
                script.src = "https://www.instagram.com/embed.js";
                script.async = true;
                script.onload = () => {
                    if (window.instgrm) {
                        window.instgrm.Embeds.process();
                    }
                };
                document.body.appendChild(script);
            }
        };

        // Script'i yükle
        loadInstagramEmbed();

        // Cleanup
        return () => {
            const scripts = document.querySelectorAll('script[src="https://www.instagram.com/embed.js"]');
            scripts.forEach((script) => script.remove());
        };
    }, []);

    // visibleCount değiştiğinde embed'leri yeniden işle
    useEffect(() => {
        if (window.instgrm) {
            setTimeout(() => {
                window.instgrm?.Embeds.process();
            }, 100);
        }
    }, [visibleCount]);

    return (
        <section id="instagram" className="bg-black py-20">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20 text-white text-sm font-medium mb-4">
                        <Instagram className="w-4 h-4" />
                        @emrefitclub
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Instagram&apos;da <span className="text-[#D4A836]">Bizi Takip Edin</span>
                    </h2>
                    <p className="text-gray-400">
                        Güncel içerikler, antrenman ipuçları ve daha fazlası için
                    </p>
                </motion.div>

                {/* Instagram Embeds Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence>
                        {visiblePosts.map((post, index) => (
                            <motion.div
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ delay: index * 0.05 }}
                                className="instagram-embed-container flex justify-center"
                            >
                                <div className="w-full max-w-[400px] h-[500px] overflow-hidden rounded-xl border border-gray-800">
                                    <blockquote
                                        className="instagram-media"
                                        data-instgrm-captioned
                                        data-instgrm-permalink={post.url}
                                        data-instgrm-version="14"
                                        style={{
                                            background: "#000",
                                            border: "0",
                                            borderRadius: "12px",
                                            boxShadow: "0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)",
                                            margin: "0",
                                            maxWidth: "400px",
                                            minWidth: "280px",
                                            padding: "0",
                                            width: "100%",
                                        }}
                                    >
                                        <div style={{ padding: "16px" }}>
                                            <a
                                                href={post.url}
                                                style={{
                                                    background: "#1a1a1a",
                                                    lineHeight: "0",
                                                    padding: "0",
                                                    textAlign: "center" as const,
                                                    textDecoration: "none",
                                                    width: "100%",
                                                    display: "block",
                                                    borderRadius: "8px",
                                                }}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <div className="flex items-center gap-3 p-4">
                                                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center">
                                                        <Instagram className="w-5 h-5 text-white" />
                                                    </div>
                                                    <div className="text-left">
                                                        <p className="text-white font-semibold text-sm">emrefitclub</p>
                                                        <p className="text-gray-400 text-xs">Instagram&apos;da görüntüle</p>
                                                    </div>
                                                </div>
                                                <div className="aspect-square bg-gray-800 rounded-lg flex items-center justify-center">
                                                    <div className="text-center p-4">
                                                        <Instagram className="w-12 h-12 text-gray-500 mx-auto mb-2" />
                                                        <p className="text-gray-400 text-sm">Yükleniyor...</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </blockquote>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Daha Fazla / Daha Az Butonları */}
                <motion.div
                    className="text-center mt-8 flex justify-center gap-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    {hasMore && (
                        <motion.button
                            onClick={handleShowMore}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#D4A836]/50 text-[#D4A836] font-semibold hover:bg-[#D4A836]/10 transition-all"
                        >
                            <ChevronDown className="w-5 h-5" />
                            Daha Fazla Göster ({Math.min(3, instagramPosts.length - visibleCount)} gönderi)
                        </motion.button>
                    )}
                    {visibleCount > 6 && (
                        <motion.button
                            onClick={handleShowLess}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-gray-600 text-gray-400 font-semibold hover:bg-gray-800/50 transition-all"
                        >
                            <ChevronUp className="w-5 h-5" />
                            Daralt
                        </motion.button>
                    )}
                </motion.div>

                {/* CTA */}
                <motion.div
                    className="text-center mt-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    <a
                        href="https://www.instagram.com/emrefitclub"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white font-semibold hover:opacity-90 transition-opacity hover:scale-105 transform duration-300"
                    >
                        <Instagram className="w-5 h-5" />
                        Instagram&apos;da Takip Et
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
