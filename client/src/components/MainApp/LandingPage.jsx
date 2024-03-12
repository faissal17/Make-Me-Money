import React from 'react';
import Navbar from '../../shared/MainAppShared/Navbar';
import Section from '../../shared/MainAppShared/Section';
import Card from '../../shared/MainAppShared/Card';
import Footer from '../../shared/MainAppShared/Footer';
function LandingPage() {
  return (
    <React.Fragment>
      <Navbar />
      <Section />
      <Card />
      <Footer />
    </React.Fragment>
  );
}

export default LandingPage;
