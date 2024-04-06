'use client'
import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useStore } from '@/store/zustand'
import { Menu,X} from 'lucide-react';
import { Button } from "@/components/ui/button"

export const Navbar = ({ children }: { children: React.ReactNode }) => {
  const { isMobile,setMobile } = useStore()
  return (
    <>
      <div className={`bg-black text-white ${isMobile ? 'flex' :'hidden'} md:flex z-10 text-xl flex-col md:flex-row p-4 gap-3`}>
        {children}
      </div>

      <div className={`flex justify-between bg-black text-white ${isMobile && 'border-t-2 border-gray-400'}`}>
         <h1 className={`text-xl md:hidden mt-2 relative left-2`}>Admin Pannel</h1>
        <Button variant='ghost' size="icon" className={`bg-black text-white md:hidden
        `}
         onClick={setMobile}
        >
          { isMobile ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6"/>}
        </Button>
      </div>
         
    </>
  )
}

export const NavLink = (props: React.ComponentProps<typeof Link>) => {
  const pathname = usePathname()
  return (
    <>
      <Link {...props} className={`${pathname === props.href && 'bg-white text-black rounded-3xl'}  hover:text-sky-500 px-3 py-2`} />
    </>
  )
}