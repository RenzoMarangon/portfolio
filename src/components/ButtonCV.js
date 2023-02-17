import React, { useEffect, useLayoutEffect, useState } from 'react'

import $ from 'jquery'



export const ButtonCV = () => {

    const [ mouseMove, setMouseMove ] = useState(true);

    useLayoutEffect(() => {
        mouseMove && 
        (
            $(".cta").on('mouseenter',(function(){
                $(this).addClass("active").delay(300).queue(function(next){
                  $(this).removeClass("active");
                  next();
                });
                setTimeout(()=>{
                    setMouseMove(false);

                },1000)
              })
              )
        )
    }, [])

    useEffect(()=>{
        !mouseMove && 
            (
                setTimeout(()=>{
                  setMouseMove(true);
                },3000)
            )
    },[mouseMove])


  return (
    <div className="wrap">
    <div className="box">
    <button className="cta">
      <a href="#">Descargar CV</a>
      <span className="shape">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </span>
    </button>
    </div>
  </div>
  )
}
