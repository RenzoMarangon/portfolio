import React from 'react'
import { Waves } from '../helpers/Waves'
import { ContactForm } from './ContactForm'
import { Footer } from './Footer'
import { Menu } from './Menu'
import { Profile } from './Profile'
import { ProjectsView } from './projects/ProjectsView'
import { TechBrand } from './TechBrand'

export const PortfolioScreen = () => {
  return (
    <div >
        <div className='screen__container'>
            <Menu />
            <Profile />
            <TechBrand />
            <ProjectsView />
            <Waves />
            <ContactForm />
            <Footer />
        </div>
    </div>
  )
}
