import React, {Component} from 'react';
import {Carousel, Image} from "react-bootstrap";

class CarouselComponent extends Component {
    render() {
        return (
            <div>
                <h1>CarouselComponent</h1>
                {/* Of course you can render Carousel.Items in a loop, using .map(). We */}
                {/* just hardcoded them here as an example.*/}
                <Carousel>
                    {/*First slide */}
                    <Carousel.Item>
                        <Carousel.Caption>
                            <h3>Tommy</h3>
                        </Carousel.Caption>
                        <Image src={require('../img/cat-1.jpeg')} fluid alt={'Cat 1'}/>
                    </Carousel.Item>
                    {/*Second slide */}
                    <Carousel.Item>
                        <Carousel.Caption>
                            <h3>Joakim</h3>
                        </Carousel.Caption>
                        <Image src={require('../img/cat-2.png')} fluid alt={'Cat 2'}/>
                    </Carousel.Item>
                    {/*Third  slide */}
                    <Carousel.Item>
                        <Carousel.Caption>
                            <h3>Hannes</h3>
                        </Carousel.Caption>
                        <Image src={require('../img/cat-3.jpg')} fluid alt={'Cat 3'}/>
                    </Carousel.Item>
                    {/*Fourth  slide */}
                    <Carousel.Item>
                        <Carousel.Caption>
                            <h3>Chris</h3>
                        </Carousel.Caption>
                        <Image src={require('../img/cat-4.jpg')} fluid alt={'Cat 4'}/>
                    </Carousel.Item>
                    {/*Fifth slide */}
                    <Carousel.Item>
                        <Carousel.Caption>
                            <h3>Pår</h3>
                        </Carousel.Caption>
                        <Image src={require('../img/cat-5.jpg')} fluid alt={'Cat 5'}/>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

export default CarouselComponent;
