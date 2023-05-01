import React from 'react';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import OurRecipe from '../OurRecipe/OurRecipe';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <OurRecipe></OurRecipe>
        </div>
    );
};

export default Home;