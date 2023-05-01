import React from 'react';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import OurRecipe from '../OurRecipe/OurRecipe';
import Feedback from '../Feedback/Feedback';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <OurRecipe></OurRecipe>
            <Feedback></Feedback>
        </div>
    );
};

export default Home;