import React from 'react'
import logoS from '../../../assets/images/logo-s.png'
import './index.scss'

const Logo = () => {
  return (
    <div className="logo-container">
      <img src={logoS} className="solid-logo" alt="name-logo" />
    </div>
  )
}

export default Logo
