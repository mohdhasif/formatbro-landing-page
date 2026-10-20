"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/config/site";
import { BrandIcon } from "@/components/brand-icons";

const links = [
  ["Servis", "servis"],
  ["Cara booking", "cara-booking"],
  ["Soalan lazim", "faq"],
];

export function Logo() {
  return (
    <a className="logo" href="#" aria-label="FormatBro — laman utama">
      <span className="logo-mark" aria-hidden="true">
        f<span>_</span>
      </span>
      Format<span className="accent">Bro</span>
    </a>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`header ${scrolled || open ? "is-scrolled" : ""}`}>
      <div className="shell nav">
        <Logo />
        <nav aria-label="Navigasi utama" className="desktop-nav">
          {links.map(([label, id]) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </nav>
        <a
          className="nav-book"
          href={site.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
        >
          <BrandIcon name="WhatsApp" size={16} />
          WhatsApp
        </a>
        <button
          className="menu-toggle"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" className="mobile-nav" aria-label="Navigasi mudah alih">
          {links.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
