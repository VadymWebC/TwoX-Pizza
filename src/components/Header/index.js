import React from 'react'
import s from './index.module.css'

function Header() {
  return (
    <div className={s.root}>
      <p className={s.header}>Double Pizza</p>
      <div></div>
    </div>
  )
}

export default Header