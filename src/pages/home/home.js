import React, { Component } from 'react';
import { Header } from '../../components/header/header';
import  { ResidanceCarousel } from '../../components/carousel/carousel';
import { AppartementSection } from '../../containers/appartementSection';
import AnnouceContainer from '../../containers/annouceContainer';
import FooterSection from '../../containers/footerSection';

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


