import React, { useLayoutEffect } from 'react'
import { ButtonEffect } from './ButtonEffect';



export const Profile = () => {


  useLayoutEffect(() => {


    document.querySelector('.glow-on-hover').onmousemove = (e) => {

      console.log(e)

      const x = e.pageX - e.target.offsetLeft
      const y = e.pageY - e.target.offsetTop
    
      e.target.style.setProperty('--x', `${ x }px`)
      e.target.style.setProperty('--y', `${ y }px`)
      
    }
  }, [])
  return (
    <div className='profile__container '>
      <div className='profile__container__img-media '>
        <div>
          <div className='glow-on-hover'>
            <img className='profile__img-media__profile-img' src='profile.jpg'/>
          </div>

        <div className='profile__img-media__name'>
          <h2>Renzo Marangon</h2>
          <h3>Fullstack developer</h3>
          <i class="fa-brands fa-github"></i>
        </div>
        </div>

          <div className='profile__img-media__social-media '>
              <ul>
                  <li>
                    <a href='#'>
                        <ButtonEffect 
                          icon={'linked-in.png'} 
                          iconAlt={'fa-linkedin'}
                          alt={'Linked-In'}
                        />
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <ButtonEffect 
                            icon={'GitHub.png'} 
                            iconAlt={'dashicons-googleplus'}
                            alt={'GitHub'}
                          />
                    </a>
                  </li>
                  <li>
                    <a href='#'>
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


      <div className='profile__container__about-me'> 
        <h2>Sobre mí</h2>
        <p>
          Lorem ipsum porrum dolorum equis deum. Lorem ipsum porrum dolorum equis deumLorem ipsum porrum dolorum equis deumLorem ipsum porrum dolorum equis deum Lorem ipsum porrum dolorum equis deum Lorem ipsum porrum dolorum equis deum Lorem ipsum porrum dolorum equis deum Lorem ipsum porrum dolorum equis deum Lorem ipsum porrum dolorum equis deum Lorem ipsum porrum dolorum equis deum
        </p>
      </div>
    </div>
  )
}
