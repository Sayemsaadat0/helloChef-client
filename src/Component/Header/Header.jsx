import React from 'react';

const Header = () => {
    return (
        <div className='sm:mt-5 md:mt-4 md:flex justify-around'>
            <div className='text-left  w-full flex flex-col justify-center '>
                <h1 className='text-3xl font-bold text-red-500 mb-3'>
                    Lorem ipsum dolor sit amet.
                </h1>
                <p className='text-left'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quam fuga minima ab labore dolorum vero necessitatibus quis sunt omnis.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quam fuga minima ab labore dolorum vero necessitatibus quis sunt omnis.
                </p>
                <button className='btn-error text-white mt-5 w-[25%]'>btn</button>
            </div>

            <div className='w-full '>
                <img src="https://i.ibb.co/wL1qrCx/Untitled-design-5.png" alt="" />
            </div>
        </div>
    );
};

export default Header;