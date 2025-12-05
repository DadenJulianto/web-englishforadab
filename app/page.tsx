"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🎵 Auto Music on Scroll or Click
  useEffect(() => {
    let audioPlayed = false;
    const audio = new Audio("/music.mp3");
    audio.loop = true;
    audio.volume = 0.6;

    const playAudio = () => {
      if (!audioPlayed) {
        audio.play().catch(() => {});
        audioPlayed = true;

        window.removeEventListener("scroll", playAudio);
        window.removeEventListener("click", playAudio);
      }
    };

    window.addEventListener("scroll", playAudio);
    window.addEventListener("click", playAudio);

    return () => {
      window.removeEventListener("scroll", playAudio);
      window.removeEventListener("click", playAudio);
    };
  }, []);

  return (
    <>
      {/* SECTION PROGRAMS */}
      <section
        id="programs"
        className="py-20 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: "#F5F5F5" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              name: "School Partnership",
              duration: "12 Bulan",
              price: "Rp 185.000 / Siswa",
              icon: "🏫",
              benefits: [
                "Pelatihan guru dan siswa",
                "English for Adab Textbook",
                "Daily Reminder & Mutaba’ah",
                "Pendampingan program online dan offline",
                "Pembelajaran bahasa Inggris yang meaningful dan contextual.",
              ],
            },
            {
              name: "Training",
              duration: "5 hari / 20 sesi",
              price: "Rp 5.000.000",
              icon: "👨‍🏫",
              benefits: [
                "Pelatihan English for Adab untuk guru",
                "Modul + Sertifikat",
                "Membentuk guru sebagai penggerak utama program English for Adab",
              ],
            },
            {
              name: "English Camp",
              duration: "3 / 7 / 14 Hari",
              price: "Rp 350.000 – Rp 1.200.000",
              icon: "⛺",
              benefits: [
                "5 sesi per hari",
                "Asrama",
                "Makan 3 kali sehari",
                "Modul + Sertifikat",
                "Topi English for Adab",
                "Laundry service",
                "Program intensif pembelajaran bahasa Inggris",
              ],
            },
            {
              name: "Online Class",
              duration: "Fleksibel",
              price: "Rp 200.000",
              icon: "💻",
              benefits: [
                "Kelas fleksibel",
                "10 sesi",
                "Modul + Sertifikat",
              ],
            },
          ].map((program, index) => (
            <div
              key={index}
              className={`p-8 rounded-xl transition-all hover:shadow-xl h-full border-l-4 border-[#008B8B] 
              ${index % 2 === 0 ? "bg-teal-50" : "bg-white"} flex flex-col`}
            >
              <div className="text-5xl mb-4">{program.icon}</div>

              <h3 className="text-2xl font-bold mb-2 text-gray-900">
                {program.name}
              </h3>

              <p className="text-3xl font-bold mb-4 text-[#008B8B]">
                {program.price}
              </p>

              <p className="text-gray-600 mb-6 font-medium">
                {program.duration}
              </p>

              <ul className="space-y-3 mb-8 flex-grow">
                {program.benefits.map((benefit, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <span className="text-yellow-400">✓</span> {benefit}
                  </li>
                ))}
              </ul>

              {/* WA Redirect */}
              <button
                onClick={() =>
                  window.open(
                    `https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20mendaftar%20program%20${encodeURIComponent(
                      program.name
                    )}`,
                    "_blank"
                  )
                }
                className="w-full py-3 rounded-lg font-bold bg-[#008B8B] text-white hover:opacity-90"
              >
                Daftar Sekarang
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
