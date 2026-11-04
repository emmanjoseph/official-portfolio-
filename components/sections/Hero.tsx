"use client"



import LaserFlow from "@/components/LaserFlow";
import {useRef} from "react";

export function Hero() {
    const cardRef = useRef(null);
  return (
      <div style={{ position: 'relative', height: '900px', overflow: 'hidden' }}>
        <LaserFlow
            surfaceRef={cardRef}
            beamPosition={0.6}
            color="#ff4238"
            intensity={1.8}
            flare={1.5}
            spread={1.5}
            spill={1}
            fog={0.2}
            dust={1.6}
            revealImage="/your-ui.png"
            revealRadius={220}
            revealOpacity={0.6}
            beamWidth={1.5}
            streaks={1.5}
            dots={1}
            pulse={1.5}
            speed={1.5}
            seed={3}
            mouseInteraction
            intro
            className={'w-full'}
        />

        <div
            ref={cardRef}
            className="absolute inset-x-0 top-[52%] -bottom-6 rounded-t-[40px] bg-[#00000] md:left-[18%] md:right-[28%] md:rounded-[40px]"
        >
          {/* Your content here */}
            <div className="pointer-events-none relative z-20 flex h-full flex-col items-center justify-center px-4">
                <div className="max-w-4xl text-center">
                    {/* Title */}
                    <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-6xl md:text-8xl">
                        Build and ship stunning fast and modern apps.
                    </h1>


                    {/* Buttons */}
                    <div className="pointer-events-auto flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <button className="group relative inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-8 text-base font-medium text-black transition-all hover:scale-105 hover:bg-white/90">
                            Get Started
                            <svg
                                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </button>
                        <button className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 text-base font-medium text-white backdrop-blur-sm transition-all hover:border-white/30 hover:bg-white/10">
                            View my resume
                        </button>
                    </div>
                </div>
            </div>
        </div>
      </div>
  );
}