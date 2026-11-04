"use client";

import React from "react";
import Link from "next/link";
import {
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiSocketdotio,
  SiMongodb,
  SiStripe,
} from "react-icons/si";
import { RiShieldKeyholeLine } from "react-icons/ri";
import { ArrowUpRight } from "lucide-react";
import { TechSkeleton } from "@/components/tech-skeleton";

const projects = [
  {
    title: "Fruitfulness Travel",
    description:
        "A comprehensive travel booking platform with payment integration and admin dashboard for managing reservations and packages.",
    technologies: [
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#5A9BD5" },
      { name: "Clerk", icon: RiShieldKeyholeLine, color: "#8B6DFF" },
    ],
    href: "https://fruitfulnesstravel.co.ke",
  },
  {
    title: "Category 7 Tech ISP System",
    description:
        "Internet management and billing system with network monitoring, automated billing cycles, and customer mobile app.",
    technologies: [
      { name: "React Native", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
    ],
    href: "https://category7tech.com",
  },
  {
    title: "Real-time Chat Application",
    description:
        "Scalable messaging platform with Socket.io for instant communication and file sharing capabilities.",
    technologies: [
      { name: "Socket.io", icon: SiSocketdotio, color: "#ffffff" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    ],
    href: "https://chat-app.com",
  },
  {
    title: "E-commerce Dashboard",
    description:
        "Admin panel for managing products, orders, and analytics with dark/light mode support.",
    technologies: [
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#5A9BD5" },
      { name: "Stripe", icon: SiStripe, color: "#8B85FF" },
    ],
    href: "https://ecommerce-dashboard.com",
  },
];

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

const Projects = () => {
  return (
      <section id="projects" className="text-[#f4f3ef]  bg-black">
        <div className="mx-auto max-w-350 border-x border-t border-neutral-200/15">
          {/* Header */}
          <div className="flex flex-col gap-6 border-b border-neutral-200/15 p-6 sm:p-8 md:flex-row md:items-end md:justify-between">
            <div className="space-y-3">
              <p className="font-mono text-[11px] uppercase tracking-wider text-neutral-500">
                Selected work
              </p>
              <h2 className="text-4xl font-bold uppercase leading-[0.95] tracking-tighter sm:text-5xl md:text-6xl">
                My
                <br />
                projects
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-neutral-600">
              A selection of my recent projects, from booking platforms to
              real-time apps.
            </p>
          </div>

          <Ruler />

          {/* Grid */}
          <div className="grid border-t border-neutral-200/15 sm:grid-cols-2 lg:grid-cols-4">
            {projects.map((project, index) => (
                <article
                    key={project.title}
                    className="group flex flex-col border-b border-neutral-200/15 sm:border-r sm:[&:nth-child(2n)]:border-r-0 lg:border-r lg:[&:nth-child(2n)]:border-r lg:last:border-r-0"
                >
                  {/* Index + link */}
                  <div className="flex items-center justify-between px-5 pt-5">
                <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-500">
                  {String(index + 1).padStart(2, "0")} /{" "}
                  {String(projects.length).padStart(2, "0")}
                </span>
                    <Link
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${project.title}`}
                        className="flex size-9 items-center justify-center rounded-full border border-neutral-200/20 transition-all group-hover:border-[#ff4238] group-hover:bg-[#ff4238] group-hover:text-white"
                    >
                      <ArrowUpRight size={17} />
                    </Link>
                  </div>

                  {/* Skeleton (replaces the image) */}
                  <TechSkeleton
                      technologies={project.technologies}
                      delay={index * -1.2}
                      className="m-5 aspect-4/3"
                  />

                  {/* Text */}
                  <div className="flex flex-1 flex-col gap-3 px-5 pb-5">
                    <h3 className="text-lg font-semibold leading-tight tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-neutral-600">
                      {project.description}
                    </p>
                    <p className="mt-auto pt-3 font-mono text-[11px] uppercase tracking-wider text-neutral-500">
                      {project.technologies.map((t) => t.name).join(" · ")}
                    </p>
                  </div>
                </article>
            ))}
          </div>

          <Ruler />
        </div>
      </section>
  );
};

export default Projects;