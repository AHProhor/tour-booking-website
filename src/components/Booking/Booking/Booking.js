import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import './Booking.css';

const Booking = () => {
    const [bookTour,setBookTour] = useState({});
    const { register, handleSubmit,reset } = useForm();
    const {bookingId} = useParams();

    useEffect(()=>{
        fetch(`https://ghoulish-moonlight-60677.herokuapp.com/tours/${bookingId}`)
        .then(res => res.json())
        .then(data => setBookTour(data))
    },[])
    
    
    const onSubmit = data =>{ 
        console.log(data);
        axios.post('https://ghoulish-moonlight-60677.herokuapp.com/orders',data)
        .then(res =>{
            if(res.data.insertedId){
                alert('Successfully added');
                reset();
            }
        })
    }
    return (
        <div className="bookingPageStyle">

            <div className="orderDetailStyle">
                <h1>You Select</h1>
            <Card>
                <Card.Img variant="top" src={bookTour.img} />
                <Card.Body>
                    <Card.Title>Tour</Card.Title>
                    <h2>Place: {bookTour.place}</h2>
                    <h2>Person: {bookTour.person}</h2>
                    <h2>Price: {bookTour.price}</h2>
                    <h5 className="text-danger">Id : {bookingId}</h5>
                    <p>{bookTour.descripton}</p>
                </Card.Body>
            </Card>
            </div>
            
            <div className="userInfoStyle">
                <h1>User Information</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name")} placeholder="Full Name" />
                    <input {...register("address")} placeholder="address" />
                    <input {...register("address")} placeholder="Tour ID" />
                    <input type="number" {...register("phoneNumber")} placeholder="Phone Number" />
                    <input {...register("requirement")} placeholder="Special Requirement" />
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Booking;