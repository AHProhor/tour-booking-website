import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/404img.png';

const NotFound = () => {
    return (
        <div>
            <img src={img} alt="" /><br />
            <Link to="/"><button>Go Back</button></Link>
        </div>
    );
};

export default NotFound;