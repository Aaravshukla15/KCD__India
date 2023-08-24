import React, { useState } from 'react'
import './Navbar.css';
import Logo from 'D:/as drive/KCD Project/kerasapp/src/images/Keras Community Day.png';
import {AiOutlineShareAlt} from 'react-icons/ai';

const Navbar = () => {
    const [active,setActive] = useState("nav__menu");
    const [toggleIcon, settoggleIcon] = useState("nav__toggler");

    const navToggle = () =>{

        active === "nav__menu"
        ? setActive("nav__menu nav__active")
        : setActive("nav__menu")

        // toggle icon
    toggleIcon === "nav__toggler"
    ?settoggleIcon("nav__toggler toggle")
    :settoggleIcon("nav__toggler")

    };
    

  return (
    <nav>
        <img className="nav__logo" src={Logo} alt=''/>
        <ul className={active}>
            <li className='nav__items'>
                <a href="src\components\Head\Head.jsx" >Home</a>
            </li>
            <li className='nav__items'>
                <a href=' ' >FAQ</a>
            </li>
            <li><AiOutlineShareAlt className='log'/></li>
        </ul>
        <div onClick={navToggle} className={toggleIcon}>
            <div className='line1'></div>
            <div className='line2'></div>
            <div className='line3'></div>
        </div>
    </nav>
  )
}

export default Navbar;