import React from 'react';
import './Explore.css';
import EXPK from 'D:/as drive/KCD Project/kerasapp/src/images/Explore Keras.jpg';
import KAPI from 'D:/as drive/KCD Project/kerasapp/src/images/Keras API.jpg';
import KOPS from 'D:/as drive/KCD Project/kerasapp/src/images/Keras OPS.jpg';

function Explore() {
  return (
    
    <section class="explore" id="expk">
    <h2 class="hee">Explore Keras</h2>
        <p class="pee">
          Explore keras and the services provided by them. Here you can
          find everything about keras.
        </p>
      <div class="section__container explore__container">
        <div class="explore__grid">
          <div class="explore__card">
            <img src={EXPK} alt="explore" />
            <div class="explore__details">
              <p>Explore Keras</p>
              <div class="Click__box">
                <a href="https://keras.io/" target="blank"><button class="explore__now">Click Here</button></a>
              </div>
            </div>
          </div>
          <div class="explore__card">
            <img src={KAPI} alt="explore" />
            <div class="explore__details">
              <p>Explore Keras APIs</p>
              <div class="Click__box">
                <a href="https://keras.io/api/" target = "blank"><button class="explore__now">Click Here</button></a>
              </div>
            </div>
          </div>
          <div class="explore__card">
            <img src={KOPS} alt="explore" />
            <div class="explore__details">
              <p>Contribute on Keras</p>
              <div class="Click__box">
                <a href="https://github.com/keras-team/keras" target = "blank" ><button class="explore__now">Click Here</button></a>
              </div>
            </div>
          </div>
        </div>
        <div class="view__al">
          <a href="https://keras.io/" target = "blank"><button class="bt">Explore More</button></a>
        </div>
      </div>
    </section>

    
  )
}

export default Explore;
