"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { brand } from "@/data/brand";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/our-story", label: "Our Story" },
  { href: "/the-craft", label: "The Craft" },
  { href: "/our-pede", label: "Our Pede" },
  { href: "/the-journey", label: "The Journey" },
  { href: "/gallery", label: "Gallery" },
  { href: "/visit-us", label: "Visit Us" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 60);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    setActiveLink(window.location.pathname);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#47191D] shadow-xl shadow-black/20"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* Top ornamental bar */}
        <div
          className="h-[2px]"
          style={{
            background:
              "linear-gradient(90deg, transparent, #C49A52, #C49A52, transparent)",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo / Brand */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-gold/70 bg-white/95 p-0.5 shadow-md transition-transform group-hover:scale-105">
                <Image
                  src="/images/bpw-logo.jpg"
                  alt="Bhaiji Pede Wale Logo"
                  fill
                  className="object-contain p-0.5"
                  priority
                />
              </div>
              <div>
                <p
                  className="font-serif font-semibold text-sm leading-tight tracking-wide"
                  style={{ color: "#F7F0E4" }}
                >
                  Bhaiji Pede Wale
                </p>
                <p
                  className="text-xs tracking-widest uppercase"
                  style={{ color: "#C49A52" }}
                >
                  Since {brand.since} · Churu
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-300 group ${
                    activeLink === link.href
                      ? "text-gold"
                      : "text-ivory/80 hover:text-ivory"
                  }`}
                  style={{
                    color:
                      activeLink === link.href ? "#C49A52" : "rgba(247,240,228,0.8)",
                  }}
                  onClick={() => setActiveLink(link.href)}
                >
                  {link.label}
                  <span
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] transition-all duration-300 group-hover:w-3/4"
                    style={{
                      background: "#C49A52",
                      width: activeLink === link.href ? "75%" : "0",
                    }}
                  />
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 relative z-10"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileOpen}
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`block h-[1.5px] transition-all duration-300 origin-center ${
                    isMobileOpen ? "rotate-45 translate-y-[9px]" : ""
                  }`}
                  style={{ background: "#C49A52" }}
                />
                <span
                  className={`block h-[1.5px] transition-all duration-300 ${
                    isMobileOpen ? "opacity-0 scale-x-0" : ""
                  }`}
                  style={{ background: "#C49A52" }}
                />
                <span
                  className={`block h-[1.5px] transition-all duration-300 origin-center ${
                    isMobileOpen ? "-rotate-45 -translate-y-[9px]" : ""
                  }`}
                  style={{ background: "#C49A52" }}
                />
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0"
              style={{ background: "rgba(41,35,31,0.9)" }}
              onClick={() => setIsMobileOpen(false)}
            />

            {/* Menu panel */}
            <motion.div
              className="absolute right-0 top-0 bottom-0 w-72 flex flex-col pt-24 pb-10 px-8"
              style={{ background: "#47191D" }}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {/* Ornamental top */}
              <div
                className="absolute top-20 left-8 right-8 h-[1px]"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, #C49A52, transparent)",
                }}
              />

              <nav className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07, duration: 0.4 }}
                  >
                    <Link
                      href={link.href}
                      className="block py-3 text-lg font-serif transition-colors duration-200"
                      style={{
                        color:
                          activeLink === link.href
                            ? "#C49A52"
                            : "rgba(247,240,228,0.85)",
                        borderBottom: "1px solid rgba(196,154,82,0.15)",
                      }}
                      onClick={() => {
                        setActiveLink(link.href);
                        setIsMobileOpen(false);
                      }}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto">
                <p
                  className="text-xs tracking-widest uppercase text-center"
                  style={{ color: "#C49A52" }}
                >
                  {brand.name}
                </p>
                <p
                  className="text-xs text-center mt-1"
                  style={{ color: "rgba(247,240,228,0.5)" }}
                >
                  Since {brand.since} · Churu, Rajasthan
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
