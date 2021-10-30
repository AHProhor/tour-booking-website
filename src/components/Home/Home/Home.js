import React from 'react';
import Banner from '../Banner/Banner';
import MainTours from '../MainTours/MainTours';
import Pacakage from '../Pacakage/Pacakage';
import UpComing from '../UpComing/UpComing';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MainTours></MainTours>
            <Pacakage></Pacakage>
            <UpComing></UpComing>
        </div>
    );
};

export default Home;