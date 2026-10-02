"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Building2,
  CalendarCheck,
  Award,
  BadgeDollarSign,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Menu,
  X,
  Star,
  Shield,
  Wrench,
  ChevronRight,
  MessageCircle,
  ExternalLink,
  CheckCircle,
  Zap,
} from "lucide-react";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */

const navLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Katalog Produk", href: "#katalog" },
  { label: "Tentang Kami", href: "#tentang" },
  { label: "Hubungi Kami", href: "#kontak" },
];

const stats = [
  {
    icon: <Building2 className="w-7 h-7" />,
    label: "Bidang Perusahaan",
    value: "Material Electrical",
    sub: "Aksesoris Kabel · Jasa Instalasi",
    color: "bg-blue-50 text-blue-900",
    accent: "bg-blue-900",
  },
  {
    icon: <CalendarCheck className="w-7 h-7" />,
    label: "Tahun Terdaftar",
    value: "2014",
    sub: "Lebih dari 10 tahun pengalaman",
    color: "bg-red-50 text-red-700",
    accent: "bg-red-600",
  },
  {
    icon: <Award className="w-7 h-7" />,
    label: "Brand Tersedia",
    value: "6 Brand Unggulan",
    sub: "3M · COOPER · CSSDTL · EAGEN · KAK · MASPION",
    color: "bg-amber-50 text-amber-800",
    accent: "bg-amber-500",
  },
  {
    icon: <BadgeDollarSign className="w-7 h-7" />,
    label: "Kualitas & Harga",
    value: "Terbaik di Kelasnya",
    sub: "Produk bergaransi & harga kompetitif",
    color: "bg-emerald-50 text-emerald-800",
    accent: "bg-emerald-500",
  },
];

