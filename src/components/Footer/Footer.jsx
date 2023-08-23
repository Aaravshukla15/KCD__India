import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <section className='footer'>
      <div className='foot'>
        <p className='foot__title'>Tensorflow User Group India</p>
        <br/>
        <ul>
            <li>
                <a href='https://developers.google.com/community/gdg' target='blank' > About GDG</a> 
            </li>
            <li>
                <a href=' ' target='blank'>FAQ</a> 
            </li>
            <li>
                <a href=' ' target='blank'>Code of Conduct</a> 
            </li>
            <li>
                <a href='https://developers.google.com/community-guidelines' target='blank' >Community Guidelines </a> 
            </li>
        </ul>
      </div>
    </section>
  )
}

export default Footer;
