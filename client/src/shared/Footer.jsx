import React from 'react';
import '../style/main.css';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <div className="footer mt-3">
      <div className="footer-sb section-padding">
        <div className="footer-links">
          <div className="footer-links-div">
            <h4>About Us</h4>
            <p className="text-sm">
              Auto Hall est un groupe marocain leader dans l'importation, la
              distribution et la location automobile. Ses filiales représentent
              des marques telles que Ford, Mitsubishi Motors, Foton, etc. Avec
              plus de 182 000 ventes de véhicules en 2021, dont 150 000 voitures
              particulières, le groupe exploite 65 agences et emploie 1 600
              personnes, dont le siège est à Casablanca.
            </p>
          </div>

          <div className="footer-links-div">
            <h4>Contact Us</h4>
            <p>Email : autohall@autohall.ma</p>
            <p>Fax : 0522 76 14 14/15</p>
            <p>Phone : 0522 76 14 00/01/02</p>
          </div>
          <div className="footer-links-div">
            <h4>Find Us</h4>
            <div className="flex">
              <a href="https://www.facebook.com/groupeautohall">
                <FaFacebook className="mr-2 text-blue-500 text-2xl" />
              </a>
              <p>Facebook</p>
            </div>
            <div className="flex">
              <a href="https://instagram.com/groupeautohall?igshid=MzRlODBiNWFlZA==">
                <FaInstagram className="mr-2 text-pink-500 text-2xl" />
              </a>
              <p>Instagram</p>
            </div>
            <div className="flex">
              <a href="https://www.linkedin.com/company/autohalllallayacout/">
                <FaLinkedin className="mr-2 text-blue-700 text-2xl" />
              </a>
              <p>Linkedin</p>
            </div>
            <div className="flex">
              <a href="https://www.youtube.com/@groupeautohall6720">
                <FaYoutube className="mr-2 text-red-500 text-2xl" />
              </a>
              <p>Youtube</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="footer-below mt-3">
          <div className="footer-copyright">
            <p>
              Copyright @{new Date().getFullYear()} Auto Hall - Tous droits
              réservés.
            </p>
          </div>
          <div className="footer-below-links">
            <a href="https://www.autohall.ma/reseau">
              <div>
                <p>RÉSEAU AUTO HALL</p>
              </div>
            </a>
            <a href="https://www.autohall.ma/plan-d-acces">
              <div>
                <p>PLAN DU SITE</p>
              </div>
            </a>
            <a href="https://www.autohall.ma/contact">
              <div>
                <p>CONTACT</p>
              </div>
            </a>
            <a href="https://www.autohall.ma/conditions-generales-d-utilisation">
              <div>
                <p>CGU</p>
              </div>
            </a>
            <a href="https://www.autohall.ma/confidentialite-et-securite">
              <div>
                <p>CONFIDENTIALITÉ ET SÉCURITÉ</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
