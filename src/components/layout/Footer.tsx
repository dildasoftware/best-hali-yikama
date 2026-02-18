"use client";

import { Instagram, MapPin, Phone, Clock, Mail } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="bg-dark-text text-white py-12 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* İletişim Bilgileri */}
                <div>
                    <h3 className="text-xl font-bold mb-4 text-trust-blue">İletişim</h3>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <MapPin className="w-5 h-5 text-action-red mt-1 shrink-0" />
                            <span>
                                Bahçelievler Mahallesi, Barış Sk. No:32<br />
                                Bulancak / Giresun
                            </span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone className="w-5 h-5 text-action-red shrink-0" />
                            <a href="tel:04543185222" className="hover:text-trust-blue transition-colors">
                                0454 318 52 22
                            </a>
                        </li>
                        <li className="flex items-center gap-3">
                            <Instagram className="w-5 h-5 text-pink-500 shrink-0" />
                            <a
                                href="https://www.instagram.com/best_haliyikama?igsh=Z2wzbnpwMGNsNWxx"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-pink-400 transition-colors"
                            >
                                @best_haliyikama
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Çalışma Saatleri */}
                <div>
                    <h3 className="text-xl font-bold mb-4 text-trust-blue">Çalışma Saatleri</h3>
                    <ul className="space-y-2">
                        <li className="flex justify-between border-b border-gray-700 pb-2">
                            <span>Hafta İçi (Pzt - Cuma)</span>
                            <span>09:00 - 18:30</span>
                        </li>
                        <li className="flex justify-between border-b border-gray-700 pb-2">
                            <span>Cumartesi</span>
                            <span>09:00 - 18:30</span>
                        </li>
                        <li className="flex justify-between text-red-400">
                            <span>Pazar</span>
                            <span>Kapalı</span>
                        </li>
                    </ul>
                </div>

                {/* Harita / Konum */}
                <div className="h-64 rounded-xl overflow-hidden shadow-lg border border-gray-700">
                    <iframe
                        src="https://maps.google.com/maps?q=Bulancak+Giresun+Bahcelievler+Mah+Baris+Sk+No+32&t=&z=16&ie=UTF8&iwloc=&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Best Halı Yıkama Konum - Bulancak Giresun"
                    ></iframe>
                    {/* Not: Tam koordinatları Google Maps'ten alıp güncellemek gerekebilir. Şimdilik tahmini bir konum veya genel Giresun/Bulancak merkezi kullanılabilir ama kullanıcı açık adres verdiği için iframe'i adres bazlı oluşturmak daha iyi olabilir. Ancak iframe src'si genelde statiktir. Adresi text olarak verdik zaten. */}
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
                © {new Date().getFullYear()} Best Halı Yıkama. Tüm hakları saklıdır. Antigravity ile tasarlanmıştır.
            </div>
        </footer>
    );
};
