import { NavbarDemo } from '@/components/Navbar'
import About from '@/components/sections/about'
import { CTA } from '@/components/sections/CTA'
import Footer from '@/components/sections/footer'
import { Hero } from '@/components/sections/Hero'
import Projects from '@/components/sections/Projects'
import { MyTimeline } from '@/components/sections/timeline'
import Tools from '@/components/sections/tools'


const Page = () => {
  return (
    <div className='font-sans'>
      <NavbarDemo/>
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