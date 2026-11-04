import React from 'react'
import {TbAlien} from "react-icons/tb";
import Link from "next/link";
import {Button} from "@/components/ui/button";

const navItems = [
  {
    name: "About",
    link: "#features",
  },
  {
    name: "Changelog",
    link: "#pricing",
  },
  {
    name: "Projects",
    link: "#pricing",
  },
  {
    name: "Skills",
    link: "#contact",
  },
];


const Navbar = () => {
    return (
        <header className={'py-4 px-2 absolute top-0 left-0 right-0 w-full z-50'}>
          <div className="w-full max-w-350 mx-auto flex justify-between items-center">
             <div className="flex items-center space-x-2">
               <TbAlien className="text-xl"/>
               <span className="text-xl font-bold">Elien</span>
             </div>

              <div className="hidden md:flex items-center space-x-10">
                  <div className="flex items-center space-x-7">
                      {
                          navItems.map((item) => (
                              <a className={'text-[15px] font-semibold  hover:text-[#ff4238] transition-all'} href={item.link} key={item.name}>{item.name}</a>
                          ))
                      }
                  </div>

                  <Link href={'#contact'}>
                      <Button variant="secondary" className="px-4 py-2 rounded-none text-[15px] cursor-pointer">Contact me here</Button>
                  </Link>
              </div>

          </div>
        </header>
    )
}
export default Navbar
