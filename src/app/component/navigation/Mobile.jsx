"use client";


import Link from "next/link";
import { useState} from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import NavData from "./NavData";

export default function Mobile() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

   
    return (
         <>

        <div className="text-slate-50 bg-orange-600 h-16 flex justify-between
        items-center px-4 md:hidden">
           
            <Link href="/" className="text-2xl font-bold">
                HR Platform
            </Link>
           <GiHamburgerMenu className="text-3xl cursor-pointer" onClick={toggleMenu} />
        </div>
          {
        isOpen &&
        <ul className="flex flex-col items-center justify-center bg-slate-950 text-slate-50 font-semibold text-2xl capitalize space-y-4 p-4">
            <NavData />
        </ul>
    }
    </> );
  
   
}