"use client"
import { useState } from "react"
import Image from "next/image";
import { Globe3D, GlobeMarker } from "@/components/ui/3d-globe";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import {TechStackSkeleton} from "@/components/tech-stack-skeleton";

const sampleMarkers: GlobeMarker[] = [
  {
    lat: 40.7128,
    lng: -74.006,
    src: "https://assets.aceternity.com/avatars/1.webp",
    label: "New York",
  },
  {
    lat: 51.5074,
    lng: -0.1278,
    src: "https://assets.aceternity.com/avatars/2.webp",
    label: "London",
  },
  {
    lat: 35.6762,
    lng: 139.6503,
    src: "https://assets.aceternity.com/avatars/3.webp",
    label: "Tokyo",
  },
  {
    lat: -33.8688,
    lng: 151.2093,
    src: "https://assets.aceternity.com/avatars/4.webp",
    label: "Sydney",
  },
  {
    lat: 48.8566,
    lng: 2.3522,
    src: "https://assets.aceternity.com/avatars/5.webp",
    label: "Paris",
  },
  {
    lat: 28.6139,
    lng: 77.209,
    src: "https://assets.aceternity.com/avatars/6.webp",
    label: "New Delhi",
  },
  {
    lat: 55.7558,
    lng: 37.6173,
    src: "https://assets.aceternity.com/avatars/7.webp",
    label: "Moscow",
  },
  {
    lat: -22.9068,
    lng: -43.1729,
    src: "https://assets.aceternity.com/avatars/8.webp",
    label: "Rio de Janeiro",
  },
  {
    lat: 31.2304,
    lng: 121.4737,
    src: "https://assets.aceternity.com/avatars/9.webp",
    label: "Shanghai",
  },
  {
    lat: 25.2048,
    lng: 55.2708,
    src: "https://assets.aceternity.com/avatars/10.webp",
    label: "Dubai",
  },
  {
    lat: -34.6037,
    lng: -58.3816,
    src: "https://assets.aceternity.com/avatars/11.webp",
    label: "Buenos Aires",
  },
  {
    lat: 1.3521,
    lng: 103.8198,
    src: "https://assets.aceternity.com/avatars/12.webp",
    label: "Singapore",
  },
  {
    lat: 37.5665,
    lng: 126.978,
    src: "https://assets.aceternity.com/avatars/13.webp",
    label: "Seoul",
  },
];

const About = () => {
  const [hasCopied, setHasCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText("emmajoseph607@gmail.com")
    setHasCopied(true)
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-24" id="about">
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        
        {/* Grid 1 */}
        <div className="col-span-1 min-h-[14rem]">
          <div className="relative h-full rounded-[35px] border border-neutral-200/20 dark:border-neutral-800/80 p-2 md:p-2.5">
            <GlowingEffect
              spread={70}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
            />
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[28px] bg-neutral-500/10 p-6">
              <div className="flex justify-center items-center">
                <Image
                  src="/assets/grid1.png"
                  alt="grid-1"
                  className="w-full h-[220px] md:h-[280px] object-contain rounded-2xl"
                  width={900}
                  height={900}
                />
              </div>
              <div className="mt-3">
                <p className="text-base font-semibold text-neutral-900 dark:text-white">Hey there I&apos;m Emmanuel</p>
                <p className="text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-400">
                  With 3 years experience in frontend development and backend concepts, I focus on building fast, modern applications.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Grid 2 */}
        <div className="col-span-1 min-h-[14rem]">
          <div className="relative h-full rounded-[35px] border border-neutral-200/20 dark:border-neutral-800/80 p-2 md:p-2.5">
            <GlowingEffect
              spread={70}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
            />
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[28px] bg-neutral-500/10 p-6">
             <TechStackSkeleton/>
              <div className="mt-3">
                <p className="text-base font-semibold text-neutral-900 dark:text-white">Techstack</p>
                <p className="text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-400">
                  I specialize in JavaScript/TypeScript with a focus on React and Next.js. I&apos;m also proficient in backend tools like Node.js and Express.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Grid 3 */}
        <div className="col-span-1 min-h-[14rem]">
          <div className="relative h-full rounded-[35px] border border-neutral-200/20 dark:border-neutral-800/80 p-2 md:p-2.5">
            <GlowingEffect
              spread={70}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
            />
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[28px] bg-neutral-500/10 p-6">
              <div className="flex justify-center items-center w-full h-[220px] md:h-[280px] overflow-hidden">
                <Globe3D
                  markers={sampleMarkers}
                  config={{
                    atmosphereColor: "#4da6ff",
                    atmosphereIntensity: 20,
                    bumpScale: 5,
                    autoRotateSpeed: 3,
                    markerSize: 20,
                  }}
                  className="size-72"
                  onMarkerClick={(marker) => {
                    console.log("Clicked marker:", marker.label);
                  }}
                  onMarkerHover={(marker) => {
                    if (marker) {
                      console.log("Hovering:", marker.label);
                    }
                  }}
                />
              </div>
              <div className="mt-3">
                <p className="text-base font-semibold text-neutral-900 dark:text-white">I can work remotely</p>
                <p className="text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-400">
                  I&apos;m based in Nairobi, Kenya and available for remote work worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Grid 4 (Passion) */}
        <div className="xl:col-span-2 md:col-span-2 col-span-1 min-h-[14rem]">
          <div className="relative h-full rounded-[35px] border border-neutral-200/20 dark:border-neutral-800/80 p-2 md:p-2.5">
            <GlowingEffect
              spread={70}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
            />
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[28px] bg-neutral-500/10 p-6">
              <div>
                <Image
                  src="/assets/grid3.png"
                  alt="grid-3"
                  className="w-full h-[220px] md:h-[280px] object-contain"
                  width={1000}
                  height={1000}
                />
                <div className="mt-3">
                  <p className="text-base font-semibold text-neutral-900 dark:text-white">My Passion for Coding</p>
                  <p className="text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-400">
                    I love solving problems and building things through code. Programming isn&apos;t just my profession—it&apos;s my passion. I enjoy exploring new technologies and continuously sharpening my skills.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Grid 5 (Contact) */}
        <div className="col-span-1 min-h-[14rem]">
          <div className="relative h-full rounded-[35px] border border-neutral-200/20 dark:border-neutral-800/80 p-2 md:p-2.5">
            <GlowingEffect
              spread={70}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
            />
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[28px] bg-neutral-500/10 p-6">
              <div>
                <Image
                  src="/assets/grid4.png"
                  alt="grid4"
                  className="w-full h-fit object-cover sm:object-top"
                  width={1000}
                  height={1000}
                />
                <div className="-mt-5">
                  <p className="font-semibold text-center text-neutral-900 dark:text-white">Contact me</p>
                  <div
                    className="flex items-center justify-between cursor-pointer mt-2 px-2 py-1 rounded-lg bg-neutral-500/10 hover:bg-neutral-500/20 transition-colors"
                    onClick={handleCopy}
                  >
                    <p className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 dark:from-cyan-200 dark:via-blue-200 dark:to-blue-100 text-transparent bg-clip-text text-sm font-medium">
                      emmajoseph607@gmail.com
                    </p>
                    <Image src={hasCopied ? "/assets/tick.svg" : "/assets/copy.svg"} alt="icon" width={20} height={20}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About
