import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate, useRouteError } from 'react-router-dom';
import { FaGithub } from 'react-icons/Fa';
import { FcGoogle } from 'react-icons/Fc';
import { AuthContext } from '../../Provider/AuthProvider';
const Login = () => {

    const [error , setError] = useState('')
    const defaultError = useRouteError()

    const location = useLocation()
    const navigate = useNavigate();
    const {signinUser,googleSignIn , gitSignIn} = useContext(AuthContext)
    
    const from = location.state?.from?.pathname || `/`
   
    const handleSignin = (event)=>{
        setError('')
        event.preventDefault()
        const form = event.target
        const email = form.email.value 
       
        const password = form.password.value 
        if(password.length < 6){
            setError('password must contain 6 character')
        }
        else{
            setError('')
        }

        console.log(email,password)
        signinUser(email,password)
        .then(result =>{
            const loggedUser = result.user 
            console.log(loggedUser)
            form.reset()
            navigate(from, {replace : true})
        })
        .catch(error =>{
          setError(error.message)
        })
    }

    const handleGoogle = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error))
    }
    const handleGithub = () => {
        gitSignIn()
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error))
    }


    return (
        <div>
            <div className=" bg-white flex  justify-center py-12 sm:px-6 lg:px-8">

                <div className=''>
                    <img className='w-[75%] ' src="https://img.freepik.com/free-vector/login-concept-illustration_114360-748.jpg?w=740&t=st=1683012496~exp=1683013096~hmac=9dafba375df117dbac0badca9e0ba3fbac3541481bffc7a9386f33a46039a288" alt="" />
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
                        <form onSubmit={handleSignin} className="space-y-6 " action="#" method="POST">
                            <div>
                                <label htmlFor="email" className=" block text-sm font-medium ">
                                    Email address
                                </label>
                                <div className="mt-1">
                                    <input id="email" name="email" type="email" required className="appearance-none block w-full  py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm" />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium ">
                                    Password
                                </label>
                                <div className="mt-1">
                                    <input id="password" name="password" type="password" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none  sm:text-sm" />
                                </div>
                                
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-500
                            hover:bg-black">
                                    Sign in
                                </button>
                                <p className='mt-4'>not have an account ? <Link className='underline text-red-500' to='/register'>Register here</Link></p>
                                <p className='text-red-500 font-semibold'>
                                    {error}
                                </p>
                               
                            </div>
                        </form>
                        <button onClick={handleGoogle} className="btn btn-outline btn-error mt-10 ">
                            <FcGoogle className='w-10'></FcGoogle>
                            Login With Google</button>
                        <button onClick={handleGithub} className="btn btn-outline  mt-3">
                            <FaGithub  className='w-10'></FaGithub>
                            Login With Github</button>
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