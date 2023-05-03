import React from 'react';
import { useParams } from 'react-router-dom';

const ChefRecipe = () => {
    const {id} = useParams()
    return (
        <div>
            chef recipe {id}
        </div>
    );
};

export default ChefRecipe;