import React, { useLayoutEffect } from 'react'
import { ButtonCV } from './ButtonCV';
import { ButtonHamburguer } from './ButtonHamburguer';

export const Menu = () => {

  useLayoutEffect(() => {
    document.querySelectorAll('.buttonx').forEach(button => button.innerHTML = '<div><span>' + button.textContent.trim().split('').join('</span><span>') + '</span></div>');

  }, [])

  return (
    <nav className='navbar__container'>

        <ButtonHamburguer />

        <ul>
            <li className=''><a href='#' className='buttonx'>inicio</a></li>
            <li><a href='#projects' className='buttonx'>Proyectos</a></li>
            <li><a href='#contact' className='buttonx'>Contacto</a></li>

            <li className=''>
              <a href='#' className='btncv'>
                <ButtonCV />
              </a>
            </li>
        </ul>


    </nav>
  )
}
