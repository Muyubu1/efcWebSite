"use client";

import React from "react";
import { motion } from "framer-motion";
import { Instagram, Heart, MessageCircle } from "lucide-react";

// InstagramFeed.md template'ine göre - Instagram önizleme
// Not: Gerçek Instagram feed için Instagram API veya 3. parti widget kullanılmalı
const instagramPosts = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=400&fit=crop",
        likes: 245,
        comments: 18,
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&h=400&fit=crop",
        likes: 189,
        comments: 12,
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=400&h=400&fit=crop",
        likes: 312,
        comments: 24,
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=400&fit=crop",
        likes: 156,
        comments: 9,
    },
    {
        id: 5,
        image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=400&h=400&fit=crop",
        likes: 278,
        comments: 21,
    },
    {
        id: 6,
        image: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=400&h=400&fit=crop",
        likes: 198,
        comments: 15,
    },
];

export function InstagramFeed() {
    return (
        <section className="bg-black py-20">
            <div className="max-w-6xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20 text-white text-sm font-medium mb-4">
                        <Instagram className="w-4 h-4" />
                        @emrefitclub
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Instagram'da <span className="text-[#D4A836]">Bizi Takip Edin</span>
                    </h2>
                    <p className="text-gray-400">
                        Güncel içerikler, antrenman ipuçları ve daha fazlası için
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {instagramPosts.map((post, index) => (
                        <motion.a
                            key={post.id}
                            href="https://www.instagram.com/emrefitclub"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative aspect-square rounded-xl overflow-hidden"
                        >
                            <img
                                src={post.image}
                                alt={`Instagram post ${post.id}`}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className="flex items-center gap-6 text-white">
                                    <div className="flex items-center gap-2">
                                        <Heart className="w-5 h-5 fill-current" />
                                        <span className="font-medium">{post.likes}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MessageCircle className="w-5 h-5" />
                                        <span className="font-medium">{post.comments}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Border */}
                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#D4A836]/50 rounded-xl transition-colors duration-300" />
                        </motion.a>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-10">
                    <a
                        href="https://www.instagram.com/emrefitclub"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white font-semibold hover:opacity-90 transition-opacity"
                    >
                        <Instagram className="w-5 h-5" />
                        Instagram'da Takip Et
                    </a>
                </div>
            </div>
        </section>
    );
}
