import React, { useEffect, useState } from 'react';
import MainTour from '../MainTour/MainTour';
import './MainTours.css';

const MainTours = () => {
   const [tours, setTours] = useState([]);


   useEffect( ()=>{
    fetch('pacakage.json')
    .then(response => response.json())
    .then(data => setTours(data))
},[])
    return (
        <div>
            <h1 className="mt-5 mb-5 text-primary fw-bolder">Running Tour</h1>
              <div className="tourStyle">
                  {
                      tours.map(tour => <MainTour
                      key={tour.key}
                      sendTour ={tour}
                      ></MainTour>)
                  }
              </div>
        </div>
    );
};

export default MainTours;