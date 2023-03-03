import React from 'react'

export const ButtonEffect = ({icon, iconAlt, alt}) => {

  return (
      <div  className="followMSM">
        <span  className={`dashicons ${iconAlt}`}>
            <img className='button_media' src={icon} alt={alt}/>
            <p className='button-effect__p'>{alt}</p>
        </span>
      </div>
  )
}
