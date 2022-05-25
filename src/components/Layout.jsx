import React from 'react'

const Layout = ({children}) => {
  return (
    <div className='bg-gray-900 min-h-screen p-5'>
      {children}
    </div>
  )
}

export default Layout