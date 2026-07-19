import React from 'react'
import Profile from '../../assets/images/profile.png'

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 border-b-2 max-w-7xl mx-auto">
      <h1 className='text-5xl font-bold'>Knowledge Cafe</h1>
      <img src={Profile} alt="Profile" />
    </header>
  )
}

export default Header

