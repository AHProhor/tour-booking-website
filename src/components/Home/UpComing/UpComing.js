import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const UpComing = () => {
    return (
        <div>
            <div className="upcomingTourStyle">
            <h1 className="mt-5 mb-5 text-primary fw-bolder">Upcoming Tour</h1>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src="" />
                    <Card.Body>
                    <Card.Title className="text-primary fs-3 fw-bolder">Head of Sergery</Card.Title>
                    <h2>Name: Dr. Yarn Blain</h2>
                    <Card.Text>
                    Zahed Tajeddin had always wanted to live in Aleppo's historic old town, in one of the city's ancient houses, with a front door opening into a corridor that leads to courtyard with a fountain and jasmine climbing up the walls.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src="" />
                    <Card.Body>
                    <Card.Title className="text-primary fs-3 fw-bolder">Heade of Gynaecology</Card.Title>
                    <h2>Name: Dr. MRs. Smith</h2>
                    <Card.Text>
                    Zahed Tajeddin had always wanted to live in Aleppo's historic old town, in one of the city's ancient houses, with a front door opening into a corridor that leads to courtyard with a fountain and jasmine climbing up the walls.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="ml-5">
                    <Card.Img variant="top" src="" />
                    <Card.Body>
                    <Card.Title className="text-primary fs-3 fw-bolder">Head of Orthopedics</Card.Title>
                    <h2>Name: Dr. Jhon Mark</h2>
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