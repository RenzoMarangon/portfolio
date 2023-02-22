import React, { useEffect } from 'react'
import { ButtonEffect } from './ButtonEffect';

export const ContactForm = () => {


  const showInputError = ( name ) => {
    const after = document.querySelector(`.after-${name}`)
    const className = after.className;

    !className.includes('after-show') && (after.className = after.className +' ' + 'after-show');
  }





  const handleFormSubmit = (e) => {
    e.preventDefault();
    // const after =
    const inputs = [...e.target ]

    inputs.forEach( input  => {
    
      const { name, value } = input;

      if( value === "" ){

        if( name === 'name' ){
          showInputError('name');
        }
        if( name === 'email' ){
          showInputError('email');
        }
        if( name === 'asunto' ){
          showInputError('asunto');
        }
        if( name === 'msg' ){
          showInputError('msg');
        }
        if( name === 'captcha' ){
          showInputError('captcha');
        }
      }

      if( value !== '' )
      {
        let after;
        if( name === 'name' ){
          after = document.querySelector('.after-name')
        }
        if( name === 'email' ){
          after = document.querySelector('.after-email')
        }
        if( name === 'asunto' ){
          after = document.querySelector('.after-asunto')
        }
        if( name === 'msg' ){
          after = document.querySelector('.after-msg')
        }
        if( name === 'captcha' ){
          after = document.querySelector('.after-captcha')
        }


        after.className = after.className.replace('after-show','')
      }

    });
  }

  const transition = (name) => {
    const div = document.querySelector(`.${name}`);

    const divClassName = div.className 

    !divClassName.includes('transitionx') && (div.className = divClassName + ' transitionx');

  }

  const intransition = (name) => {
    const div = document.querySelector(`.${name}`);

    const divClassName = div.className 

    divClassName.includes('transitionx') && (div.className = divClassName.replace(' transitionx', ''));
  }

  // ANIMACIONES 

  const transitionEmail = () =>{
    const div = document.querySelector(`.emaill`);
    const divClassName = div.className 

    !divClassName.includes('transition-email') && (div.className = divClassName + ' transition-email');
  }

  const intransitionEmail = () =>{
    const div = document.querySelector(`.emaill`);
    const divClassName = div.className 
    divClassName.includes('transition-email') && (div.className = divClassName.replace(' transition-email', ''));
  }

  //Animacion avion
  const movePlane = () =>{
    const plane = document.querySelector(`.contact-form__container__send`).querySelector('img');
    console.log(plane)
    !plane.className.includes('move-plane') && (plane.className = plane.className + 'move-plane')
               
  }

  const returnPlane = () => {
    const plane = document.querySelector(`.contact-form__container__send`).querySelector('img');

    plane.className.includes('move-plane') && (plane.className = plane.className.slice('move-plane',' '))
  }

  return (
    <div className='contact-form__container' id="contact">

        <div className='contact-form__container__social-media'>

          <div className='social-media__container' >
            <div className='social-media___content githubb' onMouseMove={()=>{transition('githubb')}}  onMouseOut={()=>{intransition('githubb')}}>
              <img src='./GitHub.png' />
              <a href='#' >/RenzoMarangon</a>
            </div>
            <div className='social-media__background'></div>
          </div>

          <div className='social-media__container' >
            <div className='social-media___content linkedinn' onMouseMove={()=>{transition('linkedinn')}}  onMouseOut={()=>{intransition('linkedinn')}}>
              <img src='./linked-in.png' />
              <a href='#' >/RenzoMarangon</a>
            </div>
            <div className='social-media__background'></div>
          </div>

          <div className='social-media__container' >
            <div className='social-media___content emaill' onMouseMove={()=>{transitionEmail('emaill')}}  onMouseOut={()=>{intransitionEmail('emaill')}}>
              <img src='./email.png' />
              <a href='mailto:renzomarangon@gmail.com'>Renzomarangon@gmail.com</a>

            </div>
            <div className='social-media__background'></div>
          </div>
        </div>
        <form onSubmit={ handleFormSubmit } className='contact-form__container__form'>
            <div class="animate-text">
              <h2>Enviar correo electrónico</h2>
            </div>
            <div className='contact-form__container__input'>
              <input className='inputx' type={'text'} name={'name'} placeholder={'Nombre'}/>
              <div className='after after-name'>
                <img src='./warning.png' />     
                <p>El nombre debe tener al menos 3 carácteres</p></div>
            </div>

            <div className='contact-form__container__input'>
              <input type={'email'} name={'email'} placeholder={'Email'} />
              <div className='after after-email'>
                <img src='./warning.png' /> 
                <p>El nombre debe tener al menos 3 carácteres</p>
              </div>
            </div>

            <div className='contact-form__container__input'>
              <input type={'text'} name={'asunto'} placeholder={'Asunto'} />
              <div className='after after-asunto'>
                <img src='./warning.png' /> 
                <p>El nombre debe tener al menos 3 carácteres</p>
              </div>
            </div>

            <div className='contact-form__container__input'>
              <textarea type={'text'} name={'msg'} placeholder={'Mensaje'} />
              <div className='after after-msg'>
                <img src='./warning.png' /> 
                <p>El nombre debe tener al menos 3 carácteres</p>
              </div>
            </div>

            <div className='contact-form__container__input captcha'>
              <input type={'text'} name={'captcha'} placeholder={'1111'} />
              <div className='after after-captcha'>
                <img src='./warning.png' /> 
                <p>El nombre debe tener al menos 3 carácteres</p>
              </div>
            </div>
            <div className='form__background'></div>
              <button className='contact-form__container__send' type='submit' onMouseMove={ movePlane } onMouseOut={ returnPlane }>
                <img src='paper-plane.svg' /> 
                <p>Enviar</p>
              </button>
        </form>

        <div className='contact-form__background'></div>
    </div>
  )
}
