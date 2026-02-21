import { IconBrandNextjs, IconBrandReact, IconBrandNodejs, IconBrandTypescript, IconBrandTailwind,IconBrandGithub, IconBrandJavascript } from '@tabler/icons-react'
import { SiExpress, SiPrisma, SiDrizzle, SiMysql, SiShadcnui, SiFramer, SiSap, SiSocketdotio, SiN8N } from 'react-icons/si'
import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandReactNative } from 'react-icons/tb'
import Image from 'next/image'
import React from 'react'

const skills = [
  // Backend - spotlight1
  { name: 'Node.js', icon: IconBrandNodejs, spotlight: 'spotlight1' },
  { name: 'Express', icon: SiExpress, spotlight: 'spotlight1' },
  { name: 'JavaScript', icon: IconBrandJavascript, spotlight: 'spotlight1' },
  { name: 'TypeScript', icon: IconBrandTypescript, spotlight: 'spotlight1' },
  
  
  // Frontend - spotlight2
  { name: 'React', icon: IconBrandReact, spotlight: 'spotlight2' },
  { name: 'React Native', icon: TbBrandReactNative, spotlight: 'spotlight2' },
  { name: 'Next.js', icon: IconBrandNextjs, spotlight: 'spotlight2' },
  
  // Styling - spotlight3
  { name: 'Tailwind CSS', icon: IconBrandTailwind, spotlight: 'spotlight3' },
  { name: 'Shadcn UI', icon: SiShadcnui, spotlight: 'spotlight3' },
  { name: 'GSAP', icon: SiSap, spotlight: 'spotlight3' },
  { name: 'Framer Motion', icon: SiFramer, spotlight: 'spotlight3' },
  
  // Database - spotlight4
  { name: 'MySQL', icon: SiMysql, spotlight: 'spotlight4' },
  { name: 'PostgreSQL', icon: BiLogoPostgresql, spotlight: 'spotlight4' },
  { name: 'Prisma', icon: SiPrisma, spotlight: 'spotlight4' },
  { name: 'Drizzle', icon: SiDrizzle, spotlight: 'spotlight4' },
  
  // Other Tools - spotlight5
  { name: 'Git', icon: IconBrandGithub, spotlight: 'spotlight5' },
  { name: 'Socket.io', icon: SiSocketdotio, spotlight: 'spotlight5' },
  { name: 'n8n', icon:SiN8N, spotlight: 'spotlight5' },
]

const Tools = () => {
  return (
    <section className='max-w-340 mx-auto py-20 px-4 space-y-5'>
        <h1 className='text-center text-xl font-medium'>What I work with</h1>

        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4">
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <div key={index} className='rounded-4xl border border-neutral-700 relative'>
                    <Image 
                      src={`/assets/${skill.spotlight}.png`} 
                      alt={skill.spotlight} 
                      width={1000} 
                      height={100}
                      className='rounded-xl w-full h-full'
                    />
                    <div className="w-full h-full absolute flex flex-col items-center justify-center top-0">
                      <Icon size={30}/>
                      <p className="text-xs mt-2 font-medium">{skill.name}</p>
                    </div>
                </div>
              )
            })}
        </div>
    </section>
  )
}

export default Tools