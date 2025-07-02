import React from 'react'

export default function Footer() {
  return (
    <footer>
        <div className="bg-blue-900 text-slate-100 text-center py-4">
            <p className="text-sm">
            &copy; {new Date().getFullYear()} HR Platform. All rights reserved.
            </p>
        </div>
    </footer>
  )
}
