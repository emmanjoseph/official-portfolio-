import React from "react";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import { IconBrandWhatsapp } from "@tabler/icons-react";

export function CTA() {
  return (
    <div className="border-y">
           <div className="relative mx-auto flex w-full max-w-350 items-center justify-center py-28">
      <DottedGlowBackground
        className="pointer-events-none mask-radial-to-90% mask-radial-at-center opacity-20 dark:opacity-100"
        opacity={1}
        gap={10}
        radius={1.6}
        colorLightVar="--color-neutral-500"
        glowColorLightVar="--color-neutral-600"
        colorDarkVar="--color-neutral-500"
        glowColorDarkVar="--color-sky-800"
        backgroundOpacity={0}
        speedMin={0.3}
        speedMax={1.6}
        speedScale={1}
      />

      <div className="relative z-10 flex w-full flex-col items-center justify-between space-y-6 px-8 py-16 text-center md:flex-row">
        <div>
          <h2 className="text-center text-4xl font-normal tracking-tight text-neutral-900 sm:text-5xl md:text-left dark:text-neutral-400">
            Ready to collaborate <br /> and take your project to the{" "}
            <span className="font-bold dark:text-white">Next level</span>?
          </h2>
         <p className="mt-4 max-w-lg text-center text-base text-neutral-600 md:text-left dark:text-neutral-300">
            Whether you have an existing project that needs enhancement or a new idea you&apos;d like to bring to life, I&apos;m here to help. Let&apos;s work together to build something exceptional.
          </p>

         
        </div>


        <div className="w-full md:w-1/3 flex flex-col gap-4 sm:flex-row">
          <button className="mt-5 w-full relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
    <IconBrandWhatsapp className="size-5 mx-4"/> Send a message
  </span>
</button>
        </div>
      </div>
    </div>
    </div>
 
  );
}
