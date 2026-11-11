
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BiMenu, BiX } from "react-icons/bi";

const navItems = [
    { name: "About", link: "#features" },
    { name: "Changelog", link: "#pricing" },
    { name: "Projects", link: "#projects" },
    { name: "Skills", link: "#contact" },
];

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className="absolute top-0 left-0 right-0 z-50 w-full px-4 py-5">
            <div className="mx-auto flex w-full container items-center justify-between">

                {/* Animated Brand */}
                <Link href="/" className="group flex items-center">
                    <motion.span
                        className="text-2xl font-black tracking-tighter"
                        animate={{
                            backgroundPosition: ["0% 50%", "200% 50%"],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        style={{
                            backgroundImage:
                                "linear-gradient(90deg, #ff4238, #ff9a8b, #ffffff, #ff4238)",
                            backgroundSize: "200% 100%",
                            backgroundClip: "text",
                            WebkitBackgroundClip: "text",
                            color: "transparent",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        ELIEN
                    </motion.span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-10 md:flex">
                    <div className="flex items-center gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.link}
                                className="text-[14px] font-medium transition-colors hover:text-[#ff4238]"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    <Link href="#contact">
                        <Button
                            variant="secondary"
                            className="cursor-pointer rounded-none px-5"
                        >
                            My Resume
                        </Button>
                    </Link>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setOpen(!open)}
                    aria-label={open ? "Close menu" : "Open menu"}
                    aria-expanded={open}
                    className="relative z-[60] md:hidden"
                >
                    {open ? <BiX size={30} /> : <BiMenu size={30} />}
                </button>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {open && (
                        <motion.div
                            initial={{ opacity: 0, y: -15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                            transition={{ duration: 0.3 }}
                            className="absolute left-0 right-0 top-full mx-4 rounded-xl border border-foreground/10 bg-background/95 p-6 shadow-xl backdrop-blur-xl md:hidden"
                        >
                            <nav className="flex flex-col gap-6">
                                {navItems.map((item, i) => (
                                    <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, x: -15 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.08 }}
                                    >
                                        <Link
                                            href={item.link}
                                            onClick={() => setOpen(false)}
                                            className="text-lg font-medium transition-colors hover:text-[#ff4238]"
                                        >
                                            {item.name}
                                        </Link>
                                    </motion.div>
                                ))}

                                <Link
                                    href="#contact"
                                    onClick={() => setOpen(false)}
                                >
                                    <Button className="w-full rounded-none">
                                        My Resume
                                    </Button>
                                </Link>
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </header>
    );
};

export default Navbar;
