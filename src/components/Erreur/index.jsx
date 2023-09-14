import React from 'react';
import { Link } from 'react-router-dom';
import bug from '../../assets/404.png';

function Erreur() {
  return (
    <div className="container" style={{ marginTop: '10%' }}>
      <img src={bug} alt="erreur" className="erreur-img" />
      <div
        className="mx-auto"
        style={{ color: 'white', textAlign: 'center', marginTop: '3%' }}
      >
        <p> Oups! La page que </p>
        <p>vous demandez n&lsquo;existe pas.</p>
      </div>
      <div className="home" style={{ marginTop: '5%' }}>
        <Link to="/12">retourner à la page d&lsquo;Accueil</Link>
      </div>
    </div>
  );
}
export default Erreur;
