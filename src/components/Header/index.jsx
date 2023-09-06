import React from 'react';
import '../../style.css';
import logo from '../../assets/logo.png';

function Header() {
  return (
    <nav>
      <ul className="menu-horizontal">
        <li>
          <img src={logo} alt="logo du site" />
        </li>
        <li>Accueil</li>
        <li>Profil</li>
        <li>Réglages</li>
        <li>Communauté</li>
      </ul>

    </nav>
  );
}
export default Header;
