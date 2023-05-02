import React from 'react';
import Header from '../Header/Header';
import OurRecipe from '../OurRecipe/OurRecipe';
import Feedback from '../Feedback/Feedback';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';


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