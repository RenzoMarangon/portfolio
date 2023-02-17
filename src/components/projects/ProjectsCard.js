import React from 'react'

export const ProjectsCard = ({...data}) => {
    const { name, img,  } = data;
    return (
      <div className='card-project__container'>
          <img className='card-project__view' src={'./prueba.png'} />
          <h2>{name}</h2>

          <button> DEMO </button>
  
          <img className='gith' src='./GitHub.png' />
      </div>
  )
}
