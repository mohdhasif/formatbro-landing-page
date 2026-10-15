"use client";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { site } from "@/config/site";
export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="shell nav">
        <a className="logo" href="#" aria-label="FormatBro home">
          <span className="logo-mark">
            f<span>_</span>
          </span>
          Format<span className="blue">Bro</span>
          <span className="logo-dot">®</span>
        </a>
        <nav aria-label="Main navigation" className="desktop-nav">
          <a href="#services">Services</a>
          <a href="#how-it-works">How it works</a>
          <a href="#why-us">Why FormatBro</a>
        </nav>
        <a
          className="nav-book"
          href={site.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
        >
          Let’s talk <ArrowUpRight size={15} />
        </a>
        <button
          className="menu-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-nav"
          className="mobile-nav"
          aria-label="Mobile navigation"
        >
          {[
            ["Services", "services"],
            ["How it works", "how-it-works"],
            ["Why FormatBro", "why-us"],
          ].map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
