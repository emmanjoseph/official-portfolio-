"use client";

import { animate, motion } from "motion/react";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import {
    SiNextdotjs,
    SiNodedotjs,
    SiReact,
    SiTailwindcss,
    SiTypescript,
} from "react-icons/si";

export function TechStackSkeleton() {
    const scale = [1, 1.1, 1];
    const transform = ["translateY(0px)", "translateY(-4px)", "translateY(0px)"];

    useEffect(() => {
        const sequence = [1, 2, 3, 4, 5].map((n) => [
            `.tech-circle-${n}`,
            { scale, transform },
            { duration: 0.8 },
        ]);

        // @ts-ignore
        const controls = animate(sequence, { repeat: Infinity, repeatDelay: 1 });
        return () => controls.stop();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="h-[220px] w-full rounded-xl bg-neutral-300 [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)] dark:bg-[rgba(40,40,40,0.70)] md:h-[280px]">
            <div className="relative flex h-full items-center justify-center overflow-hidden p-8">
                <div className="flex shrink-0 flex-row items-center justify-center gap-2">
                    <Container className="tech-circle-1 h-8 w-8">
                        <SiNodedotjs className="h-4 w-4 text-[#5FA04E]" />
                    </Container>
                    <Container className="tech-circle-2 h-12 w-12">
                        <SiReact className="h-6 w-6 text-[#61DAFB]" />
                    </Container>
                    <Container className="tech-circle-3">
                        <SiNextdotjs className="h-8 w-8 text-white" />
                    </Container>
                    <Container className="tech-circle-4 h-12 w-12">
                        <SiTypescript className="h-6 w-6 text-[#3178C6]" />
                    </Container>
                    <Container className="tech-circle-5 h-8 w-8">
                        <SiTailwindcss className="h-4 w-4 text-[#06B6D4]" />
                    </Container>
                </div>

                <div className="absolute top-20 z-40 m-auto h-40 w-px animate-move bg-gradient-to-b from-transparent via-cyan-500 to-transparent">
                    <div className="absolute -left-10 top-1/2 h-32 w-10 -translate-y-1/2">
                        <Sparkles />
                    </div>
                </div>
            </div>
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

    // Generated after mount so server and client HTML match (no hydration warning)
    useEffect(() => {
        setSparks(
            Array.from({ length: 12 }, () => ({
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
                    key={`star-${i}`}
                    initial={{ top: `${s.top}%`, left: `${s.left}%` }}
                    animate={{
                        top: `${s.endTop}%`,
                        left: `${s.endLeft}%`,
                        opacity: s.opacity,
                        scale: [1, 1.2, 0],
                    }}
                    transition={{
                        duration: s.duration,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    style={{
                        position: "absolute",
                        width: "2px",
                        height: "2px",
                        borderRadius: "50%",
                        zIndex: 1,
                    }}
                    className="inline-block bg-white"
                />
            ))}
        </div>
    );
};

const Container = ({
                       className,
                       children,
                   }: {
    className?: string;
    children: React.ReactNode;
}) => (
    <div
        className={cn(
            "flex h-16 w-16 items-center justify-center rounded-full bg-[rgba(248,248,248,0.01)] shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]",
            className
        )}
    >
        {children}
    </div>
);