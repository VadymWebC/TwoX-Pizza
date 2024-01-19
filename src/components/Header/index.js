import React, {useState} from 'react'
import s from './index.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import Modal from '../Modal'

function Header({ cart }) {
  const [visible, setVisible] = useState(false)

  const List = () => cart.map(item => (
    <div className={s.orderItem}>
      <div>
        <div>{item.title1}</div>
        <div>{item.title2}</div>
      </div>
      <div className={s.orderPrice}>
        <div>${item.summary}</div>
      </div>
    </div>
  ))

  const modelText = () => {
    return (
      <div>        
        <List />
      </div>
    )
  }
  const onCancel = () => {
    setVisible(false)
  }
  const onSuccess = () => {
    //
  }
  return (
    <>    
      <Modal
        visible={visible}
        setVisible={setVisible}
        modalTitle={'Your order:'}
        modalText={modelText}
        onCancel={onCancel}
        onSuccess={onSuccess}
        isCloseIcon={true}
        isFooter={true}
        onSuccessButtonLabel={'Order'}        
        isCancelButton={true}
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