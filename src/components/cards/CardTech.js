import React, { useEffect } from 'react'
import { wowx } from '../../helpers/wowjs';

export const CardTech = ({ img, name }) => {

  useEffect(() => {
    wowx.init();
  }, [])

  const widthW = window.screen.width;

  return (
    <div className={`card-flip-container ${widthW <= 500 && 'wow'} animate__animated animate__flipInX`} >
             <img src={ img } />
             <div className="content">
                 <h2>{name}</h2>
             </div> 
         </div>

  )
}