const products = [
  {
    name: "Aksesoris Kabel Lainnya Top Ties Plp / Laj 70 - 150",
    desc: "Top Ties adalah aksesoris kabel udara yang sangat penting dalam pengerjaan instalasi listrik untuk mengikat kabel dengan kuat, rapi, dan aman.",
    fullDesc: "Top Ties adalah aksesoris listrik atau aksesoris kabel udara yang sangat penting dalam pengerjaan instalasi.\n\nTop Ties atau pun cable ties ini merupakan pengikat yang sangat kuat untuk menghasilkan pekerjaan terlihat rapi dan aman. Secara umum Top Ties memiliki ukuran 12mm dengan bahan yang elastis dan mudah di gulung, sehingga dapat dengan mudah digunakan sesuai kebutuhan.\n\nTop Ties digunakan untuk memenuhi kebutuhan listrik dan di pakai juga sebagai kabel yang di pakai untuk berbagai kebutuhan peralatan komunikasi.\n\nUntuk memilih Top Ties yang berkualitas maka perlu di perhatikan dengan teliti, jangan sampai bahan fiber di bagian luarnya terdapat lubang atau bahkan patahan yang dapat membuat terjadinya korslet atau hal berbahaya lainnya.",
    image: "/products/top-ties/image1.png",
    images: [
      "/products/top-ties/image1.png",
      "/products/top-ties/image2.png",
      "/products/top-ties/image3.png"
    ],
    price: "Rp. 123.456",
    origin: "Indonesia",
    minOrder: "1 UNIT",
    highlight: false,
    tags: ["PLPLAJ", "Aksesoris Kabel", "Top Ties"],
  },
  {
    name: "Aksesoris Kabel Lainnya Skun Kabel Css/Dtl 70-75",
    desc: "Schoen kabel (sepatu kabel/cable lug) untuk penyambungan kabel ke terminal atau panel. Tersedia tipe AL, CU, dan AL-CU bimetal.",
    fullDesc: "Dalam terminasi kabel, kita sering menjumpai aksesoris kabel seperti schoen kabel. Schoen kabel sering juga disebut sepatu kabel / Cable lug.\n\nSchoen kabel adalah salah satu accessories kabel yang berfungsi untuk penyambungan kabel ke terminal atau panel dengan dibautkan pada bussbar atau panel.\n\nUntuk kebutuhan penyambungan kabel jaringan listrik (Terminasi), Schoen kabel terdiri dari beberapa jenis, yaitu:\n- Kabel schoen AL (aluminium).\n- Kabel schoen CU (tembaga).\n- Kabel schoen AL-CU (bimetal).\n\nAdapun keunggulan kabel schoen berbahan aluminium adalah sebagai berikut:\n- Aluminium 99,5%.\n- Mudah digunakan.\n- Mendukung hingga 20 kV.",
    image: "/products/skun-kabel/image1.png",
    images: [
      "/products/skun-kabel/image1.png",
      "/products/skun-kabel/image2.png",
      "/products/skun-kabel/image3.png"
    ],
    price: "Rp. CALL",
    origin: "Indonesia",
    minOrder: "1 UNIT",
    highlight: false,
    tags: ["CSSDTL", "Aksesoris Kabel", "Skun Kabel"],
  },
  {
    name: "Aksesoris Kabel Lainnya Sipenjol",
    desc: "Sistem Jaringan Online (SIPENJOL). Pelindung isolator berbahan plastik merk Maspion untuk jaringan listrik PLN.",
    fullDesc: "SIPENJOL (Sistem Jaringan Online)\n\nSpesifikasi:\n- Bahan Plastik merk Maspion\n- Ukuran Standard\n- Kegunaan: Digunakan untuk melindungi isolator pada jaringan listrik PLN.\n- Layanan: Siap kirim seluruh Indonesia.",
    image: "/products/sipenjol/image1.png",
    images: [
      "/products/sipenjol/image1.png",
      "/products/sipenjol/image2.png",
      "/products/sipenjol/image3.png"
    ],
    price: "Rp. CALL",
    origin: "Indonesia",
    minOrder: "1 UNIT",
    highlight: false,
    tags: ["MASPION", "Plastik", "Pelindung"],
  },
  {
    name: "Aksesoris Kabel Lainnya Isolator Tumpu",
    desc: "Isolator Keramik Tumpu Pin Post 20kv. Bebas dari cacat pemuaian, anti kontaminasi, dan anti puncture.",
    fullDesc: "Terdapat 2 macam Isolator Tumpu, line post dan pin post.\n\nIsolator Keramik Pin Post merupakan salah satu dari berbagai jenis isolator keramik, diantaranya adalah Isolator Keramik Belimbing, Isolator Keramik Shackle, Isolator Keramik Yoyo (Spool Insulator), Isolator Keramik Pin model RM, Isolator Keramik telur dan lain sebagainya.\n\nBerdasarkan bentuknya, Isolator Listrik berbahan dasar Keramik Pin Post memiliki beberapa keunggulan diantaranya adalah bebas dari cacat yang biasa disebabkan pemuaian, karena semen dan tangkai besi dipasang pada bagian luar keramik. Isolator Keramik Pin Post memiliki sifat anti kontaminasi yang baik, serta bebas dari kerusakan akibat puncture.",
    image: "/products/isolator-tumpu/image1.jpg",
    images: [
      "/products/isolator-tumpu/image1.jpg",
      "/products/isolator-tumpu/image2.png",
      "/products/isolator-tumpu/image3.png"
    ],
    price: "Rp. CALL",
    origin: "Indonesia",
    minOrder: "1 UNIT",
    highlight: true,
    tags: ["NGKWING", "Isolator", "Keramik"],
  },
  {
    name: "Aksesoris Kabel Lainnya CCO",
    desc: "Sambungan konduktor aluminium tanpa beban tarik. Tersedia 14 varian ukuran (CCO 1T1 s/d 11T11).",
    fullDesc: "Jenis (CCO) adalah sambungan konduktor yang terbuat dari bahan aluminium. Gunanya untuk menghubungkan jaringan konduktor aluminium dengan konduktor aluminium tanpa beban tarik.\n\nUntuk mencegah oksidasi aluminium tersebut diberi gemuk.\n\nTersedia dalam berbagai ukuran groove:\n- CCO 1T1 s/d CCO 3T3 (10-35mm2)\n- CCO 1T5 s/d CCO 5T8 (50-150mm2)\n- CCO 5T10 s/d CCO 11T11 (150-300mm2)",
    image: "/products/cco/image1.png",
    images: [
      "/products/cco/image1.png",
      "/products/cco/image2.png",
      "/products/cco/table.png"
    ],
    price: "Rp. CALL",
    origin: "Indonesia",
    minOrder: "1 UNIT",
    highlight: false,
    tags: ["Konektor", "Aluminium"],
  }
];

const whyUs = [
  { text: "Pengalaman lebih dari 10 tahun di industri elektrikal" },
  { text: "Produk original bergaransi dari brand ternama" },
  { text: "Harga kompetitif dengan kualitas terjamin" },
  { text: "Konsultasi teknis gratis untuk pelanggan" },
  { text: "Layanan pengiriman ke seluruh wilayah Jakarta" },
  { text: "Stok produk lengkap & siap kirim" },
];

