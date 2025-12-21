
import { IoBagOutline, IoPersonOutline, IoSearchOutline } from 'react-icons/io5';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Link } from 'react-router';

const Navbar = () => {
    return (
        <div className=''>
            <div className=' bg-black text-white text-[11px] font-bold'>
                <div className='grid grid-cols-3 items-center lg:py-3 md:py-2 py-1 px-16'>
                    <div></div>

                    <p className='text-center'>30 DAYS RETURN</p>

                    <div className='justify-end space-x-3 hidden md:flex'>
                        <Link>HELP</Link>
                        <Link>WISHLIST</Link>
                        <Link>JOIN US</Link>
                    </div>
                </div>
            </div>


            <div className='bg-white flex px-16 justify-between items-center py-5'>
                <div className='flex items-center gap-7'>
                    <h1 className='text-2xl font-extrabold'><Link to='/'>PRECIARA</Link></h1>
                    <div className='flex text-xs font-bold text-gray-700 space-x-2'>
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

                <div className='flex items-center gap-3 justify-center'>
                    <p className='font-extralight text-xs text-gray-700 '>Bangladesh</p>
                    <IoSearchOutline className='mt-0.5' size={30} />
                    <IoPersonOutline size={28} />
                    <IoBagOutline size={28} />
                </div>
            </div>
        </div>
    );
};

export default Navbar;