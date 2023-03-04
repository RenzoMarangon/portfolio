import React, { useEffect } from 'react'
import { ProjectsCard } from './ProjectsCard'
import { proyects } from '../../helpers/proyects'
import { wowx } from '../../helpers/wowjs'

export const ProjectsView = () => {

  useEffect(()=>{
    wowx.init()
  },[])

  return (

    <div className='projects-view-container' id='projects'>

      <div class="animate-text animate__animated animate__fadeInDown wow">
        <h2>Proyectos</h2>
      </div>
      
      <div className='projects-view__projects'>

        {proyects.map( ({title,description,url,tech,img, gitUrl}) =>
          <ProjectsCard name={ title } img= { img } description={ description } url = { url } tech = { tech } gitUrl = { gitUrl }/>
        )}
        
        {/* <ProjectsCard name='proyesto' img='./profile' description={'App para espiar rusos y robarles informacion valiosa'} /> */}
        {/* <ProjectsCard name='proyesto' img='./profile' description={'Sitio de apuestas de dudosa procedencia'} /> */}
        {/* <ProjectsCard name='proyesto' img='./profile' description={'Venta de cigarrillos sueltos, manaos, pitusas y algo mas...'} /> */}
      </div>

    </div>
  )
}
