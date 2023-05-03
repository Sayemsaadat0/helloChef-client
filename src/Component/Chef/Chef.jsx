import React, { useEffect, useState } from 'react';

const Chef = () => {
    const [chef, setChef] = useState([])

    useEffect(() => {
        fetch('http://localhost:6969/chef')
            .then(res => res.json())
            .then(data => setChef(data))
            .catch(error => console.error(error))
    },
        [])
    return (
        <div className='mt-10 '>
            <h2 className='text-center mt-20 mb-10 text-red-500 font-bold text-3xl '>Meet Our Talented Chef</h2>
            <div className='md:grid grid-cols-3'>
            {
                chef.map(c =>
                    <div key={c.id}>
                     
                        <div className="card card-compact w-96 bg-base-100 shadow-lg
                        shadow-gray-600
                        hover:scale-110 hover:shadow-red-300 duration-700 mb-10">
                            <figure><img src={c.chef_picture} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{c.chef_name}</h2>
                                <p>Year of Experienc : {c.year_of_experience} Years</p>
                                <p>
                                    Number of Recipes {c.number_of_recipes} Item
                                </p>
                                <div className="card-actions justify-start ">
                                    <button
                                        className='bg-red-500 border-none hover:border-none mt-2 w-[30%] h-8 text-white
                                      hover:bg-black rounded-sm'>View recipe</button>
                                </div>
                            </div>
                        </div>
                     
                    </div>)
            }
            </div>
        </div>
    );
};

export default Chef;




// chef_picture ,number_of_recipes,year_of_experience ,chef_short_bio