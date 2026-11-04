import About from '@/components/sections/about'
import { CTA } from '@/components/sections/CTA'
import Footer from '@/components/sections/footer'
import { Hero } from '@/components/sections/Hero'
import Projects from '@/components/sections/Projects'
import { MyTimeline } from '@/components/sections/timeline'
import Tools from '@/components/sections/tools'
import Navbar from "@/components/Navbar";


const Page = () => {
  return (
    <div className='font-sans'>
       <Navbar/>
      <Hero/>
      <About/>
      <MyTimeline/>
      <Projects/>
      <Tools/>
      <CTA/>
      <Footer/>
    </div>
  )
}

export default Page