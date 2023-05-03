import React from 'react';
import Header from '../Header/Header';
import OurRecipe from '../OurRecipe/OurRecipe';
import Feedback from '../Feedback/Feedback';
import Chef from '../Chef/Chef';



const Home = () => {
    return (
        <div>

            <Header></Header>
            <Chef></Chef>
            <OurRecipe></OurRecipe>
            <Feedback></Feedback>

        </div>
    );
};

export default Home;