import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3CenterLeftIcon, XMarkIcon } from '@heroicons/react/24/solid'
import './Header.css'

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='font-bold flex justify-between items-center bg-cyan-700 text-white p-5'>
            <h2 className='font-bold text-2xl lg:ml-20'>Quiz tracker</h2>
            <div onClick={() => setOpen(!open)} className="h-6 w-6 bg-amber-900 md:hidden">
                {
                    open ? <XMarkIcon /> : <Bars3CenterLeftIcon />
                }
            </div>
            <div className={`relative duration-500 ease-in ${open ? 'top-4' : 'top-[-120px]'} `}>
                <ul>
                    <li>
                        <Link className='mr-10 hover:text-red-800' to='/topics'>Home</Link>
                    </li>
                    <li>
                        <Link className='mr-10 hover:text-red-800' to='/topics'>Topics</Link>
                    </li>
                    <li>
                        <Link className='mr-10 hover:text-red-800' to='/statistics'>Statistics</Link>
                    </li>
                    <li>
                        <Link className='mr-10 hover:text-red-800' to='/blog'>Blog</Link>
                    </li>
                </ul>
            </div>
            <nav className='sm:flex flex-col hidden lg:flex-row mr-10'>
                <Link className='mr-10 hover:text-red-800' to='/topics'>Home</Link>
                <Link className='mr-10 hover:text-red-800' to='/topics'>Topics</Link>
                <Link className='mr-10 hover:text-red-800' to='/statistics'>Statistics</Link>
                <Link className='mr-10 hover:text-red-800' to='/blog'>Blog</Link>
            </nav>
        </div>
    );
};

export default Header;