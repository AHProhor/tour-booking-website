import React from 'react';
import { Card } from 'react-bootstrap';

const OthersBooking = (props) => {
    const {name,phoneNumber,address,_id} = props.sendOrder;
    return (
        <div className="secificTourStyle mb-5 shadow-lg p-3 mb-5 bg-body ">
              <div className="">
              <Card style={{ width: '29rem' }}>
                <Card.Body>
                    <Card.Title className="text-primary fs-3 fw-bolder">Tour</Card.Title>
                    <h4>Person: {address}</h4>
                    <h4>Price: {name}</h4>
                    <h4>Price: {phoneNumber}</h4>
                    <Card.Text>
                    </Card.Text>
                </Card.Body>
            </Card>
              </div>
        </div>
    );
};

export default OthersBooking;