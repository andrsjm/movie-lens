import React from 'react'
import Sidebar from './component/Sidebar'
import Navbar from './component/Navbar'
import Film from './component/Film'

const App = () => {
  return (
    <div className=''>
      <Navbar />

      <div className='flex'>
        <Sidebar />

        <main>
          <Film />
        </main>
      </div>
    </div>
  )
}

export default App