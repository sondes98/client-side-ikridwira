import React, { Component } from "react";
import { Header } from "../../components/header/Header";
import { AppartementSection } from "../../containers/AppartementSection";
import AnnouceContainer from "../../containers/AnnouceContainer";
import FooterSection from "../../containers/FooterSection";
import RCarousel from "../../components/carousel/RCarousel";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <RCarousel />
        <AnnouceContainer />
        <AppartementSection />
        <FooterSection />
      </div>
    );
  }
}

export default Home;
