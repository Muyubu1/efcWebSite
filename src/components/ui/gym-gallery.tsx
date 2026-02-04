"use client";

// heroAltına.md template'ine göre - Salon görselleri galerisi
const GYM_GALLERY_IMAGES = [
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&h=800&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&h=800&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&h=800&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&h=800&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&h=800&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&h=800&w=800&auto=format&fit=crop",
];

export function GymGallery() {
    return (
        <section id="galeri" className="w-full bg-[#0a0a0a] py-20">
            <div className="max-w-6xl mx-auto px-4">
                {/* Header */}
                <div className="max-w-3xl text-center mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Salonumuza <span className="text-[#D4A836]">Göz Atın</span>
                    </h2>
                    <p className="text-gray-400 mt-4">
                        Modern ekipmanlarımız ve ferah ortamımızla spor yapmaktan keyif alacaksınız
                    </p>
                </div>

                {/* Gallery Grid */}
                <div className="flex items-center gap-2 h-[300px] md:h-[400px] w-full">
                    {GYM_GALLERY_IMAGES.map((src, idx) => (
                        <div
                            key={idx}
                            className="relative group flex-grow transition-all w-20 rounded-xl overflow-hidden h-full duration-500 hover:w-full cursor-pointer"
                        >
                            <img
                                className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                                src={src}
                                alt={`Spor salonu görünümü ${idx + 1}`}
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            {/* Border */}
                            <div className="absolute inset-0 border-2 border-[#D4A836]/0 group-hover:border-[#D4A836]/50 rounded-xl transition-all duration-300" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
