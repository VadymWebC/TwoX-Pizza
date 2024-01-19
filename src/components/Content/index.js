import React, { useState } from 'react'
import s from './index.module.css'
import Gallery from '../Gallery'

function Content({ data, cart, setCart }) {
  const images = data.map(item => item.photo)
  const controlLeftStyle = {
    left: '125px'
  }
  const controlRightStyle = {
    right: '125px'
  }
  const [currentLeftImage, setCurrentLeftImage] = useState(0)
  const [currentRightImage, setCurrentRightImage] = useState(0)
  const order = cart
  const addToCart = () => {
    order.push({
      title1: data[currentLeftImage].title,
      title2: data[currentRightImage].title,      
      summary: (+data[currentRightImage].price)+(+data[currentLeftImage].price)
    })
    setCart(order)
    alert('Pizza added to cart')
  }
  return (
    <div className={s.root}>
      <div className={s.galleries}>
        <div className={s.leftBlock}>
          <p className={s.title}>{data[currentLeftImage].title}</p>
          <p className={s.desc}>{data[currentLeftImage].desc}</p>
          <div className={s.galleryLeftBlock}>            
            <Gallery
              images={images}
              vertical={true}
              width={550}
              height={600}
              infinity={true}
              controlStyle={controlLeftStyle}
              currentImage={currentLeftImage}
              setCurrentImage={setCurrentLeftImage}
            />            
          </div>          
          <p className={s.price}>Price: ${data[currentLeftImage].price}</p>
        </div>
        <div className={s.rightBlock}>
          <p className={s.title}>{data[currentRightImage].title}</p>
          <p className={s.desc}>{data[currentRightImage].desc}</p>
          <div className={s.galleryRightBlock}>            
            <Gallery
              images={images}
              vertical={true}
              width={550}
              height={600}
              infinity={true}
              controlStyle={controlRightStyle}
              currentImage={currentRightImage}
              setCurrentImage={setCurrentRightImage}
            />            
          </div>          
          <p className={s.price}>Price: ${data[currentRightImage].price}</p>
        </div>
      </div>
      <div className={s.footer}>
        <p className={s.summary}>Summary price: {(+data[currentRightImage].price)+(+data[currentLeftImage].price)}</p>
        <button className={s.button} onClick={addToCart}>Add to cart</button>
      </div>
    </div>
  )
}

export default Content