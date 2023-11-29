import React, { Component } from 'react';
import { Header } from '../../components/header/Header';
import  { ResidanceCarousel } from '../../components/carousel/Carousel';
import FooterSection from '../../containers/FooterSection';
import { AppartementSection } from '../../containers/AppartementSection';
import { AnnouceContainer } from '../../containers/AnnouceContainer';
import { HouseCardList } from '../../components/houseCard/HouseCardList';

class Home extends Component {
render() {
return (
    <div >
        <Header/>
        <ResidanceCarousel/>
        <AnnouceContainer/>
        <AppartementSection/>
        <FooterSection/>
    </div>
)
}
}

export default Home;


