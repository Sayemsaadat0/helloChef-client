import { Link, useLoaderData, useParams } from 'react-router-dom';
import { GrFavorite, GrLike } from 'react-icons/Gr';
import { FaArrowCircleLeft } from 'react-icons/Fa';
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
                    <p className='text-3xl font-semibold mb-2 border p-2'>
                          {chef_name}</p>
                    <p className='mb-2'> 
                        <span className='underline'>Details</span> : {chef_short_bio}
                    </p>
                    <p>
                        <span className='underline'> Year of experience </span>
                       : {year_of_experience} Years
                    </p>
                    <p>
                        <span className='underline'>Number of Recipes </span> : 
                         {number_of_recipes}
                    </p>
                    <p className='flex gap-2 items-center'>
                     likes :    <GrLike></GrLike> {likes}
                    </p>
                    <Link className='justify-between outline px-5 w-36 text-center text-white py-2 mt-5 flex  items-center hover:bg-red-700' to='/'>
                      <FaArrowCircleLeft></FaArrowCircleLeft>  Go home
                    </Link>
                </div>
            </div>
            {/*  food card  */}
            <div>
                <div >
                    <h3 className='text-red-500 text-center text-3xl font-semibold mt-20 mb-5'>
                        Explore food
                    </h3>
                    <p className='w-[50%] mx-auto text-center mb-10'>
                    Discover new ingredients, flavors, and techniques from around the globe and elevate your culinary skills. From Asian street food to Mediterranean delicacies, our Explore Food section is your gateway to a world of gastronomic adventure.
                    </p>
                    <div className='md:grid grid-cols-3'>
                        {
                            recipes.map(recipe => <div key={recipe.id} className="card card-compact w-96 bg-base-100 shadow-xl hover:scale-110 duration-500 hover:shadow-cyan-300">
                               

                                <figure><img src={recipe.food_image} alt="" /></figure>
                                <div className="card-body">

                                    <h2 className="card-title">{recipe.food_name}</h2>
                                    <p><span className='bg-red-200 mr-2'>Cooking methood :  </span> {recipe.cooking_method}</p>
                                   
                                   

                                    <ul className='list-disc px-4'> <span className='bg-red-200'>Ingradients :</span> {recipe.food_ingredients.map((food, i) => <li >{food}</li>)}</ul>
                                    <div className="card-actions justify-start">
                                    <p>Ratings : {recipe.rating}</p>

                                    <button className=' p-2 mb-2 w-36 flex justify-between items-center btn-error text-white  ' onClick={notify}>
                                    add to favorit
                                    <Toaster></Toaster>
                                    <GrFavorite></GrFavorite>
                                </button>
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


