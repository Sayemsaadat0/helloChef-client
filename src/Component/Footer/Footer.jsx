import React from 'react';
import {
    FaFacebookF,
    FaYoutube,
    FaTwitter
} from 'react-icons/Fa'

const Footer = () => {
    return (

        <footer className="footer footer-center p-10 bg-gradient-to-tr from-red-100 to-blue-200 text-base-content rounded">
           <img className='h-10' src="https://i.ibb.co/9ssRxKg/Untitled-design-2-prev-ui.png" alt="" />
            <div className="grid grid-flow-col gap-4">
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
            </div>
            <div>
                <div className="grid grid-flow-col gap-4">
                    <FaFacebookF className='h-10 w-10 '></FaFacebookF>

                    <FaYoutube className='h-10 w-10 text-red-500'></FaYoutube>

                    <FaTwitter className='h-10 w-10  text-blue-500 '></FaTwitter>
                </div>
            </div>
            <div>
                <p>Copyright © 2023 - All right reserved by Hello chef Industries Ltd</p>
            </div>
        </footer>

    );
};

export default Footer;