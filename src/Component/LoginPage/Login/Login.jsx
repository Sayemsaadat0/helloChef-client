import React from 'react';
import { Link } from 'react-router-dom';
import { FaLeaf } from 'react-icons/Fa';
const Login = () => {
    return (
        <div>
        <div className=" bg-white flex  justify-center py-12 sm:px-6 lg:px-8">
           
           <div className=''>
            <img className='w-[60%] ' src="https://img.freepik.com/free-vector/login-concept-illustration_114360-748.jpg?w=740&t=st=1683012496~exp=1683013096~hmac=9dafba375df117dbac0badca9e0ba3fbac3541481bffc7a9386f33a46039a288" alt="" />
           </div>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-3xl font-semibold text-gray-900">
                  Sign in 
                </h2>
            </div>
                <div className="bg-gradient-to-br flex flex-col py-10   shadow-lg sm:rounded-lg px-2
                hover:shadow-red-400 w-[75%] mx-auto 
                ">
                    <form  className="space-y-6 " action="#" method="POST">
                        <div>
                            <label htmlFor="email" className=" block text-sm font-medium ">
                                Email address
                            </label>
                            <div className="mt-1">
                                <input id="email" name="email" type="email"  required className="appearance-none block w-full  py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium ">
                                Password
                            </label>
                            <div className="mt-1">
                                <input id="password" name="password" type="password"  required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none  sm:text-sm" />
                            </div>
                        </div>

                        <div>
                            <button 
                            type="submit" 
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-500
                            hover:bg-black">
                                Sign in
                            </button>
                            <p className='mt-2'>not have an account ? <Link className='underline' to='/register'>Register here</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>


    </div>
    );
};

export default Login;



/* 
 className="p-1 rounded-lg bg-gray-100 shadow-md focus:outline-none focus:border-2 border-cyan-500" 

*/

/* 
 className="block p-1 mt-3 rounded-lg bg-gray-100 shadow-md focus:outline-none focus:border-2 border-cyan-500"
*/