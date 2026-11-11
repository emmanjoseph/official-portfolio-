"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  IconBrandGithub,
  IconBrandX,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconMail,
  IconPhone,
  IconMapPin,
  IconArrowUp,
  IconCopy,
  IconCheck,
} from "@tabler/icons-react";

const ACCENT = "#ff4238";

const Label = ({ children }: { children: React.ReactNode }) => (
    <p className="font-mono text-[11px] uppercase tracking-wider text-neutral-500">
      {children}
    </p>
);

const cell = "border-b border-neutral-200/15 p-5 sm:p-6 lg:border-r";

const Ruler = () => (
    <div className="flex items-center gap-3 px-3 py-2 font-mono text-sm text-neutral-200">
      <span>+</span>
      <div
          className="h-1.5 flex-1"
          style={{
            backgroundImage:
                "repeating-linear-gradient(90deg, rgba(255,255,255,0.35) 0 1px, transparent 1px 8px)",
          }}
      />
      <span>+</span>
    </div>
);

export default function Footer() {
  const [hasCopied, setHasCopied] = useState(false);
  const email = "emmajoseph607@gmail.com";
  const phone = "+254700441147";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#timeline" },
    { name: "Projects", href: "#projects" },
    { name: "Tech Stack", href: "#skills" },
  ];

  const socialLinks = [
    { name: "GitHub", href: "https://github.com", icon: IconBrandGithub },
    { name: "X (Twitter)", href: "https://x.com", icon: IconBrandX },
    { name: "LinkedIn", href: "https://linkedin.com", icon: IconBrandLinkedin },
    {
      name: "WhatsApp",
      href: `https://wa.me/${phone.replace("+", "")}`,
      icon: IconBrandWhatsapp,
    },
  ];

  const linkClass =
      "text-[15px] text-neutral-200 transition-colors hover:text-[#ff4238]";

  return (
      <footer className="text-[#f4f3ef] bg-black">
        <div className="mx-auto container border-x border-neutral-200/15">
          {/* Top grid */}
          <div className="grid grid-cols-1 border-b border-neutral-200/15 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.2fr]">
            {/* Headline */}
            <div className={cell}>
              <h2 className="text-2xl font-bold uppercase leading-[0.95] tracking-tighter sm:text-3xl">
                Emmanuel Mulwa
                <br />
                Frontend &amp; Full-Stack
                <br />
                Developer
              </h2>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-neutral-600">
                Crafting fast, accessible, and modern digital experiences.
              </p>
            </div>

            {/* Navigation */}
            <div className={cell}>
              <Label>Navigation</Label>
              <ul className="mt-5 space-y-3">
                {navLinks.map((link, i) => (
                    <li key={link.name}>
                      <Link
                          href={link.href}
                          className={`${linkClass} ${i === 0 ? "text-[#ff4238]" : ""}`}
                      >
                        {link.name}
                      </Link>
                    </li>
                ))}
              </ul>
            </div>

            {/* Email */}
            <div className={cell}>
              <Label>Email</Label>
              <button
                  type="button"
                  onClick={handleCopyEmail}
                  title="Click to copy email"
                  className="group mt-5 flex items-start gap-2 text-left text-[15px] transition-colors hover:text-[#ff4238]"
              >
                <IconMail size={16} className="mt-1 shrink-0 text-neutral-400 group-hover:text-[#ff4238]" />
                <span className="break-all">{email}</span>
                {hasCopied ? (
                    <IconCheck size={14} className="mt-1 shrink-0 text-emerald-600" />
                ) : (
                    <IconCopy size={14} className="mt-1 shrink-0 text-neutral-400 opacity-0 transition-opacity group-hover:opacity-100" />
                )}
              </button>
            </div>

            {/* Social */}
            <div className={cell}>
              <Label>Social</Label>
              <ul className="mt-5 space-y-3">
                {socialLinks.map((s) => {
                  const Icon = s.icon;
                  return (
                      <li key={s.name}>
                        <a
                            href={s.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${linkClass} inline-flex items-center gap-2`}
                        >
                          <Icon size={16} className="text-neutral-400" />
                          {s.name}
                        </a>
                      </li>
                  );
                })}
              </ul>
            </div>

            {/* Monogram (spans 2 rows on desktop) */}
            <div className="hidden items-center justify-center border-b border-neutral-900/15 p-6 lg:row-span-2 lg:flex">
              <svg viewBox="0 0 200 200" className="w-full max-w-[220px]" fill="none" stroke="#1c1c1c" strokeWidth="3" strokeLinejoin="round">
                <rect x="20" y="20" width="160" height="160" rx="6" />
                <path d="M20 20 L50 -5 M180 20 L210 -5 M180 180 L210 155" strokeWidth="2" opacity="0.5" />
                <text x="100" y="128" textAnchor="middle" fontSize="92" fontWeight="900" fill="none" stroke="#1c1c1c" strokeWidth="2.5" style={{ fontFamily: "system-ui, sans-serif" }}>
                  EM
                </text>
                <circle cx="164" cy="36" r="6" fill={ACCENT} stroke="none" />
              </svg>
            </div>

            {/* Availability */}
            <div className={cell}>
              <Label>Status</Label>
              <div className="mt-5 inline-flex items-center gap-2.5 rounded-full border border-emerald-600/25 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-700">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
                Available for freelance &amp; full-time roles
              </div>
            </div>

            {/* Location */}
            <div className={cell}>
              <Label>Location</Label>
              <p className="mt-5 flex items-start gap-2 text-[15px]">
                <IconMapPin size={16} className="mt-0.5 shrink-0 text-[#ff4238]" />
                <span>
                Nairobi, Kenya
                <br />
                <span className="text-neutral-500">Working worldwide</span>
              </span>
              </p>
            </div>

            {/* Phone / WhatsApp */}
            <div className={cell}>
              <Label>Call &amp; chat</Label>
              <div className="mt-5 space-y-3">
                <a href={`tel:${phone}`} className={`${linkClass} flex items-center gap-2`}>
                  <IconPhone size={16} className="text-neutral-400" />
                  +254 700 441 147
                </a>
                <a
                    href={`https://wa.me/${phone.replace("+", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${linkClass} flex items-center gap-2`}
                >
                  <IconBrandWhatsapp size={16} className="text-neutral-400" />
                  WhatsApp message
                </a>
              </div>
            </div>

            {/* Stack */}
            <div className={cell}>
              <Label>Built with</Label>
              <p className="mt-5 text-[15px]"> Next.JS • Tailwind • Motion</p>
            </div>
          </div>

          {/* Blueprint wordmark */}
          <div className="border-b border-neutral-200/15 text-neutral-800">
            <Ruler />
            <div className="px-4 py-6 sm:px-10 sm:py-10">
              <svg viewBox="0 0 1200 250" className="w-full" aria-label="Emmanuel" role="img">
                <text
                    x="0"
                    y="225"
                    textLength="1200"
                    lengthAdjust="spacingAndGlyphs"
                    fill="none"
                    stroke="#262626"
                    strokeWidth="1.5"
                    fontSize="270"
                    fontWeight="800"
                    style={{ fontFamily: "system-ui, sans-serif" }}
                >
                  ELIEN.DEV
                </text>
              </svg>
            </div>
            <Ruler />
          </div>


          {/* Bottom bar */}
          <div className="flex flex-col items-stretch sm:flex-row sm:items-center sm:justify-between">
            <p className="p-4 font-mono text-[11px] uppercase tracking-wider text-neutral-600 sm:px-6">
              ©{new Date().getFullYear()} Emmanuel Mulwa. All rights reserved.
            </p>
            <button
                type="button"
                onClick={scrollToTop}
                className="group flex items-center justify-center gap-2 border-t border-neutral-900/15 p-4 text-sm font-medium transition-colors hover:text-[#ff4238] sm:border-l sm:border-t-0 sm:px-6"
            >
              Back to top
              <span className="flex size-6 items-center justify-center rounded-full border border-neutral-900/20 transition-colors group-hover:border-[#ff4238]/60 group-hover:bg-[#ff4238]/10">
              <IconArrowUp size={13} className="transition-transform group-hover:-translate-y-0.5" />
            </span>
            </button>
          </div>
        </div>
      </footer>
  );
}