import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ChefRecipe = () => {
    const {id } = useParams()
    return (
        <div>
            chef recipe {id}
            <Link className='block bg-red-400 px-5 w-36 text-center text-white py-2 mt-5' to='/'>
            go home
            </Link>
        </div>
    );
};

export default ChefRecipe;