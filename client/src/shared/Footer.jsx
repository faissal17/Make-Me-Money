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
              Make Me Money, is a trusted website, when I discovered the
              Internet for the first time, I was like a drop in the ocean, money
              is significant for a good living, I tried to make money from the
              Internet but without a result, so I created this website so you
              don't face the same problem i had, here is a whole community to
              help you make money in a safe way Make Me Money, is a trusted
              website, when I discovered the Internet for the first time, I was
              like a drop in the ocean, money is significant for a good living,
              I tried to make money from the Internet but without a result, so I
              created this website so you don't face the same problem i had,
              here is a whole community to help you make money in a safe way
              Make Me Money, is a trusted website, when I discovered the
              Internet for the first time, I was like a drop in the ocean, money
              is significant for a good living, I tried to make money from the
              Internet but without a result, so I created this website so you
              don't face the same problem I had, here is a whole community to
              help you make money in a safe way
            </p>
          </div>

          <div className="footer-links-div">
            <h4>Contact Us</h4>
            <p>Email : autohall@autohall.ma</p>
            <p>Fax : 0522 76 14 14/15</p>
            <p>Phone : 0522 76 14 00/01/02</p>
          </div>
        </div>
        <hr />
        <div className="footer-below mt-3">
          <div className="footer-copyright">
            <p>
              Copyright @{new Date().getFullYear()} Make Me Money - All right
              are reserved
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
