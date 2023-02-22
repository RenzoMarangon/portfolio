import React from 'react'
import { CardTech } from './cards/CardTech'

export const TechBrand = () => {
  return (
    <div className='techbrand-container'>
      <div class="animate-text">
        <h2>Mi skill set</h2>
      </div>


      <div className='techbrand-container__list'>
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
