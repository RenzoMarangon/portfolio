import React, { useLayoutEffect } from 'react'
import { ButtonCV } from './ButtonCV';
import { ButtonHamburguer } from './ButtonHamburguer';
import {  useDispatch, useSelector } from 'react-redux'
import { hideMenu } from '../actions/nav';

export const Menu = () => {

  
  useLayoutEffect(() => {
    document.querySelectorAll('.buttonx').forEach(button => button.innerHTML = '<div><span>' + button.textContent.trim().split('').join('</span><span>') + '</span></div>');

  }, [])

  const { menu } = useSelector(state => state.menu)

  const dispatch = useDispatch();

  const hideMenux = () => {
    dispatch( hideMenu() )
  }

  const downloadFile = () => {
    const link = document.createElement('a');
    link.href = './cv_renzo_marangon.pdf'; 
    link.download = 'cv_renzo_marangon.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className='navbar__container animate__animated animate__bounce'>


        <ul className={`${menu && 'menu-showed'} animate__animated animate__flipInX`} >

            <li className=''><a href='#' className='buttonx' onClick={ ()=>{ hideMenux() } }>inicio</a></li>
            <li onClick={ ()=>{ hideMenux() } }><a href='#projects' className='buttonx'>Proyectos</a></li>
            <li onClick={ ()=>{ hideMenux()  } }><a href='#contact' className='buttonx'>Contacto</a></li>

            <li className=''>
              <a href='#' className='btncv' onClick={ ()=>{ downloadFile() } }>
                <ButtonCV />
              </a>
            </li>
        </ul>

        <ButtonHamburguer  />

    </nav>
  )
}
