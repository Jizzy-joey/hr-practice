import React from 'react'

export default function Header() {
  return (
    <header className= "flex flex-col items-center justify-center  bg-gray-900">
        <h1 className='uppercase text-green-300 
        text-5xl py-8 text-center'>HR Platform</h1>
        <p className="bg-slate-950 text-slate-100 flex items-center justify-center">
            A simple HR platform built with Next.js
        </p>
    </header>
  )
}
