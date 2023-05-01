import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Component/Footer/Footer';

const Main = () => {
    return (
        <div className='container mx-auto '>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;