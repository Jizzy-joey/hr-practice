import React from 'react'

export default function Header() {
  return (
    <header
      className="flex flex-col items-center justify-center"
      style={{
        backgroundImage: "url('/bgimg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '60vh',
        backdropFilter: 'blur(50%)',
        display: 'flex',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <h1 className='uppercase text-white text-5xl py-8 text-center bg-black'>HR Platform</h1>
      <p className="text-slate-100 flex items-center justify-center">
        A simple HR platform built with Next.js, Tailwind CSS, and MongoDB.
        <span className="text-blue-900 font-semibold"> Your one-stop solution for all HR needs</span>
      </p>
    </header>
  )
}
