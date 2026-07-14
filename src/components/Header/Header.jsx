import React from 'react'
import Profile from '../../assets/images/profile.png'

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 mx-4 border-b-2">
      <h1 className='text-5xl'>Knowledge Cafe</h1>
      <img src={Profile} alt="Profile" />
    </header>
  )
}

export default Header

