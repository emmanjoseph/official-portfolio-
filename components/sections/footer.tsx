import { IconBrandWhatsapp, IconBrandX } from '@tabler/icons-react'
import React from 'react'

const Footer = () => {
  return (
    <footer className='py-7 px-4 max-w-340 mx-auto flex flex-col md:flex-row gap-4 items-center justify-between'>
        <h1 className='bg-linear-to-r from-neutral-200 to-rose-200 bg-clip-text text-transparent font-medium text-sm'>Emmanuel Mulwa • +254700441147</h1>

        <div className="flex items-center space-x-6">
                <IconBrandWhatsapp size={17}/>
                <IconBrandX size={17}/>      
        </div>
    </footer>
  )
}

export default Footer