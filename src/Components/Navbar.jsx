
import { useEffect, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { IoBagOutline, IoPersonOutline, IoSearchOutline } from 'react-icons/io5';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Link } from 'react-router';

const Navbar = () => {

    const messages = [
        '30 DAYS RETURN',
        'EXCLUSIVE COLLECTION',
        'UPTO 25% DISCOUNT'
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false)

            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
                setFade(true);
            }, 300);
        }, 3000);

        return () => clearInterval(interval);
    }, [])

    return (
        <div className=''>
            <div className=' bg-black text-white text-[11px] font-bold'>
                <div className='lg:grid lg:grid-cols-3 items-center lg:py-2.5 md:py-2 py-1.5 px-12'>
                    <div></div>

                    <div className='text-center lg:text-[11px] text-[10px]'>
                        <p className={`transition-all duration-700 ${fade ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'}`}>
                            {messages[currentIndex]}
                        </p>
                    </div>

                    <div className='justify-end space-x-3 hidden md:flex'>
                        <Link>HELP</Link>
                        <Link>WISHLIST</Link>
                        <Link>JOIN US</Link>
                    </div>
                </div>
            </div>


            <div className='bg-white grid grid-cols-3 lg:grid-cols-2 px-4 lg:px-12 justify-between items-center py-5 lg:py-4'>
                <AiOutlineMenu className='lg:hidden md:block' size={26} />
                <div className='flex items-center gap-7'>



                    <h1 className='text-xl lg:text-2xl font-extrabold text-center'><Link to='/'>PRECIARA</Link></h1>
                    <div className='hidden lg:flex text-[11px] font-bold text-gray-700 space-x-2'>
                        <div className='flex items-center cursor-pointer'>
                            <span>RING</span>
                            <MdKeyboardArrowDown className='mt-0.5' />
                        </div>

                        <div className='flex items-center cursor-pointer'>
                            <span>EAR RING</span>
                            <MdKeyboardArrowDown className='mt-0.5' />
                        </div>
                    </div>
                </div>

                <div className='flex items-center gap-2.5 lg:gap-3.5 justify-end'>
                    <p className='font-extralight text-xs text-gray-700 hidden lg:block'>Bangladesh</p>
                    <IoSearchOutline className='mt-0.5' size={23} />
                    <IoPersonOutline size={22} />
                    <IoBagOutline size={22} />
                </div>
            </div>
        </div>
    );
};

export default Navbar;