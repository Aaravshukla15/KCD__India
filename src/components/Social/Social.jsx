import React from 'react';
import './Social.css';
import Insta from '../../images/insta-removebg-preview.png';
import Twitter from '../../images/Twitter_Logo-r.png';
import FB from '../../images/fb.png';
import Linkedin from '../../images/linkedin.png';

function Social() {
  return (
    <section className='social'>
      <div className='socials'>
        <p className='ps'>
            Keep in touch with GDG Cloud India for the latest <br/> announcements
            <br/>
            <br/>
        </p>
        <p className='follow'>Follow out <span className='high'>#KerasCommunityDay</span> for the latest updates and news</p>

        <div class="footer__col">
        <div class="footer_1">
          <a href="https://www.facebook.com/profile.php?id=100088111825426" target="blank"><img class="footer_1_im"
            src={FB} alt="story" /></a>
          <a href="https://www.instagram.com/tfugdurg/" target="blank"><img class="footer_1_im"
            src={Insta} alt="story" /></a>
          <a href="https://twitter.com/TFUGDurg" target="blank"><img class="footer_1_im" src={Twitter}
            alt="story" /></a>
          <a href="https://www.linkedin.com/company/tfug-durg/"><img class="footer_1_ims" src={Linkedin}
            alt="story" /></a>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Social;
