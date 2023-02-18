import React from 'react'
import { ProjectsCard } from './ProjectsCard'

export const ProjectsView = () => {
  return (

    <div className='projects-view-container'>
      <ProjectsCard name='proyesto' img='./profile' description={'App para espiar rusos y robarles informacion valiosa'} />
      <ProjectsCard name='proyesto' img='./profile' description={'Sitio de apuestas de dudosa procedencia'} />
      <ProjectsCard name='proyesto' img='./profile' description={'Venta de cigarrillos sueltos, manaos, pitusas y algo mas...'} />
      <ProjectsCard name='proyesto' img='./profile' description={'trasero de cerdo con patatas'} />

    </div>
  )
}