/* ─────────────────────────────────────────────
   NAVBAR
───────────────────────────────────────────── */

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-blue-900/5"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#beranda" className="flex items-center gap-2 group">
            <div className="group-hover:scale-105 transition-transform duration-200">
              <Image
                src="/logo-cne-transparent.png"
                alt="Cahaya Nusantara Elektrik"
                width={52}
                height={56}
                priority
                className="h-12 w-auto block"
              />
            </div>
            <div className="hidden sm:block">
              <p className="font-bold text-gray-900 leading-tight text-sm md:text-base">
                Cahaya Nusantara
              </p>
              <p className="text-xs text-red-600 font-semibold tracking-widest uppercase">
                Elektrik
              </p>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-blue-900 transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-900 group-hover:w-full transition-all duration-300 rounded-full" />
              </a>
            ))}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#kontak"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-red-200 hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4" />
              Hubungi Kami
            </a>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="bg-white border-t border-gray-100 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors"
            >
              {link.label}
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </a>
          ))}
          <a
            href="#kontak"
            onClick={() => setMobileOpen(false)}
            className="flex items-center justify-center gap-2 mt-2 px-4 py-3 bg-red-600 text-white text-sm font-semibold rounded-xl"
          >
            <Phone className="w-4 h-4" /> Hubungi Kami
          </a>
        </nav>
      </div>
    </header>
  );
}

/* ─────────────────────────────────────────────
   HERO
───────────────────────────────────────────── */

