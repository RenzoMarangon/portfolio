import React, { useLayoutEffect } from 'react'
import { ButtonEffect } from './ButtonEffect';



export const Profile = () => {


  // useLayoutEffect(() => {


  //   document.querySelector('.glow-on-hover').onmousemove = (e) => {

  //     console.log(e)

  //     const x = e.pageX - e.target.offsetLeft
  //     const y = e.pageY - e.target.offsetTop
    
  //     e.target.style.setProperty('--x', `${ x }px`)
  //     e.target.style.setProperty('--y', `${ y }px`)
      
  //   }
  // }, [])


  const effect3D = (e) => {
  
    const img = document.getElementById('effect3D');


    const height = img.clientHeight;
    const width = img.clientWidth;

    const {pageX, pageY } = e;

    const yRotation = ( 
      ( pageX - width *2  ) / width 
    ) * 20

    const xRotation = ( 
      ( pageY - height *2  ) / height 
    ) * 20

    const string = 
    `
      perspective(500px)
      scale(1.1)
      rotateX(${xRotation}deg)
      rotateY(${yRotation}deg)
    `

    img.style.transform = string;


  }

  const resetEffect3D = () => {
    const img = document.getElementById('effect3D');

    img.style.transform=
    `
    perspective(500px)
    scale(1)
    rotateX(0)
    rotateY(0)
    `
  }

  return (
    <div className='profile__container '>
      <div className='profile__container__img-media '>
        <div>
            <div className='img-media__image animate__animated animate__fadeInUp' id='effect3D' onMouseMove={ effect3D } onMouseOut = { resetEffect3D} >
  
              {/* <img className='profile__img-media__profile-img' width="180" src='profile.jpg'/> */}
            </div>

          <div className='profile__img-media__name animate__animated animate__fadeInUp'>
            <h2>Renzo Marangon</h2>
            <p>Fullstack developer</p>
            <i class="fa-brands fa-github "></i>
          </div>
        </div>

          <div className='profile__img-media__social-media animate__animated animate__fadeInUp'>
              <ul>
                  <li>
                    <a href='https://www.linkedin.com/in/renzomarangon/' target={'_BLANK'}>
                      <ButtonEffect 
                          icon={'linked-in.png'} 
                          iconAlt={'fa-linkedin'}
                          alt={'Linked-In'}
                        />
                    </a>
                  </li>
                  <li>
                    <a href='https://github.com/renzomarangon/' target={'_BLANK'}>
                    <ButtonEffect 
                          icon={'GitHub.png'} 
                          iconAlt={'dashicons-googleplus'}
                          alt={'GitHub'}
                        />
                    </a>
                  </li>
                  <li>
                    <a href='mailto:renzomarangon@outlook.com' target={'_BLANK'}>
                      <ButtonEffect 
                              icon={'email.png'} 
                              iconAlt={'fa-pinterest-p'}
                              alt={'Email'}
                            />
                      </a>
                  </li>
              </ul>
          </div>
      </div>


      <div className='profile__container__about-me animate__animated animate__fadeInUp'> 
        <h2>Sobre mí</h2>
        <p>
        Profesor superior en Informática recibido en CONSUDEC, con experiencia desarrollando en Javascript, React, Redux, Node, Express.js y Next.js.<br /> Estudiante de Informática en UTN. </p>
      </div>
      
    </div>
  )
}
