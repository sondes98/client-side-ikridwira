import React, { Component } from 'react';
import { Header } from '../../components/header/Header';
import  { ResidanceCarousel } from '../../components/carousel/Carousel';
import { SectionA } from "../../containers/SectionA";

class Home extends Component {
render() {
return (
    <div >
        <Header/>
        <ResidanceCarousel/>
        <SectionA/>
    </div>
)
}
}

export default Home;