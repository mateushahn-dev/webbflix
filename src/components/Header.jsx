import React from 'react'

export default function Header({black}) {
  return (
    <header style={{backgroundColor: black ? '#111' : 'transparent'}}>
      <div className='logo'>
        <a href='/'><img src='/images/logo.png' /></a>
      </div>
      <div className='user'>
        <img src='/images/user.png' />
      </div>
    </header>
  )
}
