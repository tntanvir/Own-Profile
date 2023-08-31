import React from 'react';

const Footer = () => {
    return (
        <div className='bg-gray-800 text-sm p-4 text-center text-white'>
            CopyrightⒸ {new Date().getFullYear()} <span className='text-cyan-500'>tanvir</span>.All Rights reserved.

        </div>
    );
};

export default Footer;