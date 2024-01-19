import React from 'react'
import s from './index.module.css'
import Gallery from '../Gallery'

function Content({ data }) {
  const images = data.map(item => item.photo)
  console.log(images);
  return (
    <div className={s.root}>
      <div className={s.half}>
        <div className={s.galleryBlock}>
          <Gallery
            images={images}
            vertical={true}
            width={550}
            height={600}
            infinity={true}
          />
        </div>
      </div>
      <div className={s.half2}>
      </div>
    </div>
  )
}

export default Content