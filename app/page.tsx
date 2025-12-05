"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-white font-sans">
      {/* Navbar */}
      <nav
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-lg" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-2">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg"
                style={{ backgroundColor: "#008B8B" }}
              >
                E
              </div>
              <span className="text-xl font-bold text-gray-900">
                English for Adab
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("preview")}
                className="text-gray-700 hover:text-teal-600 font-medium transition-colors"
              >
                Preview
              </button>
              <button
                onClick={() => scrollToSection("programs")}
                className="text-gray-700 hover:text-teal-600 font-medium transition-colors"
              >
                Program
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="text-gray-700 hover:text-teal-600 font-medium transition-colors"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-6 py-2 rounded-full font-medium text-white transition-all"
                style={{ backgroundColor: "#FFD700" }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6 text-gray-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12M6 12h12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 flex flex-col gap-3">
              <button
                onClick={() => scrollToSection("preview")}
                className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
              >
                Preview
              </button>
              <button
                onClick={() => scrollToSection("programs")}
                className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
              >
                Program
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="w-full px-4 py-2 rounded-lg font-medium text-gray-900 transition-all"
                style={{ backgroundColor: "#FFD700" }}
              >
                Contact
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section with Video */}
      <section
        id="video"
        className="pt-32 pb-20 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: "#F5F5F5" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Belajar Bahasa Inggris dengan
                <span style={{ color: "#008B8B" }}> Etika</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                English for Adab menghadirkan metode pembelajaran bahasa Inggris
                yang menggabungkan skill bahasa dengan nilai-nilai etika dan
                karakter yang baik.
              </p>
              <button
                onClick={() => scrollToSection("programs")}
                className="px-8 py-3 rounded-full font-bold text-white text-lg transition-all hover:shadow-lg"
                style={{ backgroundColor: "#008B8B" }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                Lihat Program Kami
              </button>
            </div>
            <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
              <iframe
                className="w-full h-full"
                src="https://youtu.be/ZMjK-uXhlHw?si=gZK8ZAtjhrm5tn59"
                title="English Learning"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Preview Section */}
      <section id="preview" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Mengapa Memilih{" "}
            <span style={{ color: "#008B8B" }}>English for Adab?</span>
          </h2>

          <div
            className="mb-12 p-8 rounded-xl text-center"
            style={{
              backgroundColor: "#E0F7F6",
              borderLeft: "4px solid #FFD700",
              borderRight: "4px solid #FFD700",
            }}
          >
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed italic">
              "وَمِنْ آيَاتِهِ خَلْقُ السَّمَاوَاتِ وَالْأَرْضِ وَاخْتِلَافُ
              أَلْسِنَتِكُمْ وَأَلْوَانِكُمْ ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ
              لِلْعَالِمِينَ"
              <br />
              <br />
              “Dan di antara tanda-tanda (kebesaran)-Nya ialah penciptaan langit
              dan bumi, serta perbedaan bahasa dan warna kulitmu. Sesungguhnya
              pada yang demikian itu benar-benar terdapat tanda-tanda bagi
              orang-orang yang mengetahui.”
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Apa itu English For Adab",
                description:
                  "English for Adab merupakan sebuah program yang berupaya menghadirkan pembelajaran bahasa Inggris yang meaningful dan contextual dengan memuat adab-adab keseharian sebagai materi utama pembelajaran.",
                icon: "👨‍🏫",
              },
              {
                title: "Meaningfull",
                description:
                  "Pembelajaran bahasa Inggris yang meaningful, diharapkan mampu memberikan pengalaman belajar yang lebih bermakna dan menyentuh hati, bukan hanya sekedar pembelajaran grammar dan vocabularies semata.",
                icon: "💬",
              },
              {
                title: "Contextual",
                description:
                  "Pembelajaran bahasa Inggris yang contextual, diharapkan mampu memberikan pengalaman belajar yang lebih relevan dengan keseharian Muslim, sehingga bukan sekedar praktek berbicara tanpa substansi.",
                icon: "✨",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-8 rounded-xl border-2 transition-all hover:shadow-xl"
                style={{ borderColor: "#FFD700" }}
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
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
        "Program kemitraan ini menghadirkan pembelajaran bahasa Inggris yang meaningful dan contextual.",
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
        "Kelas fleksibel yang bisa diikuti dari mana saja",
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

      <p className="text-gray-600 mb-6 font-medium">{program.duration}</p>

      <ul className="space-y-3 mb-8 flex-grow">
        {program.benefits.map((benefit, i) => (
          <li key={i} className="flex items-center gap-3 text-gray-700">
            <span className="text-yellow-400">✓</span> {benefit}
          </li>
        ))}
      </ul>

      <button className="w-full py-3 rounded-lg font-bold bg-[#008B8B] text-white hover:opacity-90">
        Daftar Sekarang
      </button>
    </div>
  ))}
