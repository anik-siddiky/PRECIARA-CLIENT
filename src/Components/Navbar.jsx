import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
    return (
        <div className=''>
            <div className=' bg-black text-white text-[11px] font-bold'>
                <div className='grid grid-cols-3 items-center py-3 px-16'>
                    <div></div>

                    <p className='text-center'>30 DAYS RETURN</p>

                    <div className='justify-end space-x-3 hidden md:flex'>
                        <Link>HELP</Link>
                        <Link>WISHLIST</Link>
                        <Link>JOIN US</Link>
                    </div>
                </div>
            </div>


            <div className='bg-white'>
                Bottom Nav
            </div>
        </div>
    );
};

export default Navbar;