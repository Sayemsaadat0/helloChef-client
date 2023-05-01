import React from 'react';

const OurRecipe = () => {
    return (
        <div className='mx-5'>
            <h2 className='text-center mt-20 mb-2 text-red-500 font-bold text-3xl'>
                Explore Our Hot Selling Recipe</h2>
            <p className='w-96 text-center mx-auto mb-10'>
                Lorem ipsum dolor sit, amet consectetur adipisicing ores alias, voluptates corporis libero.</p>

            <div className='md:grid grid-cols-3  gap-10'>

                {/* card 1  */}
                <div className="card w-[100%] bg-base-100 shadow-xl mb-5">
                    <div className=''>
                        <div className="card-body p-0">
                            <img className='object-cover rounded-lg ' src="https://www.cktravels.com/wp-content/uploads/2020/12/what-to-eat-in-japan-1150x818.jpg" alt="" />
                            <h2 className="card-title">Card title!</h2>
                            <p>If a dog chews shoes whose shoes does he choose</p>
                        </div>
                    </div>
                </div>
                {/* card 2  */}
                <div className="card w-[100%] bg-base-100 shadow-xl mb-5">
                    <div className=''>
                        <div className="card-body p-0">
                            <img className='object-cover rounded-lg mb-3' src="https://i.ibb.co/PZB54b8/1.png" alt="" />
                            <h2 className="card-title">Card title!</h2>
                            <p>If a dog chews shoes whose shoes does he choose</p>
                        </div>
                    </div>
                </div>
                {/* card 3  */}
                <div className="card w-[100%] bg-base-100 shadow-xl mb-5">
                    <div className=''>
                        <div className="card-body p-0">
                            <img className='object-cover rounded-lg ' src="https://i.ibb.co/XpTynpW/2.png" alt="" />
                            <h2 className="card-title">Card title!</h2>
                            <p>If a dog chews shoes whose shoes does he choose</p>
                        </div>
                    </div>
                </div>
                {/* card 4  */}
                <div className="card w-[100%] bg-base-100 shadow-xl mb-5">
                    <div className=''>
                        <div className="card-body p-0">
                            <img className='object-cover rounded-lg ' src="https://i.ibb.co/7CkvZ2K/3.png" alt="" />
                            <h2 className="card-title">Card title!</h2>
                            <p>If a dog chews shoes whose shoes does he choose</p>
                        </div>
                    </div>
                </div>
                {/* card 5  */}
                <div className="card w-[100%] bg-base-100 shadow-xl mb-5">
                    <div className=''>
                        <div className="card-body p-0">
                            <img className='object-cover rounded-lg ' src="https://i.ibb.co/17W42HJ/4.png" alt="" />
                            <h2 className="card-title">Card title!</h2>
                            <p>If a dog chews shoes whose shoes does he choose</p>
                        </div>
                    </div>
                </div>
                {/* card 6  */}
                <div className="card w-[100%] bg-base-100 shadow-xl mb-5">
                    <div className=''>
                        <div className="card-body p-0">
                            <img className='object-cover rounded-lg ' src="https://i.ibb.co/ZxZjXpv/5.png" alt="" />
                            <h2 className="card-title">Card title!</h2>
                            <p>If a dog chews shoes whose shoes does he choose</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center'>
                <button
                    className='bg-red-500
                 border-none hover:border-none mt-5 w-[10%] h-8 text-white
                 hover:bg-black rounded-sm
                 '>btn</button>
            </div>


        </div>
    );
};

export default OurRecipe;