import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';
import Home from '../pages/Home/Home/Home';

import { ColorRing } from  'react-loader-spinner'

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;