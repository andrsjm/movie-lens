import React from 'react'
import SearchBar from './SearchBar'

const Film = () => {
  return (
    <div className='px-7 py-12 text-xl bg-neutral-900 w-screen h-full text-white'>
        <h1>Film</h1>
        <div className='flex flex-col mt-10 py-3 justify-between'>
            <SearchBar placeholder={"Search Film ...."} />
        </div>
    </div>
  )
}

export default Film