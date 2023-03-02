import React from 'react'
import { Waves } from '../helpers/Waves'
import { ContactForm } from './ContactForm'
import { Footer } from './Footer'
import { Menu } from './Menu'
import { Profile } from './Profile'
import { ProjectsView } from './projects/ProjectsView'
import { TechBrand } from './TechBrand'

import { useSelector } from 'react-redux'


export const PortfolioScreen = () => {

  const { menu } = useSelector(state=>state.menu)

  const props = `${'e'}`

  return (
    <div className={`screen__container ${menu && 'show-menu'}`} >
        <Menu />
        <Profile />
        <TechBrand />
        <ProjectsView />
        <Waves />
        <ContactForm />
        <Footer />
    </div>
  )
}
