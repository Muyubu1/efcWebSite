"use client";

import React from "react";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer id="iletisim" className="bg-black border-t border-[#D4A836]/20">
            <div className="max-w-6xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Logo & About */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <Image
                                src="/logo.svg"
                                alt="Emre FIT Club"
                                width={50}
                                height={50}
                                className="h-12 w-auto"
                            />
                            <div>
                                <span className="text-white font-bold text-xl">
                                    EMRE <span className="text-[#D4A836]">FIT</span>
                                </span>
                                <span className="block text-gray-400 text-xs">Since 2018</span>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            2018'den beri profesyonel ekibimiz ve modern ekipmanlarımızla sağlıklı yaşam yolculuğunuzda yanınızdayız.
                        </p>

                        {/* Social Media */}
                        <div className="flex gap-4 mt-6">
                            <a
                                href="https://www.instagram.com/emrefitclub"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full bg-[#D4A836]/10 text-[#D4A836] hover:bg-[#D4A836] hover:text-black transition-all"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="p-2 rounded-full bg-[#D4A836]/10 text-[#D4A836] hover:bg-[#D4A836] hover:text-black transition-all"
                            >
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="p-2 rounded-full bg-[#D4A836]/10 text-[#D4A836] hover:bg-[#D4A836] hover:text-black transition-all"
                            >
                                <Youtube className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Hızlı Linkler</h4>
                        <ul className="space-y-3">
                            {[
                                { label: "Ana Sayfa", href: "#hero" },
                                { label: "Hizmetler", href: "#hizmetler" },
                                { label: "Fiyatlar", href: "#fiyatlar" },
                                { label: "Galeri", href: "#galeri" },
                                { label: "SSS", href: "#sss" },
                            ].map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-[#D4A836] transition-colors text-sm"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">İletişim</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-[#D4A836] flex-shrink-0 mt-0.5" />
                                <a
                                    href="https://maps.app.goo.gl/Bv2fq6sbm2berpbz5"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white transition-colors text-sm"
                                >
                                    Atatürk, 312. Sk. no:29,<br />41420 Çayırova/Kocaeli
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-[#D4A836]" />
                                <a
                                    href="tel:+905326699357"
                                    className="text-gray-400 hover:text-white transition-colors text-sm"
                                >
                                    0532 669 93 57
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-[#D4A836]" />
                                <a
                                    href="mailto:info@emrefitclub.com"
                                    className="text-gray-400 hover:text-white transition-colors text-sm"
                                >
                                    info@emrefitclub.com
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Working Hours */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Çalışma Saatleri</h4>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3">
                                <Clock className="w-5 h-5 text-[#D4A836]" />
                                <div className="text-sm">
                                    <span className="text-gray-400">Pazartesi - Cuma</span>
                                    <span className="block text-white">06:00 - 23:00</span>
                                </div>
                            </li>
                            <li className="flex items-center gap-3">
                                <Clock className="w-5 h-5 text-[#D4A836]" />
                                <div className="text-sm">
                                    <span className="text-gray-400">Cumartesi</span>
                                    <span className="block text-white">08:00 - 20:00</span>
                                </div>
                            </li>
                            <li className="flex items-center gap-3">
                                <Clock className="w-5 h-5 text-[#D4A836]" />
                                <div className="text-sm">
                                    <span className="text-gray-400">Pazar</span>
                                    <span className="block text-white">09:00 - 18:00</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Google Map */}
                <div className="mt-12 rounded-2xl overflow-hidden border border-[#D4A836]/20">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3018.123456789!2d29.367!3d40.823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ5JzIzLjAiTiAyOcKwMjInMDEuMiJF!5e0!3m2!1str!2str!4v1234567890"
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                    />
                </div>

                {/* Copyright */}
                <div className="mt-12 pt-8 border-t border-[#D4A836]/10 text-center">
                    <p className="text-gray-500 text-sm">
                        © {currentYear} Emre FIT Club. Tüm hakları saklıdır.
                    </p>
                </div>
            </div>
        </footer>
    );
}
