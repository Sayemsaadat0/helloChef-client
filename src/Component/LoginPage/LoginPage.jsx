import React from 'react';

import { Outlet } from 'react-router-dom';

const LoginPage = () => {
    return (
        <div>
           <Outlet></Outlet>
        </div>
    );
};

export default LoginPage;