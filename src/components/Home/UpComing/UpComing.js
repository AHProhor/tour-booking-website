import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const UpComing = () => {
    return (
        <div>
            <div className="upcomingTourStyle">
            <h1 className="mt-5 mb-5 text-primary fw-bolder">Upcoming Tour</h1>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src="https://i.ibb.co/8gJ3knt/Hand-Luggage-Only-3-2.jpg" />
                    <Card.Body>
                    <Card.Title className="text-primary fs-3 fw-bolder">Nepal</Card.Title>
                    <Card.Text>
                    Zahed Tajeddin had always wanted to live in Aleppo's historic old town, in one of the city's ancient houses, with a front door opening into a corridor that leads to courtyard with a fountain and jasmine climbing up the walls.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://i.ibb.co/0rHQZP4/60b3613d534c87001d3100ae.jpg" />
                    <Card.Body>
                    <Card.Title className="text-primary fs-3 fw-bolder">India</Card.Title>
                    <Card.Text>
                    Zahed Tajeddin had always wanted to live in Aleppo's historic old town, in one of the city's ancient houses, with a front door opening into a corridor that leads to courtyard with a fountain and jasmine climbing up the walls.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="ml-5">
                    <Card.Img variant="top" src="https://i.ibb.co/rdFn3wy/shutterstock-1566472765.jpg" />
                    <Card.Body>
                    <Card.Title className="text-primary fs-3 fw-bolder">Thailand</Card.Title>
                    <Card.Text>
                    Zahed Tajeddin had always wanted to live in Aleppo's historic old town, in one of the city's ancient houses, with a front door opening into a corridor that leads to courtyard with a fountain and jasmine climbing up the walls.
                    </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
        </div>
    );
};

export default UpComing;


