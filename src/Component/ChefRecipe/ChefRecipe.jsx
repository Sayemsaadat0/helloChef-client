import { Link, useLoaderData, useParams } from 'react-router-dom';
import { GrFavorite, GrLike } from 'react-icons/Gr';
import toast, { Toaster } from 'react-hot-toast';
import LazyLoad from 'react-lazy-load';
import './ChefRecipe.css'
import { useEffect, useState } from 'react';


// http://localhost:6969/recipe/1
const ChefRecipe = () => {
   /*  const [recipe, setrecipe] = useState([])

    useEffect(() => {
        fetch(`http://localhost:6969/recipe/${id}`)
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(error => console.error(error))
    },
        [])
 */


    const notify = () => toast('added to favoroit');
    // const { id } = useParams()
    const chefData = useLoaderData();
    console.log(chefData[0]);
    const { chef_name, chef_picture, chef_short_bio, year_of_experience, number_of_recipes, likes } = chefData[0];

    return (
        <div >
            {/* chef bannner details */}
            <div className='flex bg-red-500 shadow-xl text-white'>
                <div>
                    <LazyLoad  threshold={0.95}>
                        <img src={chef_picture} alt="" />
                    </LazyLoad>

                </div>
                <div className='w-96  mx-auto flex flex-col justify-center'>
                    <p>
                        Chef Name : {chef_name}</p>
                    <p>
                        Details : {chef_short_bio}
                    </p>
                    <p>
                        Year of experience : {year_of_experience} Years
                    </p>
                    <p>
                        Number of Recipes {number_of_recipes}
                    </p>
                    <p className='flex gap-2 items-center'>
                        <GrLike></GrLike> {likes}
                    </p>
                    <Link className='block outline px-5 w-36 text-center text-white py-2 mt-5 hover:bg-red-700' to='/'>
                        Go home
                    </Link>
                </div>
            </div>
            {/*  food card  */}
            <div>
                <div className='card shadow-lg w-60 mt-10 bg-yellow-200'>
                    <p className='card-title '>
                        kich shhfdjsdjj
                        <button onClick={notify}>
                            <Toaster></Toaster>
                            <GrFavorite></GrFavorite>
                        </button>
                    </p>
                </div>
            </div>

        </div>
    );
};

export default ChefRecipe;
