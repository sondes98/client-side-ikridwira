import React, { Component } from 'react';
import { Header } from '../../components/header/header';
import  { ResidanceCarousel } from '../../components/carousel/Carousel';
import FooterSection from '../../containers/footerSection';
import { AppartementSection } from '../../containers/AppartementSection';
import AnnouceContainer from '../../containers/annouceContainer';

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


