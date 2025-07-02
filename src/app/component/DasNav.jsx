"use client";
import Link from "next/link";
import { useContext } from "react";
import { SideContext } from "../providers";

export default function DasNav() {

    const context = useContext(SideContext);
    const likes = context?.likes ?? 0; // Get likes from context or default to 0

  return (
          <nav>
              <ul className='flex items-center justify-between bg-gray-800 text-white p-4'>
                <li>
                  <Link href="/dashboard" className='hover:bg-gray-700 p-4 rounded'>Dashboard</Link>
                </li>
                <li>
          <Link href="/saves" className='hover:bg-gray-700 p-4 rounded'>Likes ({likes})</Link>
        </li>
      </ul>
    </nav>
  )
}
