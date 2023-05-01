import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const user = null
    return (
        <div>
            <div className="navbar
            flex justify-between mb-5 mt-5 bg-slate-100">
                <div className="">
                    <img className='h-10' src="https://i.ibb.co/9ssRxKg/Untitled-design-2-prev-ui.png" alt="" />
                </div>
                <div className=' gap-4'>
                        <Link to='/'>Home</Link>
                        <Link to='/blogs'>Blogs</Link>
                </div>
                <div>
              {
                     user ?
                      <img className='mr-5' src="" alt="profile" /> : 
                     <Link className='bg-red-500 text-white w-20 text-center '>login</Link>
              }
                </div>
            </div>
        </div>
    );
};

export default Navbar;