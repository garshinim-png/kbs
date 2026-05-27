import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function KBSWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { label: "Products", href: "#products" },
    { label: "Explore", href: "#explore" },
    { label: "Spices", href: "#spices" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Navbar */}
      <header className="flex justify-between items-center px-6 py-4 shadow-md bg-white sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-orange-600">KBS</h1>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-orange-600 transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        {/* Hamburger button (mobile only) */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-gray-800 transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-gray-800 transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-gray-800 transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </header>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white shadow-md overflow-hidden sticky top-[64px] z-40"
          >
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="block px-6 py-3 text-sm font-medium border-b border-gray-100 hover:bg-orange-50 hover:text-orange-600"
              >
                {l.label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Hero Banner */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden flex items-center justify-center text-white">
        {/* Background Video like Jayasakti */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src="https://cdn.coverr.co/videos/coverr-spices-on-table-1584/1080p.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Pure Spices. True Tradition.</h2>
          <p className="text-base md:text-lg mb-6">Premium Indian spices & prayer essentials by KBS</p>
          <a href="#spices" className="bg-orange-600 px-6 py-3 rounded-full font-semibold hover:bg-orange-700 inline-block">
            Explore Products
          </a>
        </div>
      </section>

      {/* Explore Section (like Baba's) */}
      <section id="explore" className="py-12 px-4 md:px-6">
        <h2 className="text-2xl font-semibold text-center mb-10">Explore</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Recipes",
              desc: "Discover delicious recipes using our spices",
              img: "https://images.unsplash.com/photo-1604908176997-431a5f1e94e0"
            },
            {
              title: "Products",
              desc: "Explore our wide range of spices & prayer items",
              img: "https://images.unsplash.com/photo-1617191518500-6d4d1c4d8d0c"
            },
            {
              title: "Traditions",
              desc: "Learn about Indian rituals and traditions",
              img: "https://images.unsplash.com/photo-1604085579086-8d5a2c2d0e0f"
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="rounded-2xl overflow-hidden shadow-lg cursor-pointer"
            >
              <img src={item.img} className="h-48 w-full object-cover" alt={item.title} />
              <div className="p-4 bg-white">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Explore Spices Gallery */}
      <section id="spices" className="py-12 px-6 bg-amber-50">
        <h2 className="text-2xl font-semibold text-center mb-2">Explore Our Spices</h2>
        <p className="text-center text-gray-500 mb-10 text-sm">Premium cooking spices sourced for quality and freshness</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 max-w-6xl mx-auto">
          {[
            { name: "Cashew Nuts", malay: "Kacang Gajus", img: "/images/spices/cashew-nuts.jpg" },
            { name: "Kerisik Asli", malay: "Kelapa Parut Goreng", img: "/images/spices/kerisik.jpg" },
            { name: "Cloves", malay: "Bunga Cengkih", img: "/images/spices/cloves.jpg" },
            { name: "Star Aniseed", malay: "Bunga Lawang", img: "/images/spices/star-aniseed.jpg" },
            { name: "Candlenut", malay: "Buah Keras", img: "/images/spices/candlenut.jpg" },
            { name: "Cardamom", malay: "Buah Pelaga", img: "/images/spices/cardamom.jpg" },
            { name: "Cinnamon", malay: "Kayu Manis", img: "/images/spices/cinnamon.jpg" },
            { name: "Cumin Seed", malay: "Jintan Putih", img: "/images/spices/cumin.jpg" },
            { name: "Fennel Seed", malay: "Jintan Manis", img: "/images/spices/fennel.jpg" },
            { name: "Coriander", malay: "Ketumbar", img: "/images/spices/coriander.jpg" },
            { name: "Turmeric", malay: "Kunyit", img: "/images/spices/turmeric.jpg" },
            { name: "Black Pepper", malay: "Lada Hitam", img: "/images/spices/black-pepper.jpg" },
            { name: "Chili Powder", malay: "Serbuk Cili", img: "/images/spices/chili-powder.jpg" },
            { name: "Mustard Seed", malay: "Biji Sawi", img: "/images/spices/mustard-seed.jpg" },
            { name: "Bay Leaves", malay: "Daun Salam", img: "/images/spices/bay-leaves.jpg" },
            { name: "Pickle Bottle", malay: "Jeruk Dalam Botol", img: "/images/spices/pickle.jpg" },
          ].map((spice, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="rounded-xl overflow-hidden shadow-md bg-white cursor-pointer"
            >
              <div className="h-32 bg-orange-100 overflow-hidden flex items-center justify-center">
                <img
                  src={spice.img}
                  alt={spice.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentNode.classList.add("flex", "flex-col", "items-center", "justify-center");
                    e.target.parentNode.innerHTML = `<span class="text-3xl">🌿</span>`;
                  }}
                />
              </div>
              <div className="p-3 text-center">
                <p className="font-semibold text-sm text-gray-800">{spice.name}</p>
                <p className="text-xs text-orange-500">{spice.malay}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Products Grid */}
      <section id="products" className="py-12 px-6 bg-gray-50">
        <h2 className="text-2xl font-semibold text-center mb-10">Our Products</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "Turmeric",
            "Cumin",
            "Coriander",
            "Chili Powder",
            "Cardamom",
            "Cloves",
            "Agarbatti",
            "Camphor"
          ].map((item, i) => (
            <div key={i} className="text-center bg-white p-4 rounded-xl shadow">
              <div className="h-20 bg-orange-100 rounded mb-3"></div>
              <p className="text-sm font-medium">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-12 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-4">About KBS</h2>
        <p className="max-w-2xl mx-auto text-gray-600">
          KBS distributes premium spices and Indian prayer essentials across Malaysia. We focus on authenticity, freshness, and cultural tradition in every product we deliver.
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="py-12 px-6 text-center bg-orange-50">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p>Email: contact@kbs.com</p>
        <p>Phone: +60 123 456 789</p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-4">
        <p>© {new Date().getFullYear()} KBS</p>
      </footer>
    </div>
  );
}
