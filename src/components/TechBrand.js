import React, { useEffect } from 'react'
import { CardTech } from './cards/CardTech'
import { wowx } from '../helpers/wowjs'

export const TechBrand = () => {

  useEffect(()=>{
    wowx.init();
  },[])

  const widthW = window.screen.width;

  return (
    <div className='techbrand-container '>
      <div class={`animate-text ${widthW <= 500 && 'wow'} animate__animated animate__fadeInDown `}>
        <h2>Mi skill set</h2>
      </div>


      <div className='techbrand-container__list '>
        <ul>
              <li> <CardTech name={'Javascript'} img={'./javascript.png'} /></li>
              <li> <CardTech name={'React'}      img={'./react.png'} /></li>
              <li> <CardTech name={'Node'}       img={'./node.png'} /></li>
              <li> <CardTech name={'Express.js'}    img={'./expressjs.png'} /></li>
              <li> <CardTech name={'Redux'}      img={'./redux.png'} /></li>
              <li> <CardTech name={'Next.js'}       img={'./nextjs.png'} /></li>
              <li> <CardTech name={'Firebase'}   img={'./firebase.png'} /></li>
              <li> <CardTech name={'Sass'}       img={'./sass.png'} /></li>
              <li> <CardTech name={'Css'}        img={'./css.png'} /></li>
          </ul>
      </div>
    </div>
  )
}
