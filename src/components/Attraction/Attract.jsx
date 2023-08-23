import React from 'react';
import Logo from '../../images/Keras.png';
import './Attract.css';

function Attract() {
  return (
    <section className='attract'>
    <div className='section__container atheader__container'>
      <div class="atheader__image">
          <img src={Logo} alt=''/>
      </div>
      <div className='atheader__content'>
      <div>
        <p className='heee'>What to expect at a Keras Community Day event?</p>
        <p className='peee'>
            <b>Keras Community Days</b> events are a great place to start your journey with Keras and dive deep into Machine Learning. 
            Each Keras Community Days event brings together Google Developer experts in Machine Learning 
            along with another ML Developers & IT Practitioners who want to ecplore Keras, Tensorflow and ML.
            At the event, ask our experts for tips and doubts relating to your Keras and ML journey!
            <br />
            <br />
            Your nearest GDG or TFUG can help you with -
            <br />
            <br />
            1.Getting started hands-on with <b>Keras tools</b>.
            <br />
            2.Connect with partner companies at the event for <b>Job Openings</b>.
            <br />
            3.Win  <b>Amazing Swags</b> and get help for your doubts and <b>Your Projects</b> !
        </p>
      </div>
      </div>
    </div>
    </section>
  )
}

export default Attract;
