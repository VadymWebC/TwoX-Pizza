import React, {useState} from 'react'
import s from './index.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import Modal from '../Modal'

function Header() {
  const [visible, setVisible] = useState(false)
  const modelText = () => {
    return (
      <div>List of the Pizza</div>
    )
  }
  return (
    <>
      <Modal
        visible={visible}
        setVisible={setVisible}
        modalTitle={'Cart'}
        modalText={modelText}
      />
      <div className={s.root}>
        <p className={s.header}>Double Pizza</p>
        <div onClick={() => setVisible(true)}>
          <FontAwesomeIcon className={s.cart} icon={faCartPlus} />
        </div>
      </div>
    </>
  )
}

export default Header