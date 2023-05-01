import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-blue-100
            flex justify-between mb-5">
                <div className="">
                    <img className='h-10' src="https://i.ibb.co/9ssRxKg/Untitled-design-2-prev-ui.png" alt="" />
                </div>
                <div className=' gap-4'>
                        <Link to='/'>Home</Link>
                        <Link to='/blogs'>Blogs</Link>
                </div>
                <div>
                    <img className='mr-5' src="" alt="profile" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;