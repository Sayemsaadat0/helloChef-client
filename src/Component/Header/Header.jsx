import React from 'react';

const Header = () => {
    return (
        <div className='bg-red-200 sm:mt-5 md:mt-20 md:flex justify-around'>
           <div className='text-center bg-slate-400 w-full'>
            text
           </div>

           <div className='w-full text-center'>
            image
           </div>
        </div>
    );
};

export default Header;