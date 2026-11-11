import React from "react";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <div className="border-y">
           <div className="relative mx-auto flex w-full container items-center justify-center py-28">
      <DottedGlowBackground
        className="w-full pointer-events-none mask-radial-to-90% mask-radial-at-center opacity-20 dark:opacity-100"
        opacity={1}
        gap={10}
        radius={1.9}
        color="#ffffff"
        glowColor="#ff4238"
        darkColor="#ffffff"
        darkGlowColor="#ff4238"
        backgroundOpacity={0}
        speedMin={0.7}
        speedMax={1.6}
        speedScale={1}
      />

      <div className="relative z-10 flex w-full flex-col  justify-between space-y-6 px-8 py-16 text-center">
        <div>
          <h2 className="text-center font-medium text-5xl font-normal tracking-tight text-neutral-900 sm:text-6xl md:text-left dark:text-neutral-400">
            Ready to collaborate <br /> and take your project to the{" "}
            <span className="font-bold dark:text-white">Next level</span>?
          </h2>
         <p className="mt-4 max-w-lg text-center text-base text-neutral-600 md:text-left dark:text-neutral-300">
            Whether you have an existing project that needs enhancement or a new idea you&apos;d like to bring to life, I&apos;m here to help. Let&apos;s work together to build something exceptional.
          </p>

         
        </div>


        <div className="w-full md:w-1/3 flex flex-col gap-4 sm:flex-row">
            <Button className="rounded-full">
                <IconBrandWhatsapp className="size-5 mx-1"/> Send a message
            </Button>
        </div>
      </div>
    </div>
    </div>
 
  );
}
