import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3CenterLeftIcon, XMarkIcon } from '@heroicons/react/24/solid'
import './Header.css'

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='font-bold flex justify-between items-center bg-cyan-700 text-white p-5'>
            <h2 className='ml-20 font-bold text-2xl'>Quiz Exam</h2>
            <div onClick={() => setOpen(!open)} className="h-6 w-6 bg-amber-900 md:hidden">
                {
                    open ? <XMarkIcon /> : <Bars3CenterLeftIcon />
                }
            </div>
            <nav className='mr-20'>
                <Link className='mr-10 hover:text-red-800' to='/topics'>Home</Link>
                <Link className='mr-10 hover:text-red-800' to='/topics'>Topics</Link>
                <Link className='mr-10 hover:text-red-800' to='/statistics'>Statistics</Link>
                <Link className='mr-10 hover:text-red-800' to='/blog'>Blog</Link>
            </nav>
        </div>
    );
};

export default Header;