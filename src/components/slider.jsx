import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';


class Slider extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src="https://foodtank.com/wp-content/uploads/2021/07/alfons-morales-YLSwjSy7stw-unsplash.jpg"
                        // src='D:\ITI\React\reactapp\src\assets/photo-1514894780887-121968d00567.jpg'
                        alt="First slide"
                        style={{ width: '900px', height: '700px' }}
                    />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1514894780887-121968d00567?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80"
                        alt="Second slide"
                        style={{ width: '900px', height: '700px' }}
                    />

                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1526243741027-444d633d7365?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
                        alt="Third slide"
                        style={{ width: '900px', height: '700px' }}
                    />
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default Slider;
