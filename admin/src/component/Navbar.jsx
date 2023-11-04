import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-black text-white outline outline-white outline-1 h-16'>
        <div className='flex justify-between px-20 py-4'>
            <a href="/"><img src="../../app-title-logo.svg" alt="" /></a>
            <p>John Doe</p>
        </div>
    </div>
  )
}

export default Navbar