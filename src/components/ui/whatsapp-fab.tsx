"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Phone, X } from "lucide-react";

export function WhatsAppFAB() {
    const [isOpen, setIsOpen] = useState(false);
    const phoneNumber = "905326699357";
    const whatsappMessage = "Merhaba, Emre FIT Club hakkında bilgi almak istiyorum.";

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.8 }}
                        className="absolute bottom-20 right-0 flex flex-col gap-3"
                    >
                        {/* WhatsApp */}
                        <motion.a
                            href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="flex items-center gap-3 px-4 py-3 rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30"
                        >
                            <MessageCircle className="w-5 h-5" />
                            <span className="font-medium text-sm whitespace-nowrap">WhatsApp</span>
                        </motion.a>

                        {/* Phone Call */}
                        <motion.a
                            href="tel:+905326699357"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="flex items-center gap-3 px-4 py-3 rounded-full bg-[#D4A836] text-black shadow-lg shadow-[#D4A836]/30"
                        >
                            <Phone className="w-5 h-5" />
                            <span className="font-medium text-sm whitespace-nowrap">Ara</span>
                        </motion.a>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main FAB Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-colors ${isOpen
                        ? 'bg-gray-700 text-white'
                        : 'bg-[#D4A836] text-black'
                    }`}
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                        >
                            <X className="w-6 h-6" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="message"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                        >
                            <MessageCircle className="w-6 h-6" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>

            {/* Pulse animation when closed */}
            {!isOpen && (
                <span className="absolute inset-0 rounded-full bg-[#D4A836] animate-ping opacity-30" />
            )}
        </div>
    );
}
