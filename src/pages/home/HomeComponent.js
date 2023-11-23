import React, { Component } from 'react';
import { Header } from '../../components/header/Header';
import  { ResidanceCarousel } from '../../components/carousel/Carousel';


class Home extends Component {
render() {
return (
    <div>
        <Header/>
        <ResidanceCarousel/>
    </div>
)
}
}

export default Home;