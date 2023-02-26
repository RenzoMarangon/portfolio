import React from 'react'
import { useState } from 'react'

export const ButtonHamburguer = () => {

    const [ menuIsActived, setMenuIsActived ] = useState( false )
    console.log(menuIsActived)

  return (
    <div className='button-hamburguer__container' onMouseDown={ () => { setMenuIsActived( !menuIsActived ) } }>

        <div className={`button-hamburguer__container__bar ${menuIsActived && 'barra_equis_izquierda'}`}> </div>
        <div className={`button-hamburguer__container__bar ${menuIsActived && 'barra_equis_derecha'}`}> </div>
        <div className={`button-hamburguer__container__bar ${menuIsActived && 'barra_equis_delete'}`}> </div>

    </div>
  )
}
