import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './MainTour.css';

const MainTour = (props) => {
    const {img,place,person,price,key} = props.sendTour;
    return (
        <div className="secificTourStyle mb-5 shadow-lg p-3 mb-5 bg-body ">
              <div className="">
              <Card style={{ width: '29rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title className="text-primary fs-3 fw-bolder">Tour</Card.Title>
                    <h3 className="text-primary">Place: {place}</h3>
                    <h4>Person: {person}</h4>
                    <h4>Price: {price}</h4>
                    <Card.Text>
                    </Card.Text>
                    <Link to={`/booking/${key}`}>
                        <button type="button" className="btn btn-primary fw-bold ">Book Now</button>
                    </Link>
                </Card.Body>
            </Card>
              </div>
        </div>
    );
};

export default MainTour;