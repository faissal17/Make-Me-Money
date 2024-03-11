import React from 'react';
import '../style/main.css';
import background from '../assets/images/App.png';
import logo from '../assets/images/programing.png';
function Section() {
  return (
    <section>
      <div className="flex flex-nowrap">
        <img src={background} className="mx-7 ImageCode" />
        <h1 className="theh1 mx-5 font-bold flex items-center justify-center mb-4">
          What is Make Me Money?
          <br /> is a powerful web application designed to assist individuals in
          sharing their freelancing experiences and providing valuable advice on
          the leading freelancing websites. Whether you are a seasoned
          freelancer or a newcomer to the gig economy, Make-Me-Money aims to be
          your go-to platform for insights, tips, and recommendations.
        </h1>
      </div>
      <div className="flex flex-row-reverse">
        <img src={logo} className="mx-7 ImageCode" />
        <h1 className="theh1 mx-5 font-bold flex items-center justify-center text-violet-800 mb-3">
          How does it work?
          <br /> L'application conçue pour résoudre la gestion des profils des
          managers. En utilisant cette application, vous pouvez voir
          l'utilisateur et les employeurs de votre entreprise. Vous pouvez
          attribuer un rôle. Ajouter, modifier et supprimer des utilisateurs,
          vous pouvez également voir qui est actif ou non, il s'agit donc
          essentiellement d'une application complète pour gérer vos employés,
          l'utilisateur peut également voir son profil le modifier ou envoyer
          une demande à l'administrateur pour le désactiver
        </h1>
      </div>
    </section>
  );
}
export default Section;
