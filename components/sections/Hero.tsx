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
                </div>
            </div>
        </div>
      </div>
  );
}