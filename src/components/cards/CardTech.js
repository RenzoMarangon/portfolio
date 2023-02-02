import React from 'react'

export const CardTech = ({ img, name }) => {
  return (
    <div className="card-flip-container">
             <img src={ img } />
             <div className="content">
                 <h2>{name}</h2>
             </div> 
         </div>

  )
}
