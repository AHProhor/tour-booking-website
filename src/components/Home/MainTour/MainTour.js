import React from 'react';
import { Card } from 'react-bootstrap';
import './MainTour.css';

const MainTour = (props) => {
    const {img,place,description,person,price} = props.sendTour;
    return (
        <div className="secificTourStyle mb-5 shadow-lg p-3 mb-5 bg-body ">
              <div className="">
              <Card style={{ width: '29rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title className="text-primary fs-3 fw-bolder">Tour</Card.Title>
                    <h3>Place: {place}</h3>
                    <h3>Person: {person}</h3>
                    <p> Price: {price}</p>
                    <Card.Text>{description}
                    </Card.Text>
                    <button type="button" class="btn btn-primary fw-bold ">Book Now</button>
                </Card.Body>
            </Card>
              </div>
        </div>
    );
};

export default MainTour;