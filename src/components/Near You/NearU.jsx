import React from 'react';
import './NearU.css'
import KCD_C from '../../images/KCD Chandigarh.jpg';
import KCD_D from '../../images/KCD Durg.jpg';
import KCD_J from '../../images/KCD Jaipur.png'



const images = [
    { url: KCD_C,
     text: '10 sept 2023', text1: 'Keras Community Day Chandigarh',
      link: 'https://gdg.community.dev/e/mpvmy8/' },

    { url: KCD_D,
     text: '11 sept 2023', text1: 'Keras Community Day Durg',
     link: 'https://kcddurg.vercel.app/' },

    { url: KCD_J, 
    text: '12 sept 2023', text1: 'Keras Community Day Jaipur',
     link: 'https://gdg.community.dev/events/details/google-gdg-jaipur-presents-keras-community-day-by-tensorflow-user-group-jaipur/' },
   
   
    // Add more image objects here
  ];


function NearU() {
  return (
    <div>
        <p className='he'>Find a Keras Community Day near you</p>
        <p className='pe'>Communities from all over India are organzing Keras Community Day events. 
        Locate your nearest GDG or TFUG community and join the celebration of Keras technologies near you!
</p>
    
    <div className="image-grid">
      {images.map((img) => (
        <div className="image-box" >
          <a href={img.link} target="_blank" rel="noopener noreferrer">
            <img src={img.url} alt={img.text} />
            <span className="image-text">{img.text}</span>
            
          </a>
          <p className="image-text1" >{img.text1}</p>
        </div>
      ))}
      </div>
    </div>
  );
}

export default NearU;