</div>

      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Dokumentasi <span style={{ color: "#008B8B" }}>Kegiatan Kami</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Workshop Bahasa Inggris",
                image: "/galery/4.JPG",
              },
              {
                title: "Speaking Practice Sesi",
                image: "/galery/5.JPG",
              },
              {
                title: "Grammar Session",
                image: "/galery/6.JPG",
              },
              {
                title: "Student Achievement",
                image: "/galery/1.JPG",
              },
              {
                title: "Interactive Learning",
                image: "/galery/2.JPG",
              },
              {
                title: "Sertifikat Wisuda",
                image: "/6.JPG",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:scale-105"
              >
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4" style={{ backgroundColor: "#E0F7F6" }}>
                  <h3 className="text-lg font-bold text-gray-900">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: "#F5F5F5" }}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Hubungi Kami
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                Informasi Kontak
              </h3>
              <div className="space-y-6">
                {[
                  {
                    label: "Email",
                    value: "hidayatullahenglish@gmail.com",
                    icon: "✉️",
                    link: "hidayatullahenglish@gmail.com",
                  },
                  {
                    label: "WhatsApp",
                    value: "+62 812 1757 4774",
                    icon: "📱",
                    link: "https://wa.me/681217574774",
                  },
                  {
                    label: "Lokasi",
                    value: "Kediri-Pare, Indonesia",
                    icon: "📍",
                  },
                  {
                    label: "Jam Kerja",
                    value: "Senin - Jumat: 09:00 - 20:00 WIB",
                    icon: "🕐",
                  },
                ].map((contact, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="text-3xl">{contact.icon}</div>
                    <div>
                      <p className="font-bold text-gray-900">{contact.label}</p>
                      {contact.link &&
                      (contact.label === "WhatsApp" ||
                        contact.label === "Email") ? (
                        <a
                          href={contact.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-teal-600 hover:underline"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-gray-600">{contact.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <a
                href="https://wa.me/6281217574774"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 w-full block text-center py-3 rounded-lg font-bold text-white transition-all hover:shadow-lg"
                style={{ backgroundColor: "#25D366" }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                Hubungi WhatsApp
              </a>
            </div>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-900 font-bold mb-2">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  placeholder="Masukkan nama Anda"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-teal-600"
                />
              </div>
              <div>
                <label className="block text-gray-900 font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="email@example.com"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-teal-600"
                />
              </div>
              <div>
                <label className="block text-gray-900 font-bold mb-2">
                  Pesan
                </label>
                <textarea
                  rows={5}
                  placeholder="Tulis pesan Anda di sini..."
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-teal-600 resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-lg font-bold text-white transition-all hover:shadow-lg"
                style={{ backgroundColor: "#008B8B" }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-12 px-4 sm:px-6 lg:px-8 text-center text-gray-600"
        style={{ backgroundColor: "#1A1A1A" }}
      >
        <div className="max-w-6xl mx-auto">
          <p style={{ color: "#FFD700" }} className="font-bold mb-3">
            English for Adab
          </p>
          <p style={{ color: "#FFFFFF" }} className="mb-4">
            Pembelajaran Bahasa Inggris dengan Etika dan Akhlak Mulia
          </p>
          <p style={{ color: "#AAAAAA" }} className="text-sm">
            © 2025 English for Adab. Semua hak dilindungi.
          </p>
        </div>
      </footer>
    </div>
  );
}
