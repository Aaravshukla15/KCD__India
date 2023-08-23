import React from 'react'
import SECH from 'D:/as drive/KCD Project/kerasapp/src/images/Sech img.png';
import './Details.css';

function Details() {
  return (
    <div className='section__container secheader__container'>
      <div class="secheader__image">
          <img src={SECH} alt=''/>
      </div>
      <div className='secheader__content'>
      <div>
        <p className='left__abouts'>
            Each Keras Community Days event brings you an opportunity to learn about Keras and machine learning related Technology and
            provides you opportunity to learn different Keras APIs from the industry experts. <br/><br/>Our experts will tell you how keras
            Platform and its funtionalities can help you in accelerating your career by boosting your knowledge.
            <br/><br/>You’ll also stand a chance to get Open Source contribution opportunities and chance to win exciting Goodies at any Keras 
            Community Days event you become a part of.
        </p>
      </div>
      <div class="action__btns">
        <a href=" " target="_blank"><button class="btnss">Learn More about GDG Programes</button></a>
      </div>
      </div>
    </div>
  )
}

export default Details;
