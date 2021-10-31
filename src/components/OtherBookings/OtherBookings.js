import React, { useEffect, useState } from 'react';
import OthersBooking from '../OthersBooking/OthersBooking';

const OtherBookings = () => {
    const [orders, setOrders] = useState([]);
    useEffect( ()=>{
        fetch('http://localhost:5000/orders')
        .then(response => response.json())
        .then(data => setOrders(data))
    },[])
    return (
        <div>
            <h1 className="mt-5 mb-5 text-primary fw-bolder">Running Tour</h1>
              <div className="tourStyle">
                  {
                      orders.map(order => <OthersBooking
                      key={order._id}
                      sendOrder = {order}
                      ></OthersBooking>)
                  }
              </div>
        </div>
    );
};

export default OtherBookings;