import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";

export function MyTimeline() {
  const data = [
    {
      title: "2024",
      content: (
       <div className='flex flex-col space-y-3'>
        <h1 className="text-2xl font-semibold">Simplex Technologies</h1>
        <div className="flex space-x-5">
          <div className="size-4 rounded-full border flex items-center justify-center">
            <div className="bg-white size-2 rounded-full animate-ping" />
          </div>
          <p className='text-neutral-200 text-sm font-medium'>Frontend Developer</p>
        </div>
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Designed and built modern UI components using Next.js, Tailwind CSS, and TypeScript. Collaborated across teams to deliver scalable web applications and dashboards.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <p className="text-xs dark:text-neutral-400">Shadcn • Next.js</p>
          <p className="text-xs dark:text-neutral-400">TailwindCSS • TypeScript</p>
        </div>
      </div>
      ),
    },
    {
    title: "2025",
    content: (
      <div className='flex flex-col space-y-3'>
        <h1 className="text-2xl font-semibold">Fruitfulness Travel</h1>
        <div className="flex space-x-5">
          <div className="size-4 rounded-full border flex items-center justify-center">
            <div className="bg-white size-2 rounded-full animate-ping" />
          </div>
          <p className='text-neutral-200 text-sm font-medium'>Full-Stack Developer</p>
        </div>
        <p className="text-sm font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Developed a comprehensive travel booking platform with end-to-end reservation management. Built secure RESTful APIs with Node.js and PostgreSQL, implementing JWT authentication for seamless user admin access.
        </p>
        <p className="mb-8 text-sm font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Created an intuitive admin dashboard for managing bookings, customer data, and travel packages. Integrated payment processing and automated email notifications for booking confirmations.
        </p>
        <div className="grid grid-cols-2 gap-4 font-medium">
          <p className="text-xs dark:text-neutral-300">Node.js • PostgreSQL • JWT Auth</p>
          <p className="text-xs dark:text-neutral-300">Next.js • Tailwind • Admin dashboard</p>
        </div>
      </div>
    ),
  },
   {
    title: "2026",
    content: (
      <div className='flex flex-col space-y-3'>

       <div className='flex flex-col space-y-3'>
        <h1 className="text-2xl font-semibold">Category 7 tech group</h1>
        <div className="flex space-x-5">
          <div className="size-4 rounded-full border flex items-center justify-center">
            <div className="bg-white size-2 rounded-full animate-ping" />
          </div>
          <p className='text-neutral-200 text-sm font-medium'>Fullstack developer</p>
        </div>
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Engineered a comprehensive internet management and billing system for an ISP tech support company. Developed an admin dashboard for network monitoring, customer management, and automated billing cycles, alongside a mobile app for customer self-service and payment processing.
        </p>
        <div className="grid grid-cols-2 gap-4 font-medium">
          <p className="text-xs dark:text-neutral-200">Node.js • Mikrotik • Websocket • Postgresql</p>
          <p className="text-xs dark:text-neutral-200">TailwindCSS • TypeScript • Next.js 16 • React Native</p>
        </div>
      </div>

        <h1 className="text-2xl font-semibold mt-4">Settle In</h1>
        <div className="flex space-x-5">
          <div className="size-4 rounded-full border flex items-center justify-center">
            <div className="bg-white size-2 rounded-full animate-ping" />
          </div>
          <p className='text-neutral-200 text-sm font-medium'>Frontend Developer</p>
        </div>
        <p className="text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Spearheading the development of a mobile-first platform for African musicians and producers. Built RESTful APIs with Node.js and MongoDB and integrated Google OAuth and OTP login flows.
        </p>
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Implemented Sanity CMS for dynamic content and built real-time collaboration features using WebSockets.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <p className="text-xs dark:text-neutral-400">Node.js • Prisma • Postgresql</p>
          <p className="text-xs dark:text-neutral-400">Sanity.io • Express</p>
        </div>
      </div>
    ),
  },
   {
    title: "Changelog",
    content: (
      <div key={"hello world"}>
        <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Recently shipped several key features and improvements on client projects:
        </p>
        <div className="mb-8 space-y-1">
          <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
            ✅ Fruifulness Travel: Integrated Clerk authentication with secure booking flow and automated email confirmations
          </div>
          <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
            ✅ Category 7 Tech: Built real-time network monitoring dashboard with usage analytics and alerts
          </div>
          <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
            ✅ Automated billing system with recurring payments, invoice generation, and SMS notifications
          </div>
          <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
            ✅ Deployment pipeline set up with Vercel + CI/CD using GitHub Actions
          </div>
          <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
           ✅ Developed React Native mobile app for customers to view data usage, pay bills, and request support
          </div>
           <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
            ✅ Fruitfulness travel admin: Dark/light mode toggle + Accessibility support
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <p className="text-xs dark:text-neutral-400">Socket.io</p>
          <p className="text-xs dark:text-neutral-400">CI/CD • i18n</p>
        </div>
      </div>
    ),
  },
  ];
  return (
    <div className="relative w-full overflow-clip" id="timeline">
      <Timeline data={data} />
    </div>
  );
}
