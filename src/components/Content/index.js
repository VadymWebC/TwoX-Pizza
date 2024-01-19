import React from 'react'
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
          />
        </div>
      </div>
    </div>
  )
}

export default Content