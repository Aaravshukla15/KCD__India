import React from 'react';
import ImLog from 'D:/as drive/KCD Project/kerasapp/src/images/KCD.png';
// import './Head.css';
import "./Haed.css";
import { AiFillCalendar } from "react-icons/ai";
import { AiOutlineEnvironment} from "react-icons/ai";


import Map from "D:/as drive/KCD Project/kerasapp/src/images/1200px-India_Map.png";
import Sigma from "D:/as drive/KCD Project/kerasapp/src/images/Keras_Sigma.png";
import Chidiya from "D:/as drive/KCD Project/kerasapp/src/images/Twitter Logo.png";


const Head = () => {
  return (

    <header>
      <div class="section__container header__container" id="home">
        <div class="header__image">
          <img src={Sigma} alt="header" />
          <img src={Map} alt="header" />
        </div>
        <div class="header__content">
          <div>
            <img src={ImLog} alt=''/>
            <h1 class="section__subtitles">
              Community Days 2023
            </h1>
              <br />
              <p className='left__month'> <AiFillCalendar className='left__calender'/>  August - September 2023 <b className='left__line'> |</b> 
             <AiOutlineEnvironment className='left__loc'/> India </p>
            <p className='left__about'> <b className='left__ab'>#KerasCommunityDays -</b>  is series of community-leds events organised by TFUG communities
              across India to help you for interacting with different Machine Learning technologies and learn more about Keras.</p>
            <div class="action__btns">
            <div class="story">
                <div class="video__image">
                  <a href="https://twitter.com/TFUGIndia"><img src={Chidiya} alt="story" /></a>
                </div>
                <span>Stay Updated</span>
              </div>  
              <a href="https://www.tensorflow.org/community/groups" target="blank"><button class="bns">Previous TFUG Events</button></a>            
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Head;