function Hero() {
  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center overflow-hidden hero-stripe pt-20"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-blue-800/30 rounded-full blur-3xl -translate-y-1/4 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-950/40 rounded-full blur-2xl translate-y-1/3 -translate-x-1/4" />
        {/* Grid dots */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* Bottom diagonal cut */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 80L1440 0V80H0Z" fill="white" />
          </svg>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8">
            <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium">
              Berdiri sejak 2014 · Terpercaya & Berpengalaman
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6">
            Solusi Kebutuhan{" "}
            <span className="text-amber-400">Aksesoris Listrik</span> &{" "}
            <span className="relative inline-block">
              Terminasi Kabel
              <span className="absolute -bottom-2 left-0 right-0 h-1 gold-line rounded-full opacity-80" />
            </span>{" "}
            Anda
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-blue-100 leading-relaxed mb-10 max-w-2xl">
            Berdiri sejak 2014, Toko Cahaya Nusantara Elektrik menyediakan berbagai
            produk terbaik seperti{" "}
            <span className="text-amber-300 font-semibold">
              Terminasi Kabel, 3M, Raychem, Trafo, Copper Braid, Scun, Fuse,
            </span>{" "}
            dan{" "}
            <span className="text-amber-300 font-semibold">MCCB</span> dengan
            kualitas terjamin.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#kontak"
              id="hero-cta-kontak"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-2xl text-base transition-all duration-200 hover:shadow-xl hover:shadow-red-900/30 hover:-translate-y-1 group"
            >
              Hubungi Kami
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#katalog"
              id="hero-cta-katalog"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-2xl text-base border border-white/30 transition-all duration-200 hover:-translate-y-1 backdrop-blur-sm group"
            >
              Lihat Katalog
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap items-center gap-6">
            {["Produk Original", "Bergaransi Resmi", "Harga Kompetitif"].map((t) => (
              <div key={t} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-white/80 text-sm font-medium">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   STATS / QUICK FACTS
───────────────────────────────────────────── */

function StatsSection() {
  return (
    <section id="tentang" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-red-600 font-semibold text-sm tracking-widest uppercase mb-2">
            Tentang Kami
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4">
            Mengapa Memilih Kami?
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
            Dengan pengalaman lebih dari satu dekade, kami hadir sebagai mitra
            terpercaya untuk seluruh kebutuhan elektrikal Anda.
          </p>
          <div className="mx-auto mt-5 w-16 h-1 gold-line rounded-full" />
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`group relative rounded-2xl p-6 border border-transparent hover:border-blue-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-default ${s.color}`}
            >
              {/* Accent stripe */}
              <div
                className={`absolute top-0 left-6 right-6 h-1 ${s.accent} rounded-b-full opacity-80`}
              />
              <div className="mt-2 mb-4 p-3 bg-white rounded-xl inline-flex shadow-sm">
                {s.icon}
              </div>
              <p className="text-xs font-semibold uppercase tracking-widest opacity-60 mb-1">
                {s.label}
              </p>
              <p className="text-xl font-extrabold leading-tight mb-2">{s.value}</p>
              <p className="text-xs opacity-70 leading-snug">{s.sub}</p>
            </div>
          ))}
        </div>

        {/* Why us panel */}
        <div className="mt-16 bg-gradient-to-br from-blue-900 to-blue-800 rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-amber-400 font-semibold text-sm tracking-widest uppercase mb-3">
                Keunggulan Kami
              </p>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-snug">
                Mitra Elektrikal Terbaik untuk Bisnis &amp; Proyek Anda
              </h3>
              <p className="text-blue-200 mt-4 text-sm leading-relaxed">
                Kami berkomitmen memberikan produk berkualitas tinggi dengan
                layanan yang ramah dan responsif.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {whyUs.map((w, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4"
                >
                  <CheckCircle className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                  <span className="text-white text-sm leading-snug">{w.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   PRODUCT CATEGORIES (BENTO GRID)
───────────────────────────────────────────── */

function ProductsSection() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  return (
    <section id="katalog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-red-600 font-semibold text-sm tracking-widest uppercase mb-2">
            Katalog Produk
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4">
            Brand &amp; Produk Unggulan
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
            Kami menyediakan produk dari brand-brand terpercaya dengan kualitas
            yang sudah teruji di lapangan.
          </p>
          <div className="mx-auto mt-5 w-16 h-1 gold-line rounded-full" />
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <div
              key={i}
              onClick={() => setSelectedProduct(p)}
              className={`group relative rounded-2xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer overflow-hidden flex flex-col ${
                p.highlight
                  ? "bg-blue-900 border-blue-800 hover:shadow-blue-900/25"
                  : "bg-white border-gray-100 hover:shadow-blue-900/10 hover:border-blue-100"
              }`}
            >
              {/* Image Section */}
              <div className="relative w-full aspect-[4/3] bg-gray-100 flex items-center justify-center overflow-hidden">
                <Image
                  src={p.image || "/products/connector.jpg"}
                  alt={p.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content Section */}
              <div className="p-5 flex flex-col flex-grow">
                <h3
                  className={`text-lg font-bold mb-2 tracking-wide ${
                    p.highlight ? "text-white" : "text-blue-900"
                  }`}
                >
                  {p.name}
                </h3>
                <p
                  className={`text-sm leading-relaxed mb-4 flex-grow ${
                    p.highlight ? "text-blue-200" : "text-gray-500"
                  }`}
                >
                  {p.desc}
                </p>

                {/* Details & Price */}
                <div className={`text-sm font-semibold mb-4 flex flex-col gap-1 ${p.highlight ? "text-amber-300" : "text-amber-600"}`}>
                  <span className="text-base">{p.price}</span>
                  {p.origin && <span className={`text-xs font-normal ${p.highlight ? "text-blue-200" : "text-gray-500"}`}>Asal: {p.origin} | Min: {p.minOrder}</span>}
                </div>

                {/* Tags & Action */}
                <div className="flex flex-wrap gap-2 mt-auto items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-md ${
                          p.highlight
                            ? "bg-white/15 text-white/90"
                            : "bg-blue-50 text-blue-700"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Hover icon */}
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm ${
                      p.highlight ? "bg-amber-400 text-blue-900 group-hover:bg-amber-300" : "bg-blue-50 text-blue-900 group-hover:bg-blue-900 group-hover:text-white"
                    }`}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm mb-4">
            Tidak menemukan produk yang Anda cari? Hubungi kami untuk konsultasi.
          </p>
          <a
            href="#kontak"
            id="catalog-cta"
            className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold text-sm rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-red-200"
          >
            Tanya Produk <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm transition-opacity" onClick={() => setSelectedProduct(null)}>
          <div 
            className="bg-white rounded-3xl w-full max-w-5xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col md:flex-row relative animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Images Column */}
            <div className="w-full md:w-1/2 p-6 md:p-8 bg-gray-50 flex flex-col overflow-y-auto">
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-4 bg-white border border-gray-200 shadow-sm">
                <Image src={selectedProduct.currentImage || selectedProduct.image} alt={selectedProduct.name} fill className="object-contain p-4" />
              </div>
              {selectedProduct.images && selectedProduct.images.length > 1 && (
                <div className="grid grid-cols-4 gap-3">
                  {selectedProduct.images.map((img: string, idx: number) => (
                    <div 
                      key={idx} 
                      className={`relative aspect-square rounded-xl overflow-hidden cursor-pointer border-2 transition-all bg-white ${
                        (selectedProduct.currentImage || selectedProduct.image) === img ? "border-blue-600 shadow-md ring-2 ring-blue-100" : "border-gray-200 hover:border-blue-400"
                      }`}
                      onClick={() => setSelectedProduct({ ...selectedProduct, currentImage: img })}
                    >
                      <Image src={img} alt={`Gallery ${idx}`} fill className="object-cover" />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Content Column */}
            <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col overflow-y-auto">
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProduct.tags.map((tag: string) => (
                  <span key={tag} className="text-xs font-bold uppercase tracking-wider px-3 py-1 bg-blue-50 text-blue-800 rounded-lg">
                    {tag}
                  </span>
                ))}
              </div>
              
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2 leading-tight">{selectedProduct.name}</h2>
              <div className="text-2xl font-semibold text-red-600 mb-6">{selectedProduct.price}</div>
              
              <div className="prose prose-sm text-gray-600 mb-8 whitespace-pre-wrap flex-grow">
                {selectedProduct.fullDesc || selectedProduct.desc}
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8 mt-auto">
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Asal Negara</p>
                  <p className="text-sm font-semibold text-gray-900">{selectedProduct.origin || "-"}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Minimal Order</p>
                  <p className="text-sm font-semibold text-gray-900">{selectedProduct.minOrder || "-"}</p>
                </div>
              </div>

              <a 
                href="https://wa.me/6282114592526" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-4 rounded-xl font-bold transition-all hover:shadow-lg hover:shadow-green-200 hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5" />
                Hubungi via WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

/* ─────────────────────────────────────────────
   CONTACT & LOCATION
───────────────────────────────────────────── */

function ContactSection() {
  return (
    <section id="kontak" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-red-600 font-semibold text-sm tracking-widest uppercase mb-2">
            Hubungi Kami
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4">
            Temukan &amp; Hubungi Kami
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
            Kami siap melayani Anda. Kunjungi toko kami atau hubungi melalui
            kontak di bawah ini.
          </p>
          <div className="mx-auto mt-5 w-16 h-1 gold-line rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left: Map */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl shadow-blue-900/10 border border-gray-100 min-h-80">
            <iframe
              title="Lokasi Cahaya Nusantara Elektrik"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.6706497697437!2d106.84604487499248!3d-6.196578993792432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d3c56f0b4b%3A0x6b8e3e3c3c3c3c3c!2sJl.%20Salemba%20Raya%2C%20Jakarta%20Pusat%2C%20DKI%20Jakarta!5e0!3m2!1sid!2sid!4v1696200000000!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "380px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
            {/* Overlay badge */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg flex items-center gap-3">
                <div className="w-8 h-8 bg-red-600 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold text-blue-900">
                    Cahaya Nusantara Elektrik
                  </p>
                  <p className="text-xs text-gray-500 leading-snug">
                    Pasar Kenari Lama Lt 1 No 30, Jakarta Pusat
                  </p>
                </div>
                <a
                  href="https://maps.google.com/?q=Jl.+Salemba+Raya+Pasar+Kenari+Lama+Jakarta+Pusat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto shrink-0 text-blue-900 hover:text-red-600 transition-colors"
                  aria-label="Buka Google Maps"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Contact Details */}
          <div className="flex flex-col gap-5">
            {/* Email */}
            <a
              href="mailto:azzahrameilaniputri@gmail.com"
              id="contact-email"
              className="group flex items-start gap-4 p-6 bg-gray-50 hover:bg-blue-50 border border-gray-100 hover:border-blue-200 rounded-2xl transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-900/8"
            >
              <div className="w-12 h-12 bg-blue-900 group-hover:bg-blue-800 rounded-2xl flex items-center justify-center shrink-0 transition-colors">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">
                  Email
                </p>
                <p className="text-blue-900 font-bold text-sm md:text-base break-all group-hover:text-blue-700 transition-colors">
                  azzahrameilaniputri@gmail.com
                </p>
                <p className="text-gray-400 text-xs mt-1 flex items-center gap-1">
                  Kirim email <ExternalLink className="w-3 h-3" />
                </p>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/6282114592526"
              target="_blank"
              rel="noopener noreferrer"
              id="contact-whatsapp"
              className="group flex items-start gap-4 p-6 bg-emerald-50 hover:bg-emerald-100 border border-emerald-100 hover:border-emerald-300 rounded-2xl transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-900/10"
            >
              <div className="w-12 h-12 bg-emerald-500 group-hover:bg-emerald-600 rounded-2xl flex items-center justify-center shrink-0 transition-colors">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-emerald-600/60 mb-1">
                  WhatsApp
                </p>
                <p className="text-emerald-800 font-bold text-lg group-hover:text-emerald-700 transition-colors">
                  +62 821-1459-2526
                </p>
                <p className="text-emerald-600 text-xs mt-1 flex items-center gap-1 font-medium">
                  Chat sekarang <ExternalLink className="w-3 h-3" />
                </p>
              </div>
            </a>

            {/* Address */}
            <div className="flex items-start gap-4 p-6 bg-gray-50 border border-gray-100 rounded-2xl">
              <div className="w-12 h-12 bg-red-600 rounded-2xl flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">
                  Alamat Toko
                </p>
                <p className="text-blue-900 font-bold text-sm md:text-base leading-snug">
                  Jalan Salemba Raya
                </p>
                <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                  Pasar Kenari Lama Lt 1 No 30,
                  <br />
                  Jakarta Pusat, DKI Jakarta, Indonesia
                </p>
              </div>
            </div>

            {/* Operating hours */}
            <div className="flex items-start gap-4 p-6 bg-amber-50 border border-amber-100 rounded-2xl">
              <div className="w-12 h-12 bg-amber-500 rounded-2xl flex items-center justify-center shrink-0">
                <CalendarCheck className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-amber-600/60 mb-1">
                  Jam Operasional
                </p>
                <p className="text-amber-900 font-bold text-sm md:text-base">
                  Senin – Jumat
                </p>
                <p className="text-amber-700 text-sm mt-1">08.00 – 17.00 WIB</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   FOOTER
───────────────────────────────────────────── */

function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="h-1 gold-line" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-white rounded-2xl p-2 shadow-md group-hover:scale-105 transition-transform">
                <Image
                  src="/logo-cne-transparent.png"
                  alt="Cahaya Nusantara Elektrik"
                  width={52}
                  height={56}
                  className="h-11 w-auto block"
                />
              </div>
              <div>
                <p className="font-bold text-white leading-tight text-sm">
                  Cahaya Nusantara
                </p>
                <p className="text-xs text-red-400 font-semibold tracking-widest uppercase">
                  Elektrik
                </p>
              </div>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed">
              Solusi terpercaya untuk kebutuhan aksesoris listrik dan terminasi
              kabel Anda sejak 2014.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href="mailto:azzahrameilaniputri@gmail.com"
                aria-label="Email"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <Mail className="w-4 h-4 text-blue-200" />
              </a>
              <a
                href="https://wa.me/6282114592526"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-xl bg-emerald-600 hover:bg-emerald-500 flex items-center justify-center transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-white" />
              </a>
              <a
                href="https://maps.google.com/?q=Jl.+Salemba+Raya+Pasar+Kenari+Lama+Jakarta+Pusat"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Lokasi"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <MapPin className="w-4 h-4 text-blue-200" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-amber-400 mb-5">
              Navigasi
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-blue-200 hover:text-white text-sm transition-colors flex items-center gap-2 group"
                  >
                    <ChevronRight className="w-3 h-3 text-amber-400/60 group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact summary */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-amber-400 mb-5">
              Kontak
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                <span className="text-blue-200 text-sm leading-snug">
                  Jalan Salemba Raya, Pasar Kenari Lama Lt 1 No 30, Jakarta
                  Pusat, DKI Jakarta
                </span>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href="https://wa.me/6282114592526"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-200 hover:text-white text-sm transition-colors"
                >
                  +62 821-1459-2526
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-300 shrink-0" />
                <a
                  href="mailto:azzahrameilaniputri@gmail.com"
                  className="text-blue-200 hover:text-white text-sm transition-colors break-all"
                >
                  azzahrameilaniputri@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-blue-300 text-xs">
            © 2026 Cahaya Nusantara Elektrik. Semua hak dilindungi.
          </p>
          <p className="text-blue-400 text-xs">
            Jl. Salemba Raya · Jakarta Pusat · Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────────────────────────────
   PAGE ROOT
───────────────────────────────────────────── */

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <StatsSection />
      <ProductsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
