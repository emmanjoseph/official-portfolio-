"use client";

import { motion, useAnimate } from "motion/react";
import React, { useEffect, useState } from "react";
import type { IconType } from "react-icons";
import { cn } from "@/lib/utils";

export type SkeletonTech = {
    name: string;
    icon: IconType;
    color: string;
};

const tier = (i: number, n: number) => {
    const d = Math.abs(i - (n - 1) / 2);
    if (d < 0.75) return { box: "h-14 w-14", icon: "size-7" };
    if (d < 1.25) return { box: "h-12 w-12", icon: "size-6" };
    return { box: "h-9 w-9", icon: "size-4" };
};

export function TechSkeleton({
                                 technologies,
                                 delay = 0,
                                 className,
                             }: {
    technologies: SkeletonTech[];
    delay?: number;
    className?: string;
}) {
    const [scope, animate] = useAnimate();

    useEffect(() => {
        const sequence = technologies.map((_, i) => [
            `.tech-circle-${i}`,
            {
                scale: [1, 1.1, 1],
                transform: ["translateY(0px)", "translateY(-4px)", "translateY(0px)"],
            },
            { duration: 0.8 },
        ]);

        // @ts-ignore - motion's sequence typing doesn't accept repeat options
        const controls = animate(sequence, { repeat: Infinity, repeatDelay: 1 });
        return () => controls.stop();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div
            ref={scope}
            className={cn(
                "relative overflow-hidden border border-neutral-900/15 bg-neutral-950",
                className
            )}
        >
            {/* soft center glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.10),transparent_70%)]" />

            {/* icons */}
            <div className="relative flex h-full items-center justify-center gap-2 p-6">
                {technologies.map((tech, i) => {
                    const Icon = tech.icon;
                    const t = tier(i, technologies.length);
                    return (
                        <div
                            key={tech.name}
                            title={tech.name}
                            className={cn(
                                `tech-circle-${i}`,
                                t.box,
                                "flex items-center justify-center rounded-full bg-[rgba(248,248,248,0.01)] shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]"
                            )}
                        >
                            <Icon className={t.icon} style={{ color: tech.color }} />
                        </div>
                    );
                })}
            </div>

            {/* moving beam */}
            <div
                className="absolute inset-y-6 left-1/2 z-10 w-px animate-move bg-gradient-to-b from-transparent via-[#ff4238] to-transparent"
                style={{ animationDelay: `${delay}s` }}
            >
                <div className="absolute -left-10 top-1/2 h-32 w-10 -translate-y-1/2">
                    <Sparkles />
                </div>
            </div>

            {/* corner crosshairs */}
            <span className="absolute left-1.5 top-1 font-mono text-xs text-white/50">+</span>
            <span className="absolute right-1.5 top-1 font-mono text-xs text-white/50">+</span>
            <span className="absolute bottom-1 left-1.5 font-mono text-xs text-white/50">+</span>
            <span className="absolute bottom-1 right-1.5 font-mono text-xs text-white/50">+</span>
        </div>
    );
}

type Spark = {
    top: number;
    left: number;
    endTop: number;
    endLeft: number;
    opacity: number;
    duration: number;
};

const Sparkles = () => {
    const [sparks, setSparks] = useState<Spark[]>([]);

    // Generated after mount so server and client HTML match
    useEffect(() => {
        setSparks(
            Array.from({ length: 10 }, () => ({
                top: Math.random() * 100,
                left: Math.random() * 100,
                endTop: Math.random() * 100,
                endLeft: Math.random() * 100,
                opacity: Math.random(),
                duration: Math.random() * 2 + 4,
            }))
        );
    }, []);

    return (
        <div className="absolute inset-0">
            {sparks.map((s, i) => (
                <motion.span
                    key={i}
                    initial={{ top: `${s.top}%`, left: `${s.left}%` }}
                    animate={{
                        top: `${s.endTop}%`,
                        left: `${s.endLeft}%`,
                        opacity: s.opacity,
                        scale: [1, 1.2, 0],
                    }}
                    transition={{ duration: s.duration, repeat: Infinity, ease: "linear" }}
                    style={{
                        position: "absolute",
                        width: "2px",
                        height: "2px",
                        borderRadius: "50%",
                    }}
                    className="inline-block bg-white"
                />
            ))}
        </div>
    );
};