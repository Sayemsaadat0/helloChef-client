import React from 'react';

const Header = () => {
    return (
        <div className='sm:mt-5 md:mt-4 ms-6 md:flex justify-around'>
            <div className='text-left  w-full flex flex-col justify-center '>
                <h1 className='text-3xl font-bold  mb-3 '>
                    Lorem ipsum dolor <br />  
                    <span className='text-red-500'>
                    sit amet.
                    </span>
                </h1>
                <p className='text-left
                mr-10
                md:w-[75%]'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quam fuga minima ab labore dolorum vero necessitatibus quis sunt omnis.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quam fuga minima ab labore dolorum vero necessitatibus quis sunt omnis.
                </p>
                <button 
                className='bg-red-500
                 border-none hover:border-none mt-5 w-[25%] h-8 text-white
                 hover:bg-black rounded-sm
                 '>btn</button>
            </div>

            <div className='w-full '>
                <img src="https://i.ibb.co/wL1qrCx/Untitled-design-5.png " alt="" />
            </div>
        </div>
    );
};

export default Header;


// https://i.ibb.co/bv8nh4G/Untitled-design-5-prev-ui.png   not with bg


// https://i.ibb.co/wL1qrCx/Untitled-design-5.png     with bg