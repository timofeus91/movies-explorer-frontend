import React from 'react';
import Header from "../Header/Header.js";
import Footer from '../Footer/Footer.js';
import Promo from '../Promo/Promo.js';
import AboutProject from '../AboutProject/AboutProject.js';
import Techs from '../Techs/Techs.js';
import AboutMe from '../AboutMe/AboutMe.js';
import Portfolio from '../Portfolio/Portfolio.js';

function Main() {
    return (
      <>
        <Header />
        <Main>
          <Promo />
          <AboutProject />
          <Techs />
          <AboutMe />
          <Portfolio />
        </Main>
        <Footer />
      </>
    );
}

export default Main;