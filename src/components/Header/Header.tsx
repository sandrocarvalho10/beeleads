import React from 'react';
import Logo from '../../assets/logoBee.png';
import LogoBigtester from '../../assets/bigtester.png';
import './Header.css';


const Header = () => {
  return(
    <header>
      <a href="">
        <img src={Logo} alt="Logo do Grupo Bee" />
      </a>
      <a href="">
        <img src={LogoBigtester} alt="Logo do bigTester" />
      </a>
    </header>
  )
}

export default Header;