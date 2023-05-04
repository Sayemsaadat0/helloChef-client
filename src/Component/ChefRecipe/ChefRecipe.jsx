import { Link, useLoaderData, useParams } from 'react-router-dom';
import { GrFavorite, GrLike } from 'react-icons/Gr';
import toast, { Toaster } from 'react-hot-toast';
import LazyLoad from 'react-lazy-load';
import './ChefRecipe.css'
import { useEffect, useState } from 'react';




const ChefRecipe = () => {
    const [recipes, setrecipes] = useState([])
    const notify = () => toast('added to favoroit');

    const chefData = useLoaderData();


    const { chef_name, chef_picture, chef_short_bio, year_of_experience, number_of_recipes, likes, id } = chefData[0];


    useEffect(() => {
        fetch(`https://hellochef-server-sayemsaadat0.vercel.app/recipe/${id}`)
            .then(res => res.json())
            .then(data => setrecipes(data))
            .catch(error => console.log(error))
    },
        [id])


    return (
        <div >
            {/* chef bannner details */}
            <div className='flex bg-red-500 shadow-xl text-white'>
                <div>
                    <LazyLoad threshold={0.95}>
                        <img src={chef_picture} alt="" />
                    </LazyLoad>

                </div>
                <div className='w-96  mx-auto flex flex-col justify-center'>
                    <p>
                        Chef Name :{chef_name}</p>
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
                <div >
                    <h3 className='text-red-500 text-center text-3xl font-semibold mt-20 mb-5'>
                        Explore food
                    </h3>
                    <div className='md:grid grid-cols-3'>
                        {
                            recipes.map(recipe => <div key={recipe.id} className="card card-compact w-96 bg-base-100 shadow-xl">
                                <button className='mb-2 w-full flex justify-end items-center' onClick={notify}>
                                    add to favorit
                                    <Toaster></Toaster>
                                    <GrFavorite></GrFavorite>
                                </button>

                                <figure><img src="https://i.ndtvimg.com/i/2016-04/japanese-food-625_625x406_81461928658.jpg" alt="" /></figure>
                                <div className="card-body">

                                    <h2 className="card-title">{recipe.food_name}</h2>
                                    <p>Cooking methood : {recipe.cooking_method}</p>
                                    <p>Cooking methood : {recipe.cooking_method}</p>
                                    <p>Ratings : {recipe.rating}</p>

                                    <ul className='list-disc'>ingradients : {recipe.food_ingredients.map((food, i) => <li >{food}</li>)}</ul>
                                    <div className="card-actions justify-end">

                                        <button className="btn btn-primary">Buy Now</button>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>



        </div>
    );
};

export default ChefRecipe;


