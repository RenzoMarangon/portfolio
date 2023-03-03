import React from 'react'
import { ButtonCV } from '../ButtonCV';


export const ProjectsCard = ({...data}) => {
    const { name, img, description, tech, url, gitUrl } = data;
    return (
      <div className='card-project__container cardx'>
        {console.log(gitUrl)}
        <img className='card-project__view' src={`./${img}`} />
        <div className='projects-view-container__tech'>
          {
            tech.map( technology => 
              <div className={`${ technology }`}> <img src={`${technology}_.png`} alt={`${technology}` } /> <p>{technology}</p> </div>
            )
          }
        </div>

        <div className='card-project__text'>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
        
        <div className='card-project__buttons'>

          <button className='buttons_git btnx btnx--5'> <img className='gith' src='./GitHub.png' /> <a target={'_BLANK'} href={`${ gitUrl }`}>Git code</a></button>
          
          <a target='_BLANK' href={`${url}`} className='button_bubble'>
            Ver
            <span></span><span></span><span></span><span></span>
          </a>
        </div>
      </div>
  )
}
