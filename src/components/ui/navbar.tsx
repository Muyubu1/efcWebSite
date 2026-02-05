"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const AnimatedNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
    return (
        <a href={href} className="group relative inline-block overflow-hidden h-5 flex items-center text-sm">
            <div className="flex flex-col transition-transform duration-400 ease-out transform group-hover:-translate-y-1/2">
                <span className="text-gray-300">{children}</span>
                <span className="text-[#D4A836]">{children}</span>
            </div>
        </a>
    );
};

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [headerShapeClass, setHeaderShapeClass] = useState('rounded-full');
    const shapeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (shapeTimeoutRef.current) {
            clearTimeout(shapeTimeoutRef.current);
        }

        if (isOpen) {
            setHeaderShapeClass('rounded-xl');
        } else {
            shapeTimeoutRef.current = setTimeout(() => {
                setHeaderShapeClass('rounded-full');
            }, 300);
        }

        return () => {
            if (shapeTimeoutRef.current) {
                clearTimeout(shapeTimeoutRef.current);
            }
        };
    }, [isOpen]);

    const navLinksData = [
        { label: 'Ana Sayfa', href: '#hero' },
        { label: 'Galeri', href: '#galeri' },
        { label: 'Hizmetler', href: '#hizmetler' },
        { label: 'Fiyatlar', href: '#fiyatlar' },
        { label: 'İletişim', href: '#iletisim' },
    ];

    return (
        <header className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50
                       flex flex-col items-center
                       pl-4 pr-4 py-3 backdrop-blur-md
                       ${headerShapeClass}
                       border border-[#D4A836]/30 
                       ${isScrolled ? 'bg-black/80' : 'bg-black/40'}
                       w-[calc(100%-2rem)] sm:w-auto
                       transition-all duration-300 ease-in-out`}>

            <div className="flex items-center justify-between w-full gap-x-6 sm:gap-x-8">
                {/* Logo */}
                <a href="#hero" className="flex items-center gap-2">
                    <Image
                        src="/logo.svg"
                        alt="Emre FIT Club"
                        width={40}
                        height={40}
                        className="h-10 w-auto"
                    />
                    <span className="hidden sm:block text-white font-bold text-lg">
                        EMRE <span className="text-[#D4A836]">FIT</span> Club
                    </span>
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-6">
                    {navLinksData.map((link) => (
                        <AnimatedNavLink key={link.href} href={link.href}>
                            {link.label}
                        </AnimatedNavLink>
                    ))}
                </nav>

                {/* CTA Button */}
                <div className="hidden md:flex items-center">
                    <a
                        href="tel:+905326699357"
                        className="relative group"
                    >
                        <div className="absolute inset-0 -m-1 rounded-full bg-[#D4A836] opacity-40 blur-lg pointer-events-none transition-all duration-300 group-hover:opacity-60 group-hover:blur-xl group-hover:-m-2"></div>
                        <button className="relative z-10 px-6 py-2 text-sm font-semibold text-black bg-gradient-to-br from-[#D4A836] to-[#E6B93D] rounded-full hover:from-[#E6B93D] hover:to-[#D4A836] transition-all duration-200">
                            Hemen Ara
                        </button>
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden flex items-center justify-center w-8 h-8 text-gray-300 focus:outline-none"
                    onClick={toggleMenu}
                    aria-label={isOpen ? 'Menüyü Kapat' : 'Menüyü Aç'}
                >
                    {isOpen ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden flex flex-col items-center w-full transition-all ease-in-out duration-300 overflow-hidden
                       ${isOpen ? 'max-h-[500px] opacity-100 pt-4' : 'max-h-0 opacity-0 pt-0 pointer-events-none'}`}>
                <nav className="flex flex-col items-center space-y-4 text-base w-full">
                    {navLinksData.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-gray-300 hover:text-[#D4A836] transition-colors w-full text-center"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>
                <div className="mt-4 w-full px-4">
                    <a
                        href="tel:+905326699357"
                        className="block w-full py-3 text-center text-sm font-semibold text-black bg-gradient-to-br from-[#D4A836] to-[#E6B93D] rounded-full"
                    >
                        Hemen Ara
                    </a>
                </div>
            </div>
        </header>
    );
}
