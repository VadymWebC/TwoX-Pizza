import React from 'react'
import s from './index.module.css'
import Gallery from '../Gallery'

function Content({ data }) {
  const images = data.map(item => item.photo)
  const controlStyle = {
    left: '125px'
  }
  return (
    <div className={s.root}>
      <div className={s.half}>
        <div className={s.galleryLeftBlock}>
          <Gallery
            images={images}
            vertical={true}
            width={550}
            height={600}
            infinity={true}
            controlStyle={controlStyle}
          />
        </div>
      </div>
      <div className={s.half2}>
        <div className={s.galleryRightBlock}>
          <Gallery
            images={images}
            vertical={true}
            width={550}
            height={600}
            infinity={true}
            controlStyle={controlStyle}
          />
        </div>
      </div>
    </div>
  )
}

export default Content