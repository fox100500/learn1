import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/pexels1.jpg';
import img2 from '../assets/pexels2.jpg';
import img3 from '../assets/pexels3.jpg';


export default class CaruselBox extends Component {
    render() {
        return (
            <Carousel className="carousel-fade carousel">
                <Carousel.Item>
                    <img className="d-block w-100"
                        src={img1}
                        alt="pexel1"
                    />
                    <Carousel.Caption>
                        <h3>
                            Image1
                        </h3>
                        <p>РРРРРРРРРРРРРРРРРРР</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100"
                        src={img2}
                        alt="pexel2"
                    />
                    <Carousel.Caption>
                        <h3>
                            Image2
                        </h3>
                        <p>РРРРРРРРРРРРРРРРРРР</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100"
                        src={img3}
                        alt="pexel3"
                    />
                    <Carousel.Caption>
                        <h3>
                            Image3
                        </h3>
                        <p>РРРРРРРРРРРРРРРРРРР</p>
                    </Carousel.Caption>
                </Carousel.Item>                                
            </Carousel>
        )
    }
}