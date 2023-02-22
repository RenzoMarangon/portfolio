import React from 'react'
import { ButtonCV } from '../ButtonCV';


export const ProjectsCard = ({...data}) => {
    const { name, img, description } = data;
    return (
      <div className='card-project__container cardx'>
        <img className='card-project__view' src={'./prueba.png'} />

        <div className='card-project__text'>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
        <div className='card-project__buttons'>
          <button className='buttons_git btnx btnx--5'> <img className='gith' src='./GitHub.png' /> Git code</button>
          <a className='button_bubble'>
            Ver
            <span></span><span></span><span></span><span></span>
          </a>
        </div>
      </div>
  )
}
