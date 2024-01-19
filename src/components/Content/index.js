import React, { useState } from 'react'
import s from './index.module.css'
import Gallery from '../Gallery'

function Content({ data }) {
  const images = data.map(item => item.photo)
  const controlLeftStyle = {
    left: '125px'
  }
  const controlRightStyle = {
    right: '125px'
  }
  const [currentLeftImage, setCurrentLeftImage] = useState(0)
  const [currentRightImage, setCurrentRightImage] = useState(0)
  return (
    <div className={s.root}>
      <div className={s.leftBlock}>
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
      </div>
      <div className={s.rightBlock}>
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
      </div>
    </div>
  )
}

export default Content