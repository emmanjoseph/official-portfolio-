import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SiNextdotjs, SiNodedotjs, SiPostgresql, SiReact, SiTypescript, SiTailwindcss, SiSocketdotio, SiMongodb, SiStripe } from 'react-icons/si'
import { RiShieldKeyholeLine } from 'react-icons/ri'
import { Button } from '../ui/button'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'Fruifulness Travel',
    description: 'A comprehensive travel booking platform with payment integration and admin dashboard for managing reservations and packages.',
    technologies: [
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'Clerk', icon: RiShieldKeyholeLine }
    ],
    href: 'https://fruifulness-travel.com',
    image: '/assets/spotlight1.png'
  },
  {
    title: 'Category 7 Tech ISP System',
    description: 'Internet management and billing system with network monitoring, automated billing cycles, and customer mobile app.',
    technologies: [
      { name: 'React Native', icon: SiReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Tailwind', icon: SiTailwindcss }
    ],
    href: 'https://category7tech.com',
    image: '/assets/spotlight2.png'
  },
  {
    title: 'Real-time Chat Application',
    description: 'Scalable messaging platform with Socket.io for instant communication and file sharing capabilities.',
    technologies: [
      { name: 'Socket.io', icon: SiSocketdotio },
      { name: 'React', icon: SiReact },
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'MongoDB', icon: SiMongodb }
    ],
    href: 'https://chat-app.com',
    image: '/assets/spotlight3.png'
  },
  {
    title: 'E-commerce Dashboard',
    description: 'Admin panel for managing products, orders, and analytics with dark/light mode support.',
    technologies: [
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'Tailwind', icon: SiTailwindcss },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'Stripe', icon: SiStripe }
    ],
    href: 'https://ecommerce-dashboard.com',
    image: '/assets/spotlight5.png'
  }
]

const Projects = () => {
  return (
    <section className='py-20 space-y-6 px-4'>
        <div className='max-w-310 mx-auto'>
            <h1 className='text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl'>My projects</h1>
            <p>Selection of my recent projects</p>
        </div>
        
        <div className="border-y">
           <div className="max-w-310 mx-auto border-x grid lg:grid-cols-4">
             {projects.map((project, index) => (
               <div 
                 key={index} 
                 className={`relative lg:h-120 ${index !== projects.length - 1 ? 'border-r' : ''}`}
               >
                 <Image
                   src={project.image} 
                   alt={project.title} 
                   width={1000} 
                   height={100}
                   className='w-full h-full'
                 />
                 
                 <div className="absolute top-0 space-y-3 p-6">
                  <div className="flex items-center justify-end">
                     <Link 
                     href={project.href}
                     className='cursor-pointer'
                   >
                     <Button variant={'secondary'} size={"icon-lg"}>
                      <ArrowUpRight size={19}/>
                     </Button>
                   </Link>
                  </div>
                  
                   <h3 className="font-semibold text-base">{project.title}</h3>
                   <p className="text-neutral-600 dark:text-neutral-300 text-sm">{project.description}</p>
                   <div className="flex">
                     {project.technologies.map((tech, i) => {
                       const Icon = tech.icon
                       return (
                         <span key={i} className="flex items-center justify-center gap-1 text-xs size-10 bg-neutral-200 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200 rounded-full -ml-3 border-2">
                           <Icon className="w-5 h-5" />
                           
                         </span>
                       )
                     })}
                   </div>
                  
                 </div>
               </div>
             ))}
           </div>
        </div>
    </section>
  )
}

export default Projects