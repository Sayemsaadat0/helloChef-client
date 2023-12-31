import React from 'react';
import { FaStar } from 'react-icons/Fa';

const OurRecipe = () => {
    return (
        <div className='mx-5 mt-10'>
            <h2 className='text-center mt-20 mb-2 text-red-500 font-bold text-3xl'>
                Explore Our Hot Selling Recipe</h2>
            <p className='w-[50%] text-center mx-auto mb-10'>
            Discover our most popular recipes that have been tried and loved by many. From mouth-watering mains to decadent desserts, these recipes are sure to impress.</p>

            <div className='md:grid grid-cols-3 text-center gap-10 gp'>

                {/* card 1  */}
                <div className="card w-72 bg-base-100  mb-5">
                    <div className=''>
                        <div className="card-body p-0">
                            <img className='object-cover rounded-lg ' src="https://www.cktravels.com/wp-content/uploads/2020/12/what-to-eat-in-japan-1150x818.jpg" alt="" />
                            <p className='flex text-warning justify-center'>
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                            </p>
                            <p className='text-xs'>If a dog chews shoes whose shoes does he choose</p>
                            <p>$ <span className='text-red-500 text-sm'>26</span> </p>
                        </div>
                    </div>
                </div>
                {/* card 2  */}
                <div className="card w-72 bg-base-100 shadow-xl mb-5">
                    <div className=''>
                        <div className="card-body p-0">
                            <img className='object-cover rounded-lg mb-3' src="https://i.ibb.co/PZB54b8/1.png" alt="" />
                            <p className='flex text-warning'>
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                            </p>
                            <p>If a dog chews shoes whose shoes does he choose</p>
                            <p>$ <span className='text-red-500 text-sm'>26</span> </p>
                        </div>
                    </div>
                </div>
                {/* card 3  */}
                <div className="card w-72 bg-base-100 shadow-xl mb-5">
                    <div className=''>
                        <div className="card-body p-0">
                            <img className='object-cover rounded-lg ' src="https://i.ibb.co/XpTynpW/2.png" alt="" />
                            <p className='flex text-warning'>
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                            </p>
                            <p>If a dog chews shoes whose shoes does he choose</p>
                            <p>$ <span className='text-red-500 text-sm'>26</span> </p>
                        </div>
                    </div>
                </div>
                {/* card 4  */}
                <div className="card w-72 bg-base-100 shadow-xl mb-5">
                    <div className=''>
                        <div className="card-body p-0">
                            <img className='object-cover rounded-lg ' src="https://i.ibb.co/7CkvZ2K/3.png" alt="" />
                            <p className='flex text-warning'>
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                            </p>
                            <p>If a dog chews shoes whose shoes does he choose</p>
                            <p>$ <span className='text-red-500 text-sm'>26</span> </p>
                        </div>
                    </div>
                </div>
                {/* card 5  */}
                <div className="card w-72 bg-base-100 shadow-xl mb-5">
                    <div className=''>
                        <div className="card-body p-0">
                            <img className='object-cover rounded-lg ' src="https://i.ibb.co/17W42HJ/4.png" alt="" />
                            <p className='flex text-warning'>
                                <FaStar></FaStar><FaStar></FaStar>
                                <FaStar></FaStar><FaStar></FaStar>
                                <FaStar></FaStar>
                            </p>
                            <p>If a dog chews shoes whose shoes does he choose</p>
                            <p>$ <span className='text-red-500 text-sm'>26</span> </p>
                        </div>
                    </div>
                </div>
                {/* card 6  */}
                <div className="card w-72 bg-base-100 shadow-xl mb-5">
                    <div className=''>
                        <div className="card-body p-0">
                            <img className='object-cover rounded-lg ' src="https://i.ibb.co/ZxZjXpv/5.png" alt="" />
                            <p className='flex text-warning'>
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                            </p>
                            <p>If a dog chews shoes whose shoes does he choose</p>
                            <p>$ <span className='text-red-500 text-sm'>26</span> </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center'>
                <button
                    className='bg-red-500
                 border-none hover:border-none mt-5 w-[20%] h-8 text-white
                 hover:bg-black rounded-sm
                 '>See More recipies</button>
            </div>


        </div>
    );
};

export default OurRecipe;