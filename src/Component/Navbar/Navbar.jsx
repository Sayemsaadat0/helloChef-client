import React, { useContext } from 'react';
import './Navbar.css'
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
    const { user ,logout} = useContext(AuthContext)
    const handlelogout = ()=>{
        logout()
        .then()
        .catch(error =>{
            console.log(error)
        })
    }

    return (
        <div>
            <div className="navbar
            flex justify-between mb-5 mt-5 bg-slate-100">
                <div className="">
                    <img className='h-10' src="https://i.ibb.co/9ssRxKg/Untitled-design-2-prev-ui.png" alt="" />
                </div>
                <div className=' gap-4'>
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/blogs'>Blogs</NavLink>
                </div>
                <div>
                   {
                    user ?  
                   <>
                    <div className='tooltip tooltip-error' data-tip={user.displayName}> 
                    <img className='mr-5 h-10 rounded-full'  src={user.photoURL} alt=""/>
                    </div>
                    <button onClick={handlelogout} className=' text-red-500 hover:shadow-lg w-20 text-center'>
                        log out
                    </button>
                   </> : 
                    <NavLink className='bg-red-500 text-white w-20 text-center' to='/login'>Login</NavLink>
                   }
                </div>
            </div>
        </div>
    );
};

export default Navbar;