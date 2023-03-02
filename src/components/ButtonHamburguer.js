import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { hideMenu, showMenu } from '../actions/nav'

export const ButtonHamburguer = () => {

  const dispatch = useDispatch();
  const { menu } = useSelector(state => state.menu)

  const showHideMenu = () => {

    menu 
        ? dispatch( hideMenu() )  
        : dispatch( showMenu() )

  }


  return (
    <>
    <div className='button-hamburguer__container'>
      
      <div className={`button-hamburguer__container__bar ${menu && 'barra_equis_izquierda'}`} onClick={()=>{ showHideMenu() }}  > </div>
      <div className={`button-hamburguer__container__bar ${menu && 'barra_equis_derecha'}`} onClick={()=>{ showHideMenu() }}    > </div>
      <div className={`button-hamburguer__container__bar ${menu && 'barra_equis_delete'}`}  onClick={()=>{ showHideMenu() }}  > </div>

    </div>
    </>
  )
}
