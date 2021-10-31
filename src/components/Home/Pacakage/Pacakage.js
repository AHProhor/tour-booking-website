import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Pacakage.css';
const Pacakage = () => {
    return (
        <div>
            <h1 className="mt-5 mb-5 text-primary fw-bolder">Group Tour Pacakge</h1>
            <div>
            <Carousel fade className="groupTourStyle mt-5">
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://i.ibb.co/mS86yfT/familyb.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>Tour For Family </h3>
                    <p className="text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem laboriosam totam perferendis nulla assumenda at, sint nemo molestias autem doloremque?</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://i.ibb.co/TBsNNCk/Using-Travel-Banners.jpg"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Honeymoon Pacakage</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://i.ibb.co/fnrXJTT/kazakhstan-small-group-tour-banner.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Corporate Tour</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </div>
        </div>
    );
};

export default Pacakage;



