import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError()
    return (
        <div>
            <div className='flex h-screen justify-center items-center'>
                <img src=" https://img.freepik.com/free-vector/404-error-lost-space-concept-illustration_114360-7871.jpg?w=826&t=st=1682978341~exp=1682978941~hmac=d5008bd80a198f5948095bae684668377c33025bdfa263a6cb2c2e90f2577b69" alt="" />

            </div>
            <p className='text-4xl text-red-500'>{error.message}</p>
        </div>
    );
};

export default ErrorPage;



// https://img.freepik.com/free-vector/404-error-lost-space-concept-illustration_114360-7871.jpg?w=826&t=st=1682978341~exp=1682978941~hmac=d5008bd80a198f5948095bae684668377c33025bdfa263a6cb2c2e90f2577b69


// https://i.ibb.co/MCWYhJQ/Present-not-found.png