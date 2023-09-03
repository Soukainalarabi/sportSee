import React from 'react';
import '../../style.css';
import icon1 from '../../assets/icon1.png';
import icon2 from '../../assets/icon2.png';
import icon3 from '../../assets/icon3.png';
import icon4 from '../../assets/icon4.png';

function SideBar() {
  return (
    <div className="menu-vertical">
      <ul>
        <li>
          {' '}
          <img src={icon1} alt="logo du site" />
        </li>
        <li>
          {' '}
          <img src={icon2} alt="logo du site" />
        </li>
        <li>
          {' '}
          <img src={icon3} alt="logo du site" />
        </li>
        <li>
          {' '}
          <img src={icon4} alt="logo du site" />
        </li>
      </ul>
      <p className="li-vertical">Copiryght, SportSee 2020</p>

    </div>
  );
}
export default SideBar;
