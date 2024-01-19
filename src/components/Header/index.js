import React from 'react'
import s from './index.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

function Header() {
  return (
    <div className={s.root}>
      <p className={s.header}>Double Pizza</p>
      <div>
        <FontAwesomeIcon className={s.cart} icon={faCartPlus} />
      </div>
    </div>
  )
}

export default Header