import React from 'react';
import '../style/main.css';
import background from '../assets/images/background.jpg';
import logo from '../assets/images/Logo.png';
function Section() {
  return (
    <body>
      <section>
        <div className="flex flex-nowrap">
          <img src={background} className="mx-7 ImageCode" />
          <h1 className="theh1 mx-5 font-bold flex items-center justify-center mb-4">
            l'équipe qui a développé l'application.
            <br /> L'équipe de développement Auto Hall présente une application
            appelée "Profile Manager" conçue pour les gestionnaires et les
            administrateurs. Il simplifie la gestion des profils employeurs et
            propose un tableau de bord informatif. Les utilisateurs peuvent
            facilement faire défiler ou naviguer à l'aide de la barre de
            navigation pour afficher les statistiques et accéder aux services.
          </h1>
        </div>
        <div className="flex flex-row-reverse">
          <img src={logo} className="mx-7 ImageCode" />
          <h1 className="theh1 mx-5 font-bold flex items-center justify-center text-violet-800 mb-3">
            l'application.
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
    </body>
  );
}
export default Section;
