import React from 'react'

export const ContactForm = () => {


  const showInputError = ( name ) => {
    const after = document.querySelector(`.after-${name}`)
    const className = after.className;

    !className.includes('after-show') && (after.className = after.className +' ' + 'after-show');
  }





  const handleFormSubmit = (e) => {
    e.preventDefault();
    const inputs = [...e.target ]

    inputs.forEach( input  => {
    
      const { name, value } = input;

      if( value === "" ){

        switch(name){
          case 'name':
            showInputError('name');
            break;
          case 'email': 
            showInputError('email');
            break
          case 'asunto': 
            showInputError('asunto');
            break
          case 'msg': 
            showInputError('msg');
            break
          case 'captcha': 
            showInputError('captcha');
            break
          default:return;

        }
      }

      // if( name === 'name' ){
      //   showInputError('name');
      // }
      // if( name === 'email' ){
      //   showInputError('email');
      // }
      // if( name === 'asunto' ){
      //   showInputError('asunto');
      // }
      // if( name === 'msg' ){
      //   showInputError('msg');
      // }
      // if( name === 'captcha' ){
      //   showInputError('captcha');
      // }

      if( value !== '' )
      {
        let after;

        switch(name){
          case 'name':
            after = document.querySelector('.after-name');
            break;
          case 'email': 
          after = document.querySelector('.after-email');
            break
          case 'asunto': 
            after = document.querySelector('.after-asunto');
            break
          case 'msg': 
            after = document.querySelector('.after-msg');
            break
          case 'captcha': 
            after = document.querySelector('.after-captcha')
            break
          default:return;
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
        <div class="animate-text">
          <h2>Contacto</h2>
        </div>

        <div className='contact-form__container__form-links'>
            <div className='contact-form__container__social-media'>

              <div className='social-media__container' onMouseMove={()=>{transition('githubb')}}  onMouseOut={()=>{intransition('githubb')}}>
                <a href='https://github.com/renzomarangon' target={'_BLANK'} >
                  <div className='social-media___content githubb' >
                    <img src='./GitHub.png' />
                    <a>/RenzoMarangon</a>
                  </div>
                  </a>
              </div>

              <div className='social-media__container' onMouseMove={()=>{transition('linkedinn')}}  onMouseOut={()=>{intransition('linkedinn')}}>
              <a href='https://www.linkedin.com/in/renzomarangon/' target={'_BLANK'} >
                <div className='social-media___content linkedinn' >
                  <img src='./linked-in.png' />
                  <a>/RenzoMarangon</a>
                </div>
              </a>
              </div>

              <div className='social-media__container' onMouseMove={()=>{transitionEmail('emaill')}}  onMouseOut={()=>{intransitionEmail('emaill')}}>
                <a href='mailto:renzomarangon@outlook.com'>
                  <div className='social-media___content emaill' >
                    <img src='./email.png' />
                    <a>Renzomarangon@outlook.com</a>
                  </div>
                  </a>
                </div>
            </div>

            <form onSubmit={ handleFormSubmit } className='contact-form__container__form'>

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
          </div>

    </div>
  )
}
