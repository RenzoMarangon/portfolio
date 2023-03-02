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

  return (
    <nav className='navbar__container'>


        <ul className={`${menu && 'menu-showed'}`} >

            <li className=''><a href='#' className='buttonx' onClick={ ()=>{ hideMenux() } }>inicio</a></li>
            <li onClick={ ()=>{ hideMenux() } }><a href='#projects' className='buttonx'>Proyectos</a></li>
            <li onClick={ ()=>{ hideMenux() } }><a href='#contact' className='buttonx'>Contacto</a></li>

            <li className=''>
              <a href='#' className='btncv'>
                <ButtonCV />
              </a>
            </li>
        </ul>

        <ButtonHamburguer  />

    </nav>
  )
}
