import React, { Component } from "react";
import { Header } from "../../components/header/Header";
import { Carousel } from "../../components/carousel/carousel";
import { AppartementSection } from "../../containers/appartementSection";
import AnnouceContainer from "../../containers/annouceContainer";
import FooterSection from "../../containers/footerSection";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Carousel />
        <AnnouceContainer />
        <AppartementSection />
        <FooterSection />
      </div>
    );
  }
}

export default Home;